'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

function PaymentPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Effect to check URL parameters for success or session_id
  useEffect(() => {
    const checkSuccess = async () => {
      // Check if redirected with success flag
      const success = searchParams?.get('success');
      if (success === 'true') {
        // Generate a unique access code (in real app, would be from database)
        const code = generateAccessCode();
        setAccessCode(code);
        setShowSuccess(true);
        
        // Save access to localStorage
        localStorage.setItem('breakIntoTechAccess', 'paid-access-granted');
        localStorage.setItem('breakIntoTechCode', code);
      }
    };
    
    checkSuccess();
  }, [searchParams]);
  
  const verifyPayment = async (sessionId: string) => {
    // In a real application, this would verify with your backend
    // For now, we'll simulate success
    console.log('Verifying payment session:', sessionId);
    return true;
  };
  
  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      // In a real app, this would redirect to your API route
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: 'Break Into Tech Course',
          productPrice: 2000, // $20.00 in cents
          successUrl: `${window.location.origin}/break-into-tech/payment?success=true`,
          cancelUrl: `${window.location.origin}/break-into-tech/payment?canceled=true`,
        }),
      });
      
      const { url } = await response.json();
      
      // Redirect to checkout
      window.location.href = url;
    } catch (error) {
      console.error('Error during checkout:', error);
      setIsLoading(false);
    }
  };
  
  // Generate a course access code
  const generateAccessCode = () => {
    const prefix = 'BIT';
    const numbers1 = Math.floor(100000 + Math.random() * 900000); // 6-digit number
    const numbers2 = Math.floor(1000 + Math.random() * 9000); // 4-digit number
    return `${prefix}-${numbers1}-${numbers2}`;
  };
  
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 space-y-6">
          <div className="text-center">
            <FaCheckCircle className="mx-auto h-16 w-16 text-emerald-500" />
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Payment Successful!</h1>
            <p className="mt-2 text-gray-600">Thank you for purchasing the Break Into Tech course.</p>
          </div>
          
          <div className="bg-emerald-50 p-4 rounded-md">
            <h2 className="font-medium text-emerald-800">Your Access Code:</h2>
            <div className="mt-2 p-3 bg-white border border-emerald-200 rounded-md text-center">
              <p className="text-xl font-mono">{accessCode}</p>
            </div>
            <p className="mt-2 text-xs text-emerald-700">
              Keep this code safe. You can use it to access the course on any device.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/break-into-tech/dashboard" className="block w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-center rounded-md shadow-sm">
              Go to Course Dashboard
            </Link>
            
            <Link href="/break-into-tech" className="block w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center rounded-md">
              Return to Course Page
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-12 sm:pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Break Into Tech
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Your journey into the tech industry starts today
            </p>
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="p-8 sm:p-12 lg:py-24">
              <div className="max-w-md mx-auto lg:max-w-none">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Complete Course Access
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Get access to all 4 modules of the Break Into Tech course, including:
                  </p>
                </div>
                
                <div className="mt-10">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="h-6 w-6 text-emerald-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <span className="font-medium text-gray-900">Module 1:</span> Resume building and personal branding for tech roles
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="h-6 w-6 text-emerald-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <span className="font-medium text-gray-900">Module 2:</span> Interview preparation and communication strategies
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="h-6 w-6 text-emerald-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <span className="font-medium text-gray-900">Module 3:</span> Technical interview preparation with real-world examples
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="h-6 w-6 text-emerald-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <span className="font-medium text-gray-900">Module 4:</span> Strategy, mindset and career leverage techniques
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="h-6 w-6 text-emerald-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Downloadable resources and worksheets
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheckCircle className="h-6 w-6 text-emerald-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Lifetime access to all future updates
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <p className="text-sm text-gray-500">Student testimonial</p>
                          <p className="mt-1 text-base text-gray-900">
                            "I wasn't getting any interviews until I applied the techniques from Module 1. Within two weeks, I had three interviews lined up!"
                          </p>
                          <p className="mt-2 text-sm text-gray-500">— Alex K., Software Engineer</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <p className="text-sm text-gray-500">Student testimonial</p>
                          <p className="mt-1 text-base text-gray-900">
                            "The technical interview preparation was extremely practical. I felt so much more confident in my interview and got the job!"
                          </p>
                          <p className="mt-2 text-sm text-gray-500">— Jamie T., Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="py-12 px-6 bg-gray-50 lg:px-12 lg:py-24">
              <div className="max-w-md mx-auto lg:max-w-none">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Unlock Your Tech Career
                  </h3>
                  
                  <div className="mt-6 flex items-center justify-center">
                    <p className="text-5xl font-extrabold text-gray-900">$20</p>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">AUD</p>
                      <p className="text-sm line-through text-gray-500">$80</p>
                    </div>
                  </div>
                  
                  <p className="mt-2 text-sm text-emerald-600 font-semibold">
                    75% off - Limited Time Offer
                  </p>
                  
                  <div className="mt-8">
                    <button
                      onClick={handleCheckout}
                      disabled={isLoading}
                      className={`w-full bg-emerald-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${
                        isLoading ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? 'Processing...' : 'Checkout Now'}
                    </button>
                    
                    <p className="mt-2 text-xs text-gray-500">
                      Secure payment processing
                    </p>
                  </div>
                  
                  <div className="mt-10 border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-medium text-gray-900">
                      100% Money-Back Guarantee
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      If you're not completely satisfied with the course, just let us know within 30 days for a full refund.
                    </p>
                  </div>
                  
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h4>
                    
                    <dl className="mt-4 space-y-6 text-left">
                      <div>
                        <dt className="text-base font-medium text-gray-900">How long do I have access?</dt>
                        <dd className="mt-1 text-sm text-gray-600">
                          You have lifetime access to all course materials and future updates.
                        </dd>
                      </div>
                      
                      <div>
                        <dt className="text-base font-medium text-gray-900">Can I access on mobile devices?</dt>
                        <dd className="mt-1 text-sm text-gray-600">
                          Yes, the course is accessible on all devices - desktop, tablet, and mobile.
                        </dd>
                      </div>
                      
                      <div>
                        <dt className="text-base font-medium text-gray-900">Is there support available?</dt>
                        <dd className="mt-1 text-sm text-gray-600">
                          Yes, you can email questions to handy.hasan@yahoo.com and get personalized help.
                        </dd>
                      </div>
                    </dl>
                  </div>
                  
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <Link href="/break-into-tech" className="text-emerald-600 font-medium hover:text-emerald-500">
                      Return to course overview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Loading payment page...</h2>
          <p className="mt-2 text-gray-600">Please wait while we prepare your checkout experience.</p>
        </div>
      </div>
    }>
      <PaymentPage />
    </Suspense>
  );
} 