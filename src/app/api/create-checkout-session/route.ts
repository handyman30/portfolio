import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16' as any, // Cast to any to avoid TypeScript error
});

export async function POST(request: Request) {
  try {
    const { priceId, amount, successUrl, cancelUrl } = await request.json();
    
    console.log('Received checkout request:', { priceId, amount, successUrl, cancelUrl });

    // Default URLs if not provided
    const defaultSuccessUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/break-into-tech/dashboard?success=true`;
    const defaultCancelUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/break-into-tech/payment?canceled=true`;
    
    // Use provided URLs or fall back to defaults
    const finalSuccessUrl = successUrl || defaultSuccessUrl;
    const finalCancelUrl = cancelUrl || defaultCancelUrl;
    
    // Create Checkout Session
    let session;
    
    if (priceId && priceId !== 'price_REPLACE_THIS_WITH_YOUR_PRICE_ID') {
      // Use existing product price from Stripe
      console.log('Using priceId:', priceId);
      session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: finalSuccessUrl + (finalSuccessUrl.includes('?') ? '&' : '?') + `session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: finalCancelUrl,
        metadata: {
          productType: 'tech-course',
        },
      });
    } else if (amount) {
      // Create a direct payment with specified amount
      console.log('Using direct amount:', amount);
      session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'aud', // Australian dollars
              product_data: {
                name: 'Break Into Tech Course',
                description: 'Complete access to all course modules',
              },
              unit_amount: amount * 100, // amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: finalSuccessUrl + (finalSuccessUrl.includes('?') ? '&' : '?') + `session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: finalCancelUrl,
        metadata: {
          productType: 'tech-course',
        },
      });
    } else {
      console.error('Missing required parameters');
      return NextResponse.json(
        { error: 'Either priceId or amount is required' },
        { status: 400 }
      );
    }

    console.log('Checkout session created:', session.url);
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session', details: error.message },
      { status: 500 }
    );
  }
} 