'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple validation (in a real app, you'd verify the email against a database)
    if (email && email.includes('@')) {
      // Simulate login process
      setTimeout(() => {
        localStorage.setItem('courseAccess', email);
        window.location.href = '/break-into-tech/dashboard';
      }, 1000);
    } else {
      alert('Please enter a valid email address');
      setIsLoading(false);
    }
  };

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

      {/* Login Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-100 dark:from-emerald-900 dark:to-teal-800">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8"
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
                <p className="text-slate-600 dark:text-slate-400">
                  Enter your email to access the course
                </p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-slate-700"
                    placeholder="your.email@example.com"
                    required
                  />
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Use the email address you provided during purchase
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Logging In...
                    </div>
                  ) : (
                    'Access Course'
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Don't have access yet?{' '}
                  <Link href="/break-into-tech/payment" className="text-emerald-500 hover:text-emerald-600 font-medium">
                    Purchase the course
                  </Link>
                </p>
                
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Having trouble accessing your course? Email me at{' '}
                    <a href="mailto:handy.hasan@yahoo.com" className="text-emerald-500 hover:text-emerald-600">
                      handy.hasan@yahoo.com
                    </a>
                  </p>
                </div>
              </div>
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