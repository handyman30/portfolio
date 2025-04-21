'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CourseModulesDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const router = useRouter();
  
  useEffect(() => {
    setIsVisible(true);
    
    // Check if user has access to the course
    const checkAccess = () => {
      const accessToken = localStorage.getItem('breakIntoTechAccess');
      const storedCode = localStorage.getItem('breakIntoTechCode');
      
      if (accessToken === 'paid-access-granted') {
        // User has access via localStorage token
        setIsAuthorized(true);
        if (storedCode) {
          setAccessCode(storedCode);
        }
      } else {
        // If no access token, redirect to login page
        router.push('/break-into-tech/login');
      }
    };
    
    // Small delay to ensure localStorage is available in Next.js
    setTimeout(() => {
      checkAccess();
    }, 100);
  }, [router]);
  
  // If not authorized, show loading state
  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Checking access...</p>
        </div>
      </div>
    );
  }
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const modules = [
    {
      id: 1,
      title: "Resume That Gets You Shortlisted",
      description: "Build a lean, effective resume that speaks to hiring managers in tech/product companies.",
      sections: [
        "Resume Philosophy: Why 'less is more' and results > responsibilities",
        "Template Download: My personal template that got interviews at ASX companies & others",
        "Make Your Resume Hit: Strong summary, impact using numbers, tech stack placement",
        "Bonus: Mistakes that instantly kill a resume"
      ],
      linkToContent: "/break-into-tech/modules/1",
      isAvailable: true
    },
    {
      id: 2,
      title: "Interview Strategy & Real Questions",
      description: "Prepare for what actually gets asked — with structure and strategy.",
      sections: [
        "ASX Companies Interview Breakdown: Technical round structure, culture fit + behavioral traps",
        "Question Bank: Common questions and how to answer them",
        "Answering Like a Pro: STAR method (but actually useful)",
        "Follow-Up Emails That Work"
      ],
      linkToContent: "/break-into-tech/modules/2",
      isAvailable: true
    },
    {
      id: 3,
      title: "Technical Test – Pass Without Being a Genius",
      description: "Ace code tests and take-homes even if you're not LeetCode grinding daily.",
      sections: [
        "What Companies Actually Want: Clear logic > fancy tricks",
        "How I Prepared: AI tools + past projects = cheat code",
        "Example Questions: Build a feature (not just algorithms)",
        "Bonus: Handling 'System Design Lite' questions"
      ],
      linkToContent: "/break-into-tech/modules/3",
      isAvailable: true
    },
    {
      id: 4,
      title: "Strategy, Mindset, & Leverage",
      description: "Build long-term confidence, not just get lucky once.",
      sections: [
        "Game Theory of Job Hunting: Why you need leverage before interviews",
        "Your Positioning: Craftsman? Fast learner? Team glue?",
        "Mastering the Meta: Following up, talking about AI tools, asking for referrals",
        "Your Action Plan: 7-day focus plan, handling rejection"
      ],
      linkToContent: "/break-into-tech/modules/4",
      isAvailable: true
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-700 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Handy Hasan
          </Link>
          {accessCode && (
            <div className="text-sm bg-emerald-800 px-3 py-1 rounded">
              Access Code: <span className="font-mono">{accessCode}</span>
            </div>
          )}
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Break Into Tech Course Dashboard
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to your course dashboard! Here you'll find all the modules and resources 
            to help you land your next tech role. Work through each module in order for the best results.
          </p>
          
          {accessCode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg inline-block mx-auto"
            >
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Save your access code ({accessCode}) somewhere safe. 
                You'll need it to access the course if you clear your browser data or use a different device.
              </p>
            </motion.div>
          )}
        </motion.div>
        
        {/* Modules Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    {module.id}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{module.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-4">{module.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {module.sections.map((section, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span className="text-gray-700">{section}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={module.linkToContent}
                  className={`inline-block font-semibold py-2 px-4 rounded transition duration-200 ${
                    module.isAvailable 
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                      : "bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-300 cursor-not-allowed"
                  }`}
                  {...(!module.isAvailable && { onClick: (e) => e.preventDefault() })}
                >
                  {module.isAvailable ? `Start Module ${module.id}` : "Coming Soon"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Support Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-emerald-50 border border-emerald-100 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions or need clarification on any module, 
            feel free to reach out via email or connect with me on LinkedIn.
          </p>
          <div className="flex space-x-4">
            <a 
              href="mailto:handy.hasan@yahoo.com" 
              className="text-emerald-600 hover:text-emerald-800 font-medium"
            >
              Email Support
            </a>
            <a 
              href="https://linkedin.com/in/handyhasan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-800 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
        
        {/* Access Management Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white border border-gray-200 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Access Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-semibold text-gray-700 mb-2">Your Access Code</h3>
              <p className="text-gray-600 mb-3">
                {accessCode ? (
                  <>Your access code is: <span className="font-mono font-medium text-emerald-600">{accessCode}</span></>
                ) : (
                  "You don't have a stored access code. Consider setting one for device transfers."
                )}
              </p>
              <button
                onClick={() => {
                  if (accessCode) {
                    navigator.clipboard.writeText(accessCode);
                    alert("Access code copied to clipboard!");
                  }
                }}
                disabled={!accessCode}
                className={`text-sm px-3 py-1 rounded ${
                  accessCode
                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                Copy to Clipboard
              </button>
            </div>
            
            <div>
              <h3 className="text-md font-semibold text-gray-700 mb-2">Switch Devices</h3>
              <p className="text-gray-600 mb-3">
                To access this course on another device, you'll need to use your access code.
                Make sure to save it before clearing browser data or switching devices.
              </p>
              <Link
                href="/break-into-tech/login"
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded inline-block"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Handy Hasan. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">
            This content is exclusive to paid course members.
          </p>
        </div>
      </footer>
    </div>
  );
} 