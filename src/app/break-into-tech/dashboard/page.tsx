'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function DashboardPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  
  useEffect(() => {
    setIsVisible(true);
    
    // Check if user has access
    const email = localStorage.getItem('courseAccess');
    if (!email) {
      window.location.href = '/break-into-tech/login';
    } else {
      setUserEmail(email);
    }
  }, []);

  const modules = [
    {
      id: 1,
      title: 'Resume That Gets You Shortlisted',
      description: 'Build a lean, effective resume that speaks to hiring managers',
      duration: '25 min',
      completed: false,
      content: [
        'Resume Philosophy: Why "less is more"',
        'Template Download (my personal template)',
        'Strong summary writing',
        'Impact statements using numbers',
        'Common resume mistakes'
      ]
    },
    {
      id: 2,
      title: 'Interview Strategy & Real Questions',
      description: 'Prepare for what actually gets asked — with structure',
      duration: '30 min',
      completed: false,
      content: [
        'ASX Companies Interview Breakdown',
        'Question Bank with sample answers',
        'STAR method (practical application)',
        'Follow-up email templates',
        'Salary negotiation basics'
      ]
    },
    {
      id: 3,
      title: 'Technical Test Strategies',
      description: 'Pass technical assessments without being a genius',
      duration: '35 min',
      completed: false,
      content: [
        'What companies actually want',
        'How I prepared using AI tools',
        'Example coding questions',
        'System design basics',
        'Take-home project tips'
      ]
    },
    {
      id: 4,
      title: 'Career Strategy & Leverage',
      description: 'Think long-term and build compounding career advantages',
      duration: '20 min',
      completed: false,
      content: [
        'Building your personal brand',
        'Networking that actually works',
        'Creating multiple income streams',
        'Side project strategies',
        'Long-term career planning'
      ]
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('courseAccess');
    window.location.href = '/break-into-tech';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-slate-900 shadow-sm z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Handy Hasan</Link>
          <div className="flex items-center space-x-6">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Welcome, {userEmail.split('@')[0]}
            </span>
            <button 
              onClick={handleLogout}
              className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-emerald-50 to-teal-100 dark:from-emerald-900 dark:to-teal-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Break Into Tech Mini-Course</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">
              Welcome to your course dashboard! 🎉
            </p>
            <div className="inline-flex items-center gap-4 bg-white dark:bg-slate-800 px-6 py-3 rounded-lg shadow-md">
              <span className="text-emerald-600 font-medium">✓ Lifetime Access</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-emerald-600 font-medium">✓ All 4 Modules</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-emerald-600 font-medium">✓ Templates Included</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl font-bold mb-8"
            >
              Course Modules
            </motion.h2>
            
            <div className="space-y-6">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-emerald-100 dark:bg-emerald-700 text-emerald-700 dark:text-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
                          Module {module.id}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {module.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {module.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-emerald-500 mr-2 mt-1">✓</span>
                          <span className="text-slate-600 dark:text-slate-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Start Module
                    </button>
                    <button className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 px-6 py-2 rounded-lg font-medium transition-colors">
                      Download Resources
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bonus Section */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Bonus Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">📄 Templates & Examples</h4>
                  <ul className="space-y-1 text-emerald-100">
                    <li>• My personal resume template</li>
                    <li>• Cover letter templates</li>
                    <li>• Follow-up email scripts</li>
                    <li>• LinkedIn profile optimization guide</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🚀 Additional Resources</h4>
                  <ul className="space-y-1 text-emerald-100">
                    <li>• ASX company research spreadsheet</li>
                    <li>• Technical interview prep checklist</li>
                    <li>• Salary negotiation calculator</li>
                    <li>• Networking contact tracker</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                  Download All Resources
                </button>
                <button className="border border-white border-opacity-30 text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                  Join Community (Coming Soon)
                </button>
              </div>
            </motion.div>
            
            {/* Support Section */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="mt-12 bg-slate-50 dark:bg-slate-800 rounded-xl p-8 text-center"
            >
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Have questions about the course content or need personal career advice? I'm here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:handy.hasan@yahoo.com?subject=Course Question"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Email Me Directly
                </a>
                <a 
                  href="https://linkedin.com/in/handy-hasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Connect on LinkedIn
                </a>
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