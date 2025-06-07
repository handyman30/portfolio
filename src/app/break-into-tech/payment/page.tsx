'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    paypal?: any;
  }
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function PaymentPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Load PayPal SDK
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD';
    script.onload = () => {
      setPaypalLoaded(true);
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '20.00'
                },
                description: 'Break Into Tech Mini-Course - Lifetime Access'
              }]
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              alert(`Transaction completed by ${details.payer.name.given_name}! Redirecting to course content...`);
              // Redirect to course content or dashboard
              window.location.href = '/break-into-tech/dashboard';
            });
          },
          onError: (err: any) => {
            console.error('PayPal error:', err);
            alert('There was an error processing your payment. Please try again.');
          }
        }).render('#paypal-button-container');
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-slate-900 shadow-sm z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Handy Hasan</Link>
          <div className="flex space-x-6">
            <Link href="/break-into-tech" className="text-emerald-500 hover:text-emerald-600 transition-colors">Course</Link>
            <Link href="/#contact" className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Payment Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold mb-4">Complete Your Purchase</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Get instant access to the Break Into Tech Mini-Course
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Summary */}
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 h-fit"
              >
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-4 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <h3 className="font-medium">Break Into Tech Mini-Course</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Lifetime access to all modules</p>
                    </div>
                    <span className="font-bold">$20.00</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span>$20.00</span>
                  </div>
                </div>
                
                <div className="bg-emerald-50 dark:bg-emerald-900 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-emerald-800 dark:text-emerald-200">What's Included:</h4>
                  <ul className="space-y-1 text-sm text-emerald-700 dark:text-emerald-300">
                    <li>✓ 4 comprehensive modules</li>
                    <li>✓ Resume templates and examples</li>
                    <li>✓ Interview question bank</li>
                    <li>✓ Technical test strategies</li>
                    <li>✓ Career growth tips</li>
                    <li>✓ Lifetime access</li>
                    <li>✓ 100% money-back guarantee</li>
                  </ul>
                </div>
              </motion.div>

              {/* Payment Form */}
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
                
                <div className="mb-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Complete your payment securely through PayPal. You can pay with your PayPal account or any major credit card.
                  </p>
                  
                  {/* PayPal Button Container */}
                  <div id="paypal-button-container" className="min-h-[50px]">
                    {!paypalLoaded && (
                      <div className="flex items-center justify-center h-12 bg-slate-100 dark:bg-slate-700 rounded-lg">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500"></div>
                        <span className="ml-2 text-slate-600 dark:text-slate-400">Loading payment options...</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Alternative Payment Note */}
                  <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <strong>Don't have PayPal?</strong> No problem! You can pay with any credit or debit card through PayPal's guest checkout.
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Having issues? Email me at <a href="mailto:handy.hasan@yahoo.com" className="text-emerald-500 hover:text-emerald-600">handy.hasan@yahoo.com</a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Security & Guarantee */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="flex justify-center items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z" clipRule="evenodd" />
                  </svg>
                  <span>Instant Access</span>
                </div>
              </div>
              
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                By completing this purchase, you agree to our terms of service. If you're not completely satisfied, 
                email us within 30 days for a full refund.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} Handy Hasan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 