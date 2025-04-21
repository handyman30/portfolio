'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft, FaArrowRight, FaDownload, FaQuestionCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Module1Page() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('1.1');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [completedSections, setCompletedSections] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Check access token
    const checkAccess = () => {
      const accessToken = localStorage.getItem('breakIntoTechAccess');
      if (!accessToken || (accessToken !== 'paid-access-granted' && accessToken !== 'admin-access')) {
        router.push('/break-into-tech/login');
        return false;
      }
      return true;
    };
    
    const hasAccess = checkAccess();
    setIsAuthorized(hasAccess);
    
    if (hasAccess) {
      // Load progress from localStorage
      const savedProgress = localStorage.getItem('module1Progress');
      if (savedProgress) {
        setCompletedSections(JSON.parse(savedProgress));
      }
      
      // Check if there's a section hash in the URL
      if (typeof window !== 'undefined') {
        const hash = window.location.hash;
        if (hash) {
          const section = hash.replace('#', '');
          setActiveSection(section);
        }
      }
    }
    
    setIsLoading(false);
  }, [router]);
  
  // Save progress to localStorage when completedSections changes
  useEffect(() => {
    localStorage.setItem('module1Progress', JSON.stringify(completedSections));
  }, [completedSections]);
  
  const markSectionComplete = (section: string) => {
    setCompletedSections(prev => ({
      ...prev,
      [section]: true
    }));
  };
  
  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const sections = [
    { id: '1.1', title: 'Why Your Resume Gets Ignored' },
    { id: '1.2', title: 'The Perfect Tech Resume Structure' },
    { id: '1.3', title: 'How to Tailor Your Resume for Specific Roles' },
    { id: 'resources', title: 'Resources & Downloads' }
  ];
  
  const questions = {
    '1.1': [
      {
        id: 'q1.1.1',
        question: "What is the '5-Second Rule' for resumes?",
        answer: "The '5-Second Rule' refers to the fact that recruiters typically spend just 5-6 seconds initially scanning a resume before deciding whether to read it more closely. In this brief window, they're looking for key indicators of fit for the role."
      },
      {
        id: 'q1.1.2',
        question: "What are the most common resume mistakes that cause immediate rejection?",
        answer: "The most common mistakes include: generic objectives/summaries, lack of quantifiable achievements, poor formatting/readability, spelling and grammar errors, and irrelevant information that doesn't align with the job requirements."
      }
    ],
    '1.2': [
      {
        id: 'q1.2.1',
        question: "What should be included in a strong technical resume summary?",
        answer: "A strong technical resume summary should concisely highlight your years of experience, key technical skills relevant to the role, most impressive achievement(s) with measurable results, and what specific value you bring to the company."
      },
      {
        id: 'q1.2.2',
        question: "What is the best formula for writing achievement-oriented bullet points?",
        answer: "The best formula follows 'Did X to achieve Y measured by Z.' For example: 'Optimized database queries (X) to reduce page load time (Y) by 40% (Z).' This clearly shows your actions, purpose, and the measurable impact."
      }
    ],
    '1.3': [
      {
        id: 'q1.3.1',
        question: "How do I tailor my resume for ASX company positions?",
        answer: "For ASX companies, emphasize experience with large-scale systems, regulated environments, and enterprise technologies. Research the company's tech stack and highlight relevant experience. For financial or commerce ASX companies, emphasize security, compliance, and scalability experience."
      },
      {
        id: 'q1.3.2',
        question: "What's the best approach for ATS optimization without keyword stuffing?",
        answer: "Incorporate relevant keywords naturally throughout your resume, particularly in your skills section and work experience. Use industry-standard terminology rather than company-specific jargon. Include both the spelled-out version and acronym of technologies (e.g., 'Amazon Web Services (AWS)'). Ensure your resume has a clean, standard format that ATS systems can easily parse."
      }
    ]
  };
  
  const renderSectionContent = () => {
    switch(activeSection) {
      case '1.1':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Why Your Resume Gets Ignored</h2>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">The 5-Second Rule</h3>
              <p className="mb-4">Most recruiters spend just <strong>5-6 seconds</strong> on the initial scan of your resume. In this brief window, they're looking for clear indicators that you match their requirements.</p>
              
              <div className="mt-6 flex items-center">
                <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
                  <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
                </div>
                <p className="italic">During my time in tech hiring, I personally reviewed over 200 resumes. The ones that immediately stood out had clear, scannable layouts and quantifiable achievements that jumped off the page.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">Common Resume Mistakes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <div>
                    <p className="font-medium">Generic summaries</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      "Dedicated professional seeking to leverage skills in a challenging role..."
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <div>
                    <p className="font-medium">Responsibility-focused bullets</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      "Responsible for maintaining the company website"
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <div>
                    <p className="font-medium">Cluttered, hard-to-scan layout</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Tiny margins, small fonts, no white space
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <div>
                    <p className="font-medium">Missing keywords from the job description</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Not highlighting relevant skills that match the role
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
              
              <div className="space-y-4">
                {questions['1.1'] && questions['1.1'].map(q => (
                  <div key={q.id} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <button 
                      className="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700"
                      onClick={() => toggleQuestion(q.id)}
                    >
                      <span>{q.question}</span>
                      <span className="text-emerald-500">{expandedQuestions[q.id] ? '−' : '+'}</span>
                    </button>
                    
                    {expandedQuestions[q.id] && (
                      <div className="px-4 py-3 bg-slate-50 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-700">
                        <p>{q.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <Link href="/break-into-tech/dashboard" className="flex items-center text-emerald-600 hover:text-emerald-700">
                <FaArrowLeft className="mr-2" /> Back to Dashboard
              </Link>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => markSectionComplete('1.1')}
                  className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
                >
                  {completedSections['1.1'] ? (
                    <>
                      <FaCheckCircle className="mr-2" /> Completed
                    </>
                  ) : (
                    <>
                      <FaCheckCircle className="mr-2" /> Mark as Complete
                    </>
                  )}
                </button>
                
                <button 
                  onClick={() => setActiveSection('1.2')}
                  className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                >
                  Next Section <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        );
        
      case '1.2':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">The Perfect Tech Resume Structure</h2>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Header & Summary</h3>
              <p className="mb-4">Your resume header should include your name, contact details, LinkedIn profile, and GitHub (if relevant). Below that, include a powerful summary that captures your experience and value proposition.</p>
              
              <div className="bg-white dark:bg-slate-800 p-4 rounded border border-emerald-200 dark:border-emerald-800">
                <p className="font-medium text-slate-800 dark:text-white mb-2">Example Strong Summary:</p>
                <p className="text-slate-600 dark:text-slate-300">
                  "Full Stack Developer with 5+ years of experience building scalable web applications with React and Node.js. Reduced load times by 35% and increased user engagement by 42% at XYZ Company. Passionate about clean code and performance optimization."
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">Work Experience: Results-Oriented Bullets</h3>
              
              <p className="mb-4">Each bullet point in your experience section should follow this framework:</p>
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-6">
                <p className="font-mono text-slate-800 dark:text-slate-200">
                  Did X to achieve Y measured by Z
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Weak Example:</p>
                  <p className="text-slate-600 dark:text-slate-300 bg-red-50 dark:bg-red-900/20 p-3 rounded">
                    "Responsible for developing new features for the e-commerce platform."
                  </p>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Strong Example:</p>
                  <p className="text-slate-600 dark:text-slate-300 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded">
                    "Developed a product recommendation engine <strong>(X)</strong> to enhance customer experience <strong>(Y)</strong> resulting in a 27% increase in average order value <strong>(Z)</strong>."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">Technical Skills Section</h3>
              
              <p className="mb-4">Organize your skills into clear categories for easy scanning:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Languages</h4>
                  <p className="text-slate-600 dark:text-slate-300">JavaScript (ES6+), TypeScript, Python</p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Frontend</h4>
                  <p className="text-slate-600 dark:text-slate-300">React, Redux, Next.js, Tailwind CSS</p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Backend</h4>
                  <p className="text-slate-600 dark:text-slate-300">Node.js, Express, GraphQL, REST APIs</p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Tools & Other</h4>
                  <p className="text-slate-600 dark:text-slate-300">Git, Docker, AWS, CI/CD, Agile methodologies</p>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
                  <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
                </div>
                <p className="italic">Pro tip: Place your skills section strategically. If you're experienced, put it after your work experience. If you're newer to the field, place it before your work experience to highlight your technical qualifications first.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
              
              <div className="space-y-4">
                {questions['1.2'] && questions['1.2'].map(q => (
                  <div key={q.id} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <button 
                      className="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700"
                      onClick={() => toggleQuestion(q.id)}
                    >
                      <span>{q.question}</span>
                      <span className="text-emerald-500">{expandedQuestions[q.id] ? '−' : '+'}</span>
                    </button>
                    
                    {expandedQuestions[q.id] && (
                      <div className="px-4 py-3 bg-slate-50 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-700">
                        <p>{q.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={() => setActiveSection('1.1')}
                className="flex items-center text-emerald-600 hover:text-emerald-700"
              >
                <FaArrowLeft className="mr-2" /> Previous Section
              </button>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => markSectionComplete('1.2')}
                  className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
                >
                  {completedSections['1.2'] ? (
                    <>
                      <FaCheckCircle className="mr-2" /> Completed
                    </>
                  ) : (
                    <>
                      <FaCheckCircle className="mr-2" /> Mark as Complete
                    </>
                  )}
                </button>
                
                <button 
                  onClick={() => setActiveSection('1.3')}
                  className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                >
                  Next Section <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        );
        
      case '1.3':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">How to Tailor Your Resume for Specific Roles</h2>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">How I Tailored My Resume for ASX Companies</h3>
              <p className="mb-4">When applying to ASX-listed companies, I emphasized my experience with large-scale systems, secure transactions, and enterprise-grade solutions.</p>
              
              <div className="mt-6 flex items-center">
                <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
                  <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
                </div>
                <p className="italic">ASX-listed companies often prioritize candidates who demonstrate an understanding of regulatory requirements, security measures, and scalable architecture principles.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">Frontend vs. Backend Focus</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Frontend Focus Example</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Highlight responsive design expertise</li>
                    <li>• Emphasize UX improvements and metrics</li>
                    <li>• Showcase performance optimizations</li>
                    <li>• Detail experience with design systems</li>
                    <li>• Include A/B testing experience</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Backend Focus Example</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Emphasize API design and documentation</li>
                    <li>• Highlight database optimization expertise</li>
                    <li>• Detail experience with microservices</li>
                    <li>• Showcase security implementation</li>
                    <li>• Include scaling experience</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">ATS Optimization Tips</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Use both spelled-out terms and acronyms</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      "Amazon Web Services (AWS)" instead of just "AWS"
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Match the exact terminology from the job description</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      If they say "full stack developer," use that exact phrase
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Use a clean, standard format</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Avoid tables, headers/footers, and complex formatting
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Include a skills section with relevant keywords</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      List technologies mentioned in the job description
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
              
              <div className="space-y-4">
                {questions['1.3'] && questions['1.3'].map(q => (
                  <div key={q.id} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <button 
                      className="w-full px-4 py-3 text-left font-medium flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700"
                      onClick={() => toggleQuestion(q.id)}
                    >
                      <span>{q.question}</span>
                      <span className="text-emerald-500">{expandedQuestions[q.id] ? '−' : '+'}</span>
                    </button>
                    
                    {expandedQuestions[q.id] && (
                      <div className="px-4 py-3 bg-slate-50 dark:bg-slate-700/50 border-t border-slate-200 dark:border-slate-700">
                        <p>{q.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={() => setActiveSection('1.2')}
                className="flex items-center text-emerald-600 hover:text-emerald-700"
              >
                <FaArrowLeft className="mr-2" /> Previous Section
              </button>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => markSectionComplete('1.3')}
                  className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
                >
                  {completedSections['1.3'] ? (
                    <>
                      <FaCheckCircle className="mr-2" /> Completed
                    </>
                  ) : (
                    <>
                      <FaCheckCircle className="mr-2" /> Mark as Complete
                    </>
                  )}
                </button>
                
                <button 
                  onClick={() => setActiveSection('resources')}
                  className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                >
                  Resources & Downloads <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'resources':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Resources & Downloads</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Resume Template</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Download my personal resume template that helped me land interviews at multiple ASX companies.
                </p>
                <a 
                  href="/downloads/resume-template.txt" 
                  download
                  className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                >
                  <FaDownload className="mr-2" /> Download Template
                </a>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Before & After Examples</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  See real resume transformations with detailed annotations explaining the improvements.
                </p>
                <a 
                  href="/downloads/resume-examples.txt" 
                  download
                  className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                >
                  <FaDownload className="mr-2" /> Download Examples
                </a>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Resume Checklist</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  A comprehensive checklist to ensure your resume is optimized for tech roles.
                </p>
                <a 
                  href="/downloads/resume-checklist.txt" 
                  download
                  className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                >
                  <FaDownload className="mr-2" /> Download Checklist
                </a>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">ATS Keywords List</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  A curated list of tech keywords commonly used in ATS systems, organized by role type.
                </p>
                <a 
                  href="/downloads/ats-keywords.txt" 
                  download
                  className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                >
                  <FaDownload className="mr-2" /> Download Keywords
                </a>
              </div>
            </div>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Module 1 Complete!</h3>
              <p className="mb-4">Congratulations on completing the first module! You now have the knowledge and tools to create a standout resume that will get you shortlisted for tech roles.</p>
              
              <div className="mt-6 flex items-center">
                <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
                  <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
                </div>
                <p className="italic">Pro tip: Set aside 2-3 hours to fully update your resume using the template and checklist. Then have a friend in tech review it before you start applying.</p>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={() => setActiveSection('1.3')}
                className="flex items-center text-emerald-600 hover:text-emerald-700"
              >
                <FaArrowLeft className="mr-2" /> Previous Section
              </button>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => markSectionComplete('resources')}
                  className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
                >
                  {completedSections['resources'] ? (
                    <>
                      <FaCheckCircle className="mr-2" /> Completed
                    </>
                  ) : (
                    <>
                      <FaCheckCircle className="mr-2" /> Mark as Complete
                    </>
                  )}
                </button>
                
                <Link 
                  href="/break-into-tech/modules/2"
                  className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                >
                  Next Module <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Section not found</div>;
    }
  };
  
  // If loading or unauthorized, show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null; // Router will redirect, this prevents flash of content
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-emerald-700 dark:bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/break-into-tech/dashboard" className="text-xl font-bold">
              Break Into Tech
            </Link>
            
            <div className="text-sm">
              Module 1 of 4
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Module Header */}
          <motion.div 
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              🧩 MODULE 1: Resume That Gets You Shortlisted
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Build a lean, effective resume that speaks to hiring managers in tech/product companies.
            </p>
          </motion.div>
          
          {/* Progress Bar */}
          <div className="mb-8 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-emerald-500 h-2.5 rounded-full"
              style={{ 
                width: `${Object.keys(completedSections).length / sections.length * 100}%`,
                transition: 'width 0.5s ease-in-out'
              }}
            ></div>
          </div>
          
          {/* Section Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {sections && sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-emerald-600 text-white'
                    : completedSections[section.id]
                      ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {completedSections[section.id] && (
                  <FaCheckCircle className="inline-block mr-1 text-xs" />
                )}
                {section.title}
              </button>
            ))}
          </div>
          
          {/* Section Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {renderSectionContent()}
          </motion.div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Break Into Tech. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">
            Questions? <a href="mailto:handy.hasan@yahoo.com" className="text-emerald-400 hover:underline">Contact Support</a>
          </p>
        </div>
      </footer>
    </div>
  );
} 