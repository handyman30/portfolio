'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function BreakIntoTechPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-slate-900 shadow-sm z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Handy Hasan</Link>
          <div className="flex space-x-6">
            <Link href="/#experience" className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Experience</Link>
            <Link href="/#projects" className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Projects</Link>
            <Link href="/#blog" className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Blog</Link>
            <Link href="/#contact" className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-100 dark:from-emerald-900 dark:to-teal-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-1 bg-emerald-100 dark:bg-emerald-700 text-emerald-700 dark:text-emerald-100 rounded-full text-sm font-medium"
            >
              Just $20 for all modules • Money-back guarantee
            </motion.div>
            
            <motion.h1
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Break Into Tech (or ASX Companies) Mini-Course
            </motion.h1>
            
            <motion.p
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl mb-8 text-slate-700 dark:text-slate-300"
            >
              Real advice from someone who did it — not theory, but actual strategies that work.
            </motion.p>
            
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/break-into-tech/payment" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-md"
              >
                Get Instant Access
              </Link>
              <Link 
                href="/break-into-tech/login" 
                className="bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-md"
              >
                Already Purchased? Login
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              What You'll Learn
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Module 1 */}
              <motion.div 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <h3 className="text-xl font-bold mb-3">Module 1: Resume That Gets You Shortlisted</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Build a lean, effective resume that speaks to hiring managers in tech/product companies.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Resume Philosophy: Why 'less is more' and results &gt; responsibilities</li>
                  <li>• Template Download: My personal template</li>
                  <li>• Make Your Resume Hit: Strong summary, impact using numbers</li>
                  <li>• Bonus: Mistakes that instantly kill a resume</li>
                </ul>
              </motion.div>

              {/* Module 2 */}
              <motion.div 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <h3 className="text-xl font-bold mb-3">Module 2: Interview Strategy & Real Questions</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Prepare for what actually gets asked — with structure and strategy.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>• ASX Companies Interview Breakdown</li>
                  <li>• Question Bank: Common questions and how to answer them</li>
                  <li>• Answering Like a Pro: STAR method (but actually useful)</li>
                  <li>• Follow-Up Emails That Work</li>
                </ul>
              </motion.div>

              {/* Module 3 */}
              <motion.div 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                <h3 className="text-xl font-bold mb-3">Module 3: Technical Test – Pass Without Being a Genius</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Ace code tests and take-homes even if you're not LeetCode grinding daily.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>• What Companies Actually Want: Clear logic &gt; fancy tricks</li>
                  <li>• How I Prepared: AI tools + past projects = cheat code</li>
                  <li>• Example Questions: Build a feature (not just algorithms)</li>
                  <li>• Bonus: Handling 'System Design Lite' questions</li>
                </ul>
              </motion.div>

              {/* Module 4 */}
              <motion.div 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.7, delay: 1.0 }}
              >
                <h3 className="text-xl font-bold mb-3">Module 4: Strategy, Mindset and Career Leverage</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Think long-term about your career and build leverage that compounds.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Building Your Personal Brand in Tech</li>
                  <li>• Networking Strategies That Actually Work</li>
                  <li>• Salary Negotiation for Tech Roles</li>
                  <li>• Creating Multiple Income Streams</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-emerald-50 dark:bg-emerald-900" id="pricing">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Simple & Affordable Pricing</h2>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 text-center">
              <div className="inline-block mb-6 px-4 py-1 bg-emerald-100 dark:bg-emerald-700 text-emerald-700 dark:text-emerald-100 rounded-full text-sm font-medium">
                All modules included
              </div>
              
              <div className="flex justify-center items-center mb-2">
                <span className="text-2xl font-bold line-through text-slate-400 mr-3">$80</span>
                <h3 className="text-5xl font-bold">$20</h3>
              </div>
              <p className="text-emerald-600 font-medium mb-1">75% discount</p>
              <p className="text-slate-600 dark:text-slate-300 mb-8">One-time payment • Lifetime access</p>
              
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center">
                  <span className="bg-emerald-100 dark:bg-emerald-700 text-emerald-700 dark:text-emerald-100 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Lifetime access to all modules</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-emerald-100 dark:bg-emerald-700 text-emerald-700 dark:text-emerald-100 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Real examples and templates</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-emerald-100 dark:bg-emerald-700 text-emerald-700 dark:text-emerald-100 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Regularly updated content</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-emerald-100 dark:bg-emerald-700 text-emerald-700 dark:text-emerald-100 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>100% money-back guarantee</span>
                </li>
              </ul>
              
              <a 
                href="/break-into-tech/payment" 
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 w-full rounded-lg text-lg font-medium transition-colors shadow-md mb-3"
              >
                Get Instant Access
              </a>
              
              <Link 
                href="/break-into-tech/login" 
                className="inline-block bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 w-full rounded-lg text-lg font-medium transition-colors shadow-md"
              >
                Already Purchased? Login
              </Link>
              
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Secure payment via PayPal. If you're not satisfied, email me for a full refund.
              </p>
            </div>
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