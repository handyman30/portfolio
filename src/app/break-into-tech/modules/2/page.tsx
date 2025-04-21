'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft, FaArrowRight, FaDownload, FaQuestionCircle, FaLightbulb } from 'react-icons/fa';

export default function Module2Page() {
  const [activeSection, setActiveSection] = useState('2.1');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [completedSections, setCompletedSections] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('module2Progress');
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
  }, []);
  
  // Save progress to localStorage when completedSections changes
  useEffect(() => {
    localStorage.setItem('module2Progress', JSON.stringify(completedSections));
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
    { id: '2.1', title: 'Understanding the Interview Process' },
    { id: '2.2', title: 'Behavioral & Situational Questions' },
    { id: '2.3', title: 'Technical Interviews (Non-Coding)' },
    { id: '2.4', title: 'Post-Interview Strategy' },
    { id: 'resources', title: 'Resources & Downloads' }
  ];
  
  const questions = {
    '2.1': [
      {
        id: 'q2.1.1',
        question: "What's the typical structure of a tech interview process?",
        answer: "Most tech companies follow a multi-stage process: 1) Initial screening call with recruiter or HR, 2) Technical screening (could be a take-home test or phone interview), 3) In-depth technical interviews, 4) Behavioral/cultural fit interviews, and 5) Final interview with senior management. ASX companies often add an additional step for background checks and compliance verification."
      },
      {
        id: 'q2.1.2',
        question: "What are hiring managers really looking for beyond technical skills?",
        answer: "Beyond technical competence, hiring managers evaluate: 1) Communication skills - how clearly you explain complex concepts, 2) Problem-solving approach - how you think through challenges, 3) Cultural fit - alignment with team and company values, 4) Learning agility - ability to adapt to new technologies, and 5) Collaboration style - how you work with others and handle disagreements."
      }
    ],
    '2.2': [
      {
        id: 'q2.2.1',
        question: "How should I approach the 'Tell me about a challenge you overcame' question?",
        answer: "Use the enhanced STAR method: 1) Situation - briefly describe the context and specific challenge, 2) Task - explain your specific responsibilities, 3) Action - detail the exact steps you took (focus here the most), 4) Result - quantify the positive outcome, and 5) Reflection - briefly mention what you learned that you've applied since. Choose a technically complex example that demonstrates your problem-solving skills and resilience."
      },
      {
        id: 'q2.2.2',
        question: "What's the best way to answer 'What is your greatest weakness?'",
        answer: "Choose a genuine but not critical weakness that you're actively improving. Structure your answer as: 1) State the weakness - be honest but strategic (avoid core job requirements), 2) Explain how it impacts your work, 3) Describe specific steps you're taking to improve, and 4) Share a recent example of progress. For example: 'I sometimes focus too much on technical details. While this helps with code quality, I've found it can impact timeline estimates. I'm now using timeboxing techniques and explicitly setting scope boundaries before diving into problems, which has improved my estimation accuracy by about 30%.'"
      }
    ],
    '2.3': [
      {
        id: 'q2.3.1',
        question: "How do I answer system design questions if I don't have senior-level experience?",
        answer: "Even without extensive experience, approach system design questions methodically: 1) Clarify requirements and constraints first, 2) Start with a high-level architecture diagram, 3) Focus on components you understand well, 4) Be honest about areas where you have less experience, but share your thought process, 5) Discuss trade-offs for different approaches, and 6) Ask thoughtful questions that demonstrate your understanding of scalability and reliability concepts. Remember it's often more about your reasoning process than knowing the perfect answer."
      },
      {
        id: 'q2.3.2',
        question: "What non-technical signals are interviewers looking for during technical discussions?",
        answer: "During technical discussions, interviewers are evaluating: 1) How you handle ambiguity - do you ask clarifying questions or make assumptions?, 2) Communication clarity - can you explain complex concepts simply?, 3) Receptiveness to feedback - how do you respond to suggestions?, 4) Intellectual curiosity - do you ask insightful questions?, 5) Teamwork indicators - do you acknowledge others' contributions in past work stories?, and 6) Learning agility - how quickly can you grasp new concepts presented during the interview?"
      }
    ],
    '2.4': [
      {
        id: 'q2.4.1',
        question: "What should I include in a post-interview thank you email?",
        answer: "Effective thank you emails should: 1) Be sent within 24 hours, 2) Express genuine appreciation for the interviewer's time, 3) Reference specific discussion points to show engagement (e.g., 'I particularly enjoyed our discussion about your microservices architecture'), 4) Address any questions you didn't answer well with additional context, 5) Reiterate your enthusiasm for the role and company, and 6) Keep it concise (5-7 sentences maximum). Personalize each email if you met with multiple people."
      },
      {
        id: 'q2.4.2',
        question: "How do I follow up if I haven't heard back after an interview?",
        answer: "If you haven't received a response: 1) Wait one week after the expected timeline before following up, 2) Send a brief, professional email to your main contact (usually the recruiter), 3) Reference the specific role and interview date, 4) Express continued interest without sounding desperate, 5) Ask for an updated timeline, and 6) If no response after another week, send one final follow-up before moving on. Throughout this process, continue applying to other positions—never pause your job search while waiting."
      }
    ],
    'resources': [
      {
        id: 'r2.1',
        question: "Where can I find the interview preparation resources?",
        answer: "All the resources are available in the 'Resources & Downloads' section of this module. These include ASX Company Interview Questions, STAR Method Response Templates, Company Research Template, and Interview Preparation Checklist."
      }
    ]
  };
  
  // We'll implement the section content render functions in separate edits
  const renderSectionContent = () => {
    switch(activeSection) {
      case '2.1':
        return renderSection2_1();
      case '2.2':
        return renderSection2_2();
      case '2.3':
        return renderSection2_3();
      case '2.4':
        return renderSection2_4();
      case 'resources':
        return renderResources();
      default:
        return <div>Section not found</div>;
    }
  };
  
  const renderSection2_1 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Understanding the Interview Process</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">The Typical Interview Flow</h3>
          <p className="mb-4">Most technical interviews at ASX companies follow a predictable pattern that you can prepare for. Understanding each stage helps you focus your preparation appropriately.</p>
          
          <div className="space-y-4 mt-6">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-medium text-lg mb-2">Stage 1: Initial Screening</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Usually a 15-30 minute call with a recruiter to verify your experience, salary expectations, and availability. They're checking basic qualifications and communication skills.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-medium text-lg mb-2">Stage 2: Technical Screening</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Either a take-home assessment, a coding test, or a technical phone screen with an engineer. Used to filter out candidates before investing in a full interview.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-medium text-lg mb-2">Stage 3: In-depth Technical Interviews</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Multiple interviews with engineers and tech leads. Will include coding questions, system design discussions, and technical experience deep-dives.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-medium text-lg mb-2">Stage 4: Behavioral & Culture Fit</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Interviews with team members and possibly HR to assess how you work with others, handle conflict, and align with company values.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-medium text-lg mb-2">Stage 5: Final Interview</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Often with a director or senior manager. This is sometimes more of a formality but can be a final decision point if candidates are close.
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">In my experience with ASX companies, the entire process typically takes 3-4 weeks from initial contact to offer, but can stretch to 6+ weeks for senior roles.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">What They're Really Looking For</h3>
          
          <p className="mb-6">Beyond technical skills, interviewers at ASX companies are evaluating these key attributes:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Problem-Solving Approach</h4>
              <p className="text-slate-600 dark:text-slate-300">How you break down complex problems, consider edge cases, and evaluate trade-offs.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Communication Skills</h4>
              <p className="text-slate-600 dark:text-slate-300">Clarity in explaining technical concepts, asking good questions, and active listening.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Cultural Alignment</h4>
              <p className="text-slate-600 dark:text-slate-300">Values alignment, teamwork approach, and how you handle feedback and conflict.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Learning Agility</h4>
              <p className="text-slate-600 dark:text-slate-300">Your ability to quickly adapt to new technologies, processes, and business contexts.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['2.1'] && questions['2.1'].map(q => (
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
              onClick={() => markSectionComplete('2.1')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['2.1'] ? (
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
              onClick={() => setActiveSection('2.2')}
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Section <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderSection2_2 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Behavioral & Situational Questions</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">The Enhanced STAR Method</h3>
          <p className="mb-4">The traditional STAR method (Situation, Task, Action, Result) is good, but my enhanced version adds a critical fifth element that impresses interviewers:</p>
          
          <div className="space-y-4 mt-6">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">S - Situation</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Briefly describe the context and specific challenge (10-15% of your answer).
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">T - Task</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Explain your specific responsibilities and objectives (10% of your answer).
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">A - Action</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Detail the specific steps you took, focusing on YOUR contribution (50-60% of your answer).
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">R - Result</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Quantify the positive outcome with specific metrics when possible (15% of your answer).
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border-2 border-emerald-500">
              <h4 className="font-medium text-lg mb-2">R - Reflection</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Briefly explain what you learned and how you've applied this lesson since (10% of your answer).
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">This final Reflection component has consistently set my interviews apart. It demonstrates self-awareness and continuous improvement — traits highly valued at ASX companies.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Sample Answer: "Tell me about a challenge you overcame"</h3>
          
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-emerald-600">Situation</h4>
              <p className="text-slate-600 dark:text-slate-300">
                "At my previous company, we were experiencing a critical performance issue with our payment processing system during high-traffic periods. Transaction processing was taking up to 8 seconds, causing a 15% cart abandonment increase."
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-emerald-600">Task</h4>
              <p className="text-slate-600 dark:text-slate-300">
                "As the lead backend developer for the payment service, I was responsible for diagnosing the issue and implementing a solution while ensuring we maintained PCI compliance."
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-emerald-600">Action</h4>
              <p className="text-slate-600 dark:text-slate-300">
                "First, I set up detailed performance monitoring to identify bottlenecks, discovering that our database queries were causing the slowdown. Rather than just adding indexes, I implemented a two-pronged approach: 1) I refactored our data access layer to use connection pooling and prepared statements, reducing database overhead, and 2) I designed a caching strategy for non-sensitive payment configuration data using Redis, which reduced database load by 70%. I worked closely with our security team to ensure the cache implementation maintained PCI compliance by never storing sensitive card data."
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-emerald-600">Result</h4>
              <p className="text-slate-600 dark:text-slate-300">
                "Transaction processing time decreased from 8 seconds to under 500ms, even during peak loads of 200 transactions per second. Cart abandonment rates returned to normal levels, which translated to approximately $30,000 in recovered revenue per month."
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-medium mb-2 text-emerald-600">Reflection</h4>
              <p className="text-slate-600 dark:text-slate-300">
                "This experience taught me the importance of performance testing under realistic load conditions during development, not just after problems arise. Since then, I've implemented performance benchmarking as part of our CI/CD pipeline for all critical services, helping us catch potential issues before they impact customers."
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Common Behavioral Questions & How to Prepare</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-lg mb-2">Conflict Resolution</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                "Describe a time when you disagreed with a team member about a technical approach."
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded text-sm">
                <strong>Preparation Tip:</strong> Focus on how you communicated respectfully and found a compromise or data-driven solution. Never speak negatively about the other person.
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2">Leadership & Initiative</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                "Tell me about a time you led a project or took initiative without being asked."
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded text-sm">
                <strong>Preparation Tip:</strong> Choose an example that demonstrates your technical leadership and ability to drive results, not just managing people.
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2">Failure & Learning</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                "Describe a project that didn't go as planned. What happened and what did you learn?"
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded text-sm">
                <strong>Preparation Tip:</strong> Choose a genuine failure but focus more on the specific lessons learned and how you've applied them successfully since.
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2">Adaptability</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                "Tell me about a time you had to learn a new technology quickly."
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded text-sm">
                <strong>Preparation Tip:</strong> Highlight your learning process and how you applied the new knowledge to deliver results, not just that you learned something.
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['2.2'] && questions['2.2'].map(q => (
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
            onClick={() => setActiveSection('2.1')}
            className="flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <FaArrowLeft className="mr-2" /> Previous Section
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => markSectionComplete('2.2')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['2.2'] ? (
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
              onClick={() => setActiveSection('2.3')}
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Section <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderSection2_3 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Technical Interviews (Non-Coding)</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">System Design "Lite"</h3>
          <p className="mb-4">Even for non-senior roles, ASX companies often include high-level design questions to assess how you think about architecture. These aren't as in-depth as true system design interviews but require similar skills.</p>
          
          <div className="mt-6">
            <h4 className="font-medium text-lg mb-3">Sample Questions:</h4>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>"How would you design a rate limiting service for our API?"</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>"If we wanted to improve the performance of our product search, what approach would you take?"</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>"How would you architect a notification system that handles both emails and push notifications?"</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>"Explain how you would debug a slow-loading page in our application."</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">These questions assess your problem-solving process and communication skills more than your ability to design perfect systems.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">The ACED Framework for Technical Questions</h3>
          
          <p className="mb-6">Use this framework to structure your responses to system design and technical experience questions:</p>
          
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-emerald-600">A - Ask Clarifying Questions</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Always start by clarifying the requirements and constraints. This shows thoughtfulness and prevents solving the wrong problem.
              </p>
              <div className="bg-white dark:bg-slate-600 p-3 rounded-lg text-sm">
                <strong>Example:</strong> "Before I dive in, I'd like to understand: What's the expected scale? Are we talking about thousands or millions of users? What are the most important metrics - performance, reliability, or cost optimization?"
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-emerald-600">C - Consider Multiple Approaches</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Briefly outline 2-3 different approaches you could take before diving into one solution. This demonstrates breadth of knowledge.
              </p>
              <div className="bg-white dark:bg-slate-600 p-3 rounded-lg text-sm">
                <strong>Example:</strong> "We could approach this in a few ways: 1) Use a Redis-based solution with sliding window counters, 2) Implement a token bucket algorithm at the API gateway level, or 3) Use a distributed rate limiter with a central database."
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-emerald-600">E - Explain Your Recommended Solution</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Dive deeper into your preferred approach, explaining the components, data flow, and how it addresses the requirements.
              </p>
              <div className="bg-white dark:bg-slate-600 p-3 rounded-lg text-sm">
                <strong>Example:</strong> "I'd recommend the Redis-based solution with a sliding window because it provides the best balance of performance and accuracy. Here's how it would work: [detailed explanation with drawing if possible]..."
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-emerald-600">D - Discuss Trade-offs</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Always finish by acknowledging limitations of your approach and how you might address them.
              </p>
              <div className="bg-white dark:bg-slate-600 p-3 rounded-lg text-sm">
                <strong>Example:</strong> "This approach has excellent performance characteristics, but it does have some limitations: 1) It requires additional infrastructure, 2) In a distributed system, there's potential for race conditions if not implemented carefully. To address these concerns, we could..."
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Non-Obvious Interview Signals</h3>
          
          <p className="mb-4">Interviewers are evaluating these subtle signals during technical discussions:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Handling Ambiguity</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Do you get flustered when requirements are unclear, or do you methodically clarify what you need?
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Receptiveness to Feedback</h4>
              <p className="text-slate-600 dark:text-slate-300">
                How do you respond when the interviewer suggests an alternative approach or points out a flaw?
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Communication Clarity</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Can you explain complex technical concepts in a clear, structured way that non-specialists could follow?
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Technical Curiosity</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Do you ask thoughtful questions that demonstrate genuine interest in the technical problem?
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">During my interviews at ASX companies, I found that how I responded to unexpected follow-up questions was often more important than having the perfect initial answer.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['2.3'] && questions['2.3'].map(q => (
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
            onClick={() => setActiveSection('2.2')}
            className="flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <FaArrowLeft className="mr-2" /> Previous Section
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => markSectionComplete('2.3')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['2.3'] ? (
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
              onClick={() => setActiveSection('2.4')}
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Section <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderSection2_4 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Post-Interview Strategies</h2>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">The Follow-Up Email Template</h3>
          
          <p className="mb-6">A strategic follow-up email can differentiate you from other candidates. Send it within 24 hours of your interview.</p>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg text-sm mb-6">
            <p className="mb-3"><strong>Subject:</strong> Thank you for the [Position] interview</p>
            <div className="space-y-3">
              <p>Dear [Interviewer's Name],</p>
              
              <p>Thank you for taking the time to discuss the [Position] role with me today. Our conversation about [specific topic discussed] was particularly insightful, and I'm excited about the possibility of joining [Company Name].</p>
              
              <p>I was particularly impressed with [something specific about the company or team that you learned], and I believe my experience with [relevant skill/experience that matches their needs] aligns well with what you're looking for.</p>
              
              <p>[Optional: Address any question you feel you could have answered better] Upon reflection, I wanted to add some additional context to our discussion about [topic]. [Provide your improved answer briefly]</p>
              
              <p>[Optional: Include a relevant article/resource] I came across this article on [topic relevant to something discussed] that I thought might interest you: [link]</p>
              
              <p>I'm eager to continue our conversation about how I can contribute to [specific team or project mentioned]. Please don't hesitate to reach out if you need any additional information.</p>
              
              <p>Thank you again for your consideration.</p>
              
              <p>Best regards,<br />[Your Name]<br />[Your Phone Number]</p>
            </div>
          </div>
          
          <div className="flex items-center bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaLightbulb className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p>Personalize this template for each interview. Generic follow-ups can sometimes be worse than none at all.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">When You Don't Hear Back</h3>
          
          <p className="mb-4">Hiring processes, especially at ASX companies, can move slowly. Here's how to follow up without being pushy:</p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Timing</h4>
              <p className="text-slate-600 dark:text-slate-300">
                If you were given a timeframe, wait until after it has passed before following up. If no timeframe was provided, wait 1-2 weeks after your interview.
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Method</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Email is usually best. Reach out to your primary contact (usually the recruiter, not the hiring manager).
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Messaging</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Keep it brief, polite, and specific: "I wanted to check in on the status of the [Position] role. I'm still very interested and would appreciate any updates you can provide."
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Frequency</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Limit follow-ups to once every 1-2 weeks, and no more than 2-3 times total. After that, it's best to focus your energy elsewhere.
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <h4 className="font-medium mb-2">Sample Follow-Up Email</h4>
            <div className="bg-white dark:bg-slate-600 p-3 rounded text-sm">
              <p className="mb-2"><strong>Subject:</strong> Following up on [Position] interview</p>
              <p className="mb-2">Hi [Name],</p>
              <p className="mb-2">I hope you're doing well. I'm writing to check in on the status of the [Position] role that I interviewed for on [date]. I'm still very excited about the opportunity to join [Company] and contribute to [specific project/team mentioned].</p>
              <p className="mb-2">I understand hiring processes take time, but I wanted to express my continued interest. If there's any additional information you need from me, please don't hesitate to ask.</p>
              <p className="mb-2">Thank you for your consideration, and I look forward to hearing from you.</p>
              <p>Best regards,<br />[Your Name]</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Handling Multiple Offers</h3>
          
          <p className="mb-6">When you have multiple offers or are in various stages with different companies:</p>
          
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Timeline Management</h4>
              <p className="text-slate-600 dark:text-slate-300">
                If you receive an offer with a deadline but are waiting on another company:
              </p>
              <ol className="list-decimal ml-5 space-y-2 mt-2">
                <li>Politely thank the first company and confirm their deadline</li>
                <li>Immediately contact the second company: "I've received another offer with a deadline of [date], but I'm very interested in your opportunity. Is there any way to expedite the process?"</li>
                <li>If needed, ask the first company for an extension: "I'm very excited about this opportunity and want to make the best decision. Would it be possible to extend the decision deadline by [specific timeframe]?"</li>
              </ol>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Declining Offers Professionally</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Always decline offers graciously, leaving the door open for future opportunities:
              </p>
              <div className="bg-white dark:bg-slate-600 p-3 rounded text-sm mt-2">
                <p>Dear [Name],</p>
                <p className="my-2">Thank you for offering me the position of [role] at [Company]. After careful consideration, I've decided to accept a position at another company that aligns more closely with my current career goals.</p>
                <p className="my-2">I sincerely appreciate the time you took to interview me and consider me for this role. I was impressed by [specific positive about the company] and wish you and the team continued success.</p>
                <p className="my-2">I hope our paths cross again in the future.</p>
                <p>Best regards,<br />[Your Name]</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">In my experience, ASX companies often have longer interview processes and decision timelines compared to startups. Being transparent about other opportunities can sometimes expedite their process.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['2.4'] && questions['2.4'].map(q => (
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
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Module 2 Summary</h3>
          
          <div className="mb-4">
            <p>In this module, you've learned:</p>
            <ul className="list-disc ml-5 space-y-2 mt-2">
              <li>The structure and flow of technical interviews at ASX companies</li>
              <li>How to use the Enhanced STAR method to excel in behavioral interviews</li>
              <li>The ACED framework for non-coding technical questions</li>
              <li>Effective post-interview strategies to increase your chances of success</li>
            </ul>
          </div>
          
          <div className="p-4 bg-white dark:bg-slate-700 rounded-lg">
            <p className="font-medium">Next Steps:</p>
            <p className="mt-2">In Module 3, we'll focus on technical preparation strategies specifically tailored for the ASX tech landscape, including common coding patterns and system design considerations for financial services.</p>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button 
            onClick={() => setActiveSection('2.3')}
            className="flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <FaArrowLeft className="mr-2" /> Previous Section
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => markSectionComplete('2.4')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['2.4'] ? (
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
              onClick={() => {
                window.location.href = '/break-into-tech/modules/3';
              }}
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Module <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderResources = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-6">Resources & Downloads</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Interview Preparation Resources</h3>
          <p className="mb-6">These resources will help you prepare for technical and behavioral interviews at ASX companies and tech firms. I've compiled them based on my personal interview experiences.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-emerald-600 text-xl mr-3" />
                <h4 className="font-medium text-lg">ASX Company Interview Questions</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                A compilation of real behavioral and technical questions from interviews at major Australian tech companies and ASX-listed corporations.
              </p>
              <a 
                href="/downloads/interview-questions.pdf" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="mr-2" /> Download Questions
              </a>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-emerald-600 text-xl mr-3" />
                <h4 className="font-medium text-lg">STAR Method Response Templates</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Templates and examples for structuring your behavioral interview responses using the STAR method, with tech-specific scenarios.
              </p>
              <a 
                href="/downloads/star-method-template.pdf" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="mr-2" /> Download Templates
              </a>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-emerald-600 text-xl mr-3" />
                <h4 className="font-medium text-lg">Company Research Template</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                A structured template for researching companies before interviews, focusing on their tech stack, business model, culture, and relevant questions to ask.
              </p>
              <a 
                href="/downloads/company-research-template.pdf" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="mr-2" /> Download Template
              </a>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FaCheckCircle className="text-emerald-600 text-xl mr-3" />
                <h4 className="font-medium text-lg">Interview Preparation Checklist</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                A comprehensive checklist for the days and hours before your interview, including research, preparation, and day-of reminders.
              </p>
              <a 
                href="/downloads/interview-preparation-checklist.pdf" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="mr-2" /> Download Checklist
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Module 2 Complete!</h3>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="mb-6">
              Congratulations on completing the Interview Strategy module! You now have the frameworks and insights to handle both behavioral and technical interviews with confidence.
            </p>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-6">
              <h4 className="font-semibold mb-4">Next Steps for Success:</h4>
              
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Practice answering the most common questions out loud, not just in your head</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Research 3-5 target companies using the research template provided</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Prepare 5-7 specific examples of past work that demonstrate your skills</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Set up at least one mock interview with a friend or mentor</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Customize your STAR responses for different role types</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg font-medium mb-4">
              Remember: Preparation creates confidence, and confidence makes a strong impression.
            </p>
            
            <p>
              With these interview strategies, you'll stand out from other candidates who wing it. Continue to Module 3 to learn about technical preparation strategies beyond LeetCode.
            </p>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button 
            onClick={() => setActiveSection('2.4')}
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
              href="/break-into-tech/modules/3"
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Module <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
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
              Module 2 of 4
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
              🧩 MODULE 2: Interview Strategy & Real Questions
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Prepare for what actually gets asked — with structure and strategy.
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