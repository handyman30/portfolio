'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BreakIntoTechPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-slate-900 shadow-sm z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="font-bold text-xl cursor-pointer">Handy Hasan</span>
          </Link>
          <Link href="/#contact">
            <span className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors cursor-pointer">Contact</span>
          </Link>
        </div>
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
              className="mb-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#pricing" 
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-md"
              >
                Enroll Now
              </a>
              <Link 
                href="/break-into-tech/login" 
                className="inline-block bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-md"
              >
                Login
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pain Points Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Are You Struggling To Break Into Tech?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md"
              >
                <div className="text-emerald-500 mb-4 text-2xl font-bold">✘</div>
                <p className="mb-3 font-medium">Sending out hundreds of applications with no response</p>
                <p className="text-slate-600 dark:text-slate-300">Nobody tells you that 90% of job applications go straight to the bin because of simple mistakes.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md"
              >
                <div className="text-emerald-500 mb-4 text-2xl font-bold">✘</div>
                <p className="mb-3 font-medium">Interview anxiety from not knowing what to expect</p>
                <p className="text-slate-600 dark:text-slate-300">The interview structure at top companies is predictable once you know what they're looking for.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md"
              >
                <div className="text-emerald-500 mb-4 text-2xl font-bold">✘</div>
                <p className="mb-3 font-medium">Wasting time on technical prep that doesn't match what companies actually test</p>
                <p className="text-slate-600 dark:text-slate-300">You don't need to solve every LeetCode problem - you need to focus on the right ones.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md"
              >
                <div className="text-emerald-500 mb-4 text-2xl font-bold">✘</div>
                <p className="mb-3 font-medium">Getting ghosted and not knowing where you went wrong</p>
                <p className="text-slate-600 dark:text-slate-300">There's an art to following up and navigating the hiring process without being too pushy.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instructor/About Me Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-emerald-100 flex-shrink-0">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Handy Hasan"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-4">Learn From Someone Who's Been There</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Hi, I'm Handy. I work as a Software Engineer at various ASX-listed companies, including some of Australia's largest e-commerce platforms. I've been through the application and interview process at numerous tech companies, and I've learned what works and what doesn't.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  I'm not a recruiter or career coach - I'm an engineer who's been in your shoes and successfully made the jump. I've distilled everything I've learned into this practical, no-fluff mini-course to help you do the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Modules Section */}
      <section className="py-16 bg-white dark:bg-slate-800" id="modules">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What You'll Learn</h2>
            
            <div className="space-y-8">
              {/* Module 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md border-l-4 border-emerald-500"
              >
                <h3 className="text-xl font-bold mb-4">Module 1: Resume That Gets You Shortlisted</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Your best resume template (ATS-friendly and recruiter-approved)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Before/after examples of impactful bullet points that highlight achievements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Tailoring techniques specifically for product-based companies like ASX-listed companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Keywords and phrases that get past automated filters</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Module 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md border-l-4 border-emerald-500"
              >
                <h3 className="text-xl font-bold mb-4">Module 2: Interview Structure & Real Questions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Actual questions from ASX companies' interview processes (updated regularly)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>What startups and scaleups are specifically looking for in candidates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>How to answer behavioral questions without sounding generic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>STAR method examples tailored to tech positions</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Module 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md border-l-4 border-emerald-500"
              >
                <h3 className="text-xl font-bold mb-4">Module 3: Technical Prep (Not Just LeetCode)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>What's actually expected in frontend/backend technical interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Where AI tools help (and where they don't) in your prep</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Real-life bug-fix test walkthrough with annotations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>The 20% of coding problems that cover 80% of what you'll be asked</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Module 4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-md border-l-4 border-emerald-500"
              >
                <h3 className="text-xl font-bold mb-4">Module 4: Strategy & Mindset</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>How to avoid getting ghosted by recruiters and hiring managers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Playing the long game - networking strategies that don't feel desperate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>How to follow up, negotiate, and keep leverage throughout the process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Mindset shifts that separate successful candidates from the rest</span>
                  </li>
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
                Secure payment via Stripe. If you're not satisfied, email me for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Guarantee Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-700 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-emerald-500 text-5xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">100% Money-Back Guarantee</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  If you don't find the course valuable, simply email me within 30 days of purchase for a full refund, no questions asked. I'm that confident this will help you in your job search.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Is this course right for me?</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  This course is designed for people looking to break into tech roles, whether you're a recent graduate, career changer, or someone who's been applying without success. It's especially relevant if you're targeting ASX-listed companies or similar e-commerce/tech businesses in Australia.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">How is this different from free resources online?</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  This course provides specific, insider knowledge from someone who's actually been through the process at multiple ASX companies and other tech companies. It's not generic advice - it's tailored strategies and real examples that worked for me and others I've mentored.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">How do I access the course after purchase?</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  After your payment is processed, you'll receive an email with login credentials to access all course materials. Everything is available immediately, and you'll have lifetime access.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Can I get a refund if I'm not satisfied?</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Absolutely. If you're not completely satisfied with the course, just email me within 30 days of purchase for a full refund. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-700 dark:to-teal-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Tech Career?</h2>
            <p className="text-xl mb-8 text-white opacity-90">
              Get insider knowledge that can save you months of frustration and rejection. Invest in your future today.
            </p>
            <a 
              href="/break-into-tech/payment" 
              className="inline-block bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-md"
            >
              Get Instant Access
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-slate-800 dark:bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/">
              <span className="font-bold text-xl mb-4 inline-block cursor-pointer">Handy Hasan</span>
            </Link>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Handy Hasan. All rights reserved. Contact: <a href="mailto:handy.hasan@yahoo.com" className="text-emerald-400 hover:text-emerald-300">handy.hasan@yahoo.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 