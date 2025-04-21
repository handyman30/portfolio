'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function PaymentPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [showAccessCode, setShowAccessCode] = useState(false);
  const searchParams = useSearchParams();
  
  // Generate a simple unique-ish access code
  const generateAccessCode = () => {
    const prefix = 'BIT';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${prefix}-${timestamp}-${random}`;
  };
  
  // Check for payment_success flag in URL when component loads
  useEffect(() => {
    const paymentSuccess = searchParams?.get('payment_success');
    const sessionId = searchParams?.get('session_id');
    
    if (paymentSuccess === 'true' && sessionId) {
      // Verify the payment with our backend
      verifyPayment(sessionId);
    }
  }, [searchParams]);
  
  // Verify the payment with our backend
  const verifyPayment = async (sessionId: string) => {
    setIsLoading(true);
    
    try {
      // In a real app, you would make an API call to verify the session
      // For now, we'll simulate a successful verification
      
      // Generate a code for this verified purchase
      const newAccessCode = generateAccessCode();
      setAccessCode(newAccessCode);
      
      // Store access in localStorage
      localStorage.setItem('breakIntoTechAccess', 'paid-access-granted');
      localStorage.setItem('breakIntoTechCode', newAccessCode);
      
      // Show the success screen
      setShowAccessCode(true);
      setIsLoading(false);
    } catch (error) {
      console.error('Error verifying payment:', error);
      setIsLoading(false);
    }
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      // Don't generate the code yet - we'll do that after successful payment
      
      // Use direct amount - simpler approach
      const amount = 20; // $20 AUD
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          amount,
          successUrl: `${window.location.origin}/break-into-tech/payment?payment_success=true`,
          cancelUrl: `${window.location.origin}/break-into-tech/payment?payment_canceled=true`
        }),
      });
      
      const data = await response.json();
      
      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url;
      } else {
        console.error('No checkout URL returned:', data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      setIsLoading(false);
    }
  };

  const features = [
    "Four comprehensive modules covering tech fundamentals",
    "Step-by-step guidance to transition into tech",
    "Interview preparation strategies",
    "Resume and portfolio templates",
    "Lifetime access to course materials"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Break Into Tech Mini-Course
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Your roadmap to a successful career transition into the tech industry
          </p>
        </div>

        {showAccessCode ? (
          <div className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
              <p className="text-gray-600 mb-6">Thank you for purchasing the Break Into Tech course. Here's your access code:</p>
              
              <div className="bg-emerald-50 p-4 rounded-md mb-6 flex items-center justify-center">
                <span className="font-mono text-xl font-bold tracking-wider text-emerald-800">{accessCode}</span>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 text-left">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Important:</strong> Please save this code somewhere safe. You'll need it to access the course if you clear your browser data or switch devices.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href={`/break-into-tech/login?code=${accessCode}`} 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Start Learning Now
                </Link>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Print Access Code
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              {searchParams?.get('payment_canceled') === 'true' && (
                <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
                  <p>Your payment was canceled. Please try again or contact support if you need assistance.</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                
                {/* Features Column */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h2>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What People Are Saying</h3>
                    <div className="italic text-gray-600 mb-4">
                      "This course provided me with the exact roadmap I needed to transition from marketing to product management. Worth every penny!" 
                      <p className="mt-2 font-medium text-gray-900">— Alex R., Product Manager</p>
                    </div>
                    <div className="italic text-gray-600">
                      "The structured approach and practical tips helped me land my first developer role after just 6 months of learning to code." 
                      <p className="mt-2 font-medium text-gray-900">— Jamie T., Junior Developer</p>
                    </div>
                  </div>
                </div>
                
                {/* Payment Column */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Course</h2>
                  <div className="flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">$20</span>
                    <span className="ml-1 text-2xl font-semibold">AUD</span>
                  </div>
                  <p className="mt-1 text-lg text-gray-600"><s>$80</s> — 75% off</p>
                  <p className="mt-4 text-gray-500">One-time payment, lifetime access</p>
                  
                  <div className="mt-8">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-md font-semibold text-lg transition duration-200 ease-in-out ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      onClick={handleCheckout}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </div>
                      ) : 'Secure Checkout'}
                    </motion.button>
                  </div>
                  
                  <div className="mt-6 text-center text-gray-500 text-sm">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="h-5 w-5 text-gray-400 mr-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Secure payment
                    </div>
                    <p>30-day money-back guarantee</p>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <dl className="space-y-8">
                  <div>
                    <dt className="text-lg font-medium text-gray-900">How do I access the course materials?</dt>
                    <dd className="mt-2 text-base text-gray-500">After purchase, you'll receive a unique access code that you can use to log in to the course dashboard. Be sure to save this code as you'll need it to regain access if you switch devices or clear your browser data.</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-medium text-gray-900">Is this course suitable for beginners?</dt>
                    <dd className="mt-2 text-base text-gray-500">Absolutely! The course is designed for people at all stages, especially those looking to transition into tech from other industries.</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-medium text-gray-900">What if I'm not satisfied with the course?</dt>
                    <dd className="mt-2 text-base text-gray-500">We offer a 30-day money-back guarantee. If you're not completely satisfied, just email us for a full refund.</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-medium text-gray-900">What if I lose my access code?</dt>
                    <dd className="mt-2 text-base text-gray-500">If you lose your access code, simply email us at handy.hasan@yahoo.com with your purchase information, and we'll resend your code.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Handy Hasan. All rights reserved.</p>
          <p className="mt-1">Questions? Contact <a href="mailto:handy.hasan@yahoo.com" className="text-emerald-600 hover:text-emerald-500">handy.hasan@yahoo.com</a></p>
        </div>
      </div>
    </div>
  );
} 