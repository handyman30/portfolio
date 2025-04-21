'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Check for code in URL parameters
  useEffect(() => {
    const codeFromUrl = searchParams?.get('code');
    if (codeFromUrl) {
      setAccessCode(codeFromUrl);
      // Auto-submit when code is provided via URL
      setTimeout(() => {
        handleCodeVerification(codeFromUrl);
      }, 500);
    }
  }, [searchParams]);
  
  // Check if user already has access via localStorage
  useEffect(() => {
    const storedAccess = localStorage.getItem('breakIntoTechAccess');
    if (storedAccess === 'paid-access-granted') {
      setHasAccess(true);
    }
  }, []);
  
  // If user already has access, redirect to dashboard
  useEffect(() => {
    if (hasAccess) {
      router.push('/break-into-tech/dashboard');
    }
  }, [hasAccess, router]);

  // Validate the access code
  const handleCodeVerification = (code: string) => {
    setIsLoading(true);
    
    // Valid access codes:
    // 1. Hardcoded admin/demo codes
    const adminCodes = ['course2024', 'handy123'];
    
    // 2. BIT-format codes (from payment page)
    const bitCodePattern = /^BIT-\d{6}-\d{4}$/;
    
    // In a real app, you'd verify this against a database or API
    if (adminCodes.includes(code) || bitCodePattern.test(code)) {
      // Store both the code and the access flag
      localStorage.setItem('breakIntoTechAccess', 'paid-access-granted');
      localStorage.setItem('breakIntoTechCode', code);
      
      setError('');
      setSuccess('Access code verified successfully!');
      
      // Short delay for feedback before redirect
      setTimeout(() => {
        router.push('/break-into-tech/dashboard');
      }, 1000);
    } else {
      setError('Invalid access code. Please try again or contact support.');
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCodeVerification(accessCode);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <Link href="/break-into-tech" className="text-2xl font-bold text-emerald-600">
            Break Into Tech
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter your access code to continue learning
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded-md text-sm">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md text-sm">
              {success}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700">
                Access Code
              </label>
              <input
                id="accessCode"
                name="accessCode"
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Enter your access code (e.g., BIT-123456-7890)"
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Verifying...' : 'Continue Learning'}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an access code?{' '}
              <Link href="/break-into-tech/payment" className="text-emerald-600 hover:text-emerald-500 font-medium">
                Purchase the course
              </Link>
            </p>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Lost your access code?</h3>
            <p className="text-sm text-gray-600">
              If you&apos;ve lost your access code, please email us at{' '}
              <a href="mailto:handy.hasan@yahoo.com?subject=Access%20Code%20Recovery" className="text-emerald-600 hover:text-emerald-500">
                handy.hasan@yahoo.com
              </a>{' '}
              with your purchase details, and we&apos;ll send your code to you.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-xs">
          <p className="mb-1">Need help? Contact <a href="mailto:handy.hasan@yahoo.com" className="text-emerald-600">handy.hasan@yahoo.com</a></p>
          <p>&copy; {new Date().getFullYear()} Break Into Tech. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Loading...</h2>
          <p className="mt-2 text-gray-600">Please wait while we load the login page.</p>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
} 