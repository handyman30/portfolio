'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft, FaArrowRight, FaDownload, FaQuestionCircle, FaLightbulb, FaCode, FaDatabase, FaCodeBranch, FaHome } from 'react-icons/fa';

export default function Module3Page() {
  const [activeSection, setActiveSection] = useState('3.1');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [completedSections, setCompletedSections] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('module3Progress');
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
    localStorage.setItem('module3Progress', JSON.stringify(completedSections));
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
    { id: '3.1', title: 'Common Technical Test Types' },
    { id: '3.2', title: 'Array & String Problems' },
    { id: '3.3', title: 'Data Structures & Algorithms' },
    { id: '3.4', title: 'System Design Problems' },
    { id: 'resources', title: 'Resources & Downloads' }
  ];
  
  const questions = {
    '3.1': [
      {
        id: 'q3.1.1',
        question: "What's the difference between take-home and live coding challenges?",
        answer: "Take-home challenges give you more time (typically 1-7 days) to solve a larger problem at your own pace. You can use your preferred tools and references. Live coding challenges happen during an interview (30-60 minutes) where you solve problems with interviewers watching. Take-homes test your ability to build something substantial and showcase code quality, while live challenges test problem-solving skills under pressure and communication. Australian companies tend to use take-homes for junior roles and a mix of both for more senior roles."
      },
      {
        id: 'q3.1.2',
        question: "Should I memorize solutions to common LeetCode problems?",
        answer: "Rather than memorizing specific solutions, focus on understanding common patterns and approaches. Learn to recognize problem types (e.g., two-pointer, sliding window, breadth-first search) and their application. Memorization might get you through some interviews, but understanding the underlying concepts will help you tackle novel problems. Most ASX companies and tech firms in Australia prioritize your problem-solving approach over arriving at the perfect solution immediately. Practice explaining your thought process as you work through problems."
      }
    ],
    '3.2': [
      {
        id: 'q3.2.1',
        question: "What's the most efficient way to reverse a string in JavaScript?",
        answer: "For JavaScript specifically, the most efficient approach is: `str.split('').reverse().join('')`. This splits the string into an array of characters, reverses the array, and joins it back. For interviews though, it's better to show you understand the manual approach: use two pointers (start and end), swap characters while moving pointers toward each other. This demonstrates algorithm knowledge rather than just language features. When solving this in an interview, always mention both approaches, showing you know the built-in methods but also understand the underlying algorithm."
      },
      {
        id: 'q3.2.2',
        question: "How do you find all anagrams in an array of strings?",
        answer: "The most efficient approach is to use a hash map where the key is a sorted version of each string, and the value is an array of original strings that match that sorted pattern. Loop through each string, sort its characters (e.g., 'eat' becomes 'aet'), and group them in the hash map. Finally, return the values of the hash map that have more than one string. This has O(n * k log k) time complexity where n is the number of strings and k is the maximum string length. For interviews, clearly explain why sorting the characters creates a consistent 'signature' for all anagrams."
      }
    ],
    '3.3': [
      {
        id: 'q3.3.1',
        question: "What's the easiest way to explain dynamic programming to an interviewer?",
        answer: "Dynamic programming is best explained as 'optimization by caching subproblem results.' First, identify that a problem has overlapping subproblems (same calculations repeated). Then, instead of recalculating results, store them (memoization) for reuse. Use a simple example like the Fibonacci sequence: calculating fib(5) recalculates fib(2) multiple times. With DP, you'd calculate each number once and store it. In interviews, always start by identifying if the problem has optimal substructure (can be broken down) and overlapping subproblems before applying DP. Australian tech interviews typically value clear articulation of when to use DP more than complex implementations."
      },
      {
        id: 'q3.3.2',
        question: "How would you implement a linked list reversal?",
        answer: "To reverse a linked list: maintain three pointers - previous (initially null), current (head), and next. Iterate through the list, at each step: (1) Save the next node: next = current.next, (2) Reverse the current node's pointer: current.next = previous, (3) Move previous and current pointers one step forward: previous = current, current = next. When current becomes null, previous will point to the new head. This is an in-place algorithm with O(n) time complexity and O(1) space complexity. In interviews, draw this out step by step to demonstrate your understanding of pointer manipulation, as it's a common question for junior to mid-level roles in Australian tech companies."
      }
    ],
    '3.4': [
      {
        id: 'q3.4.1',
        question: "How would you design a URL shortening service?",
        answer: "When designing a URL shortening service: 1) Requirements: Discuss functionality (create short URLs, redirect), performance needs (low latency), and scale (QPS, storage). 2) API endpoints: POST /shorten for creation, GET /{shortURL} for redirection. 3) Data model: Store mapping between short and long URLs. 4) URL generation: Either use an incrementing ID converted to base62 (a-zA-Z0-9) or generate a random string and check for collisions. 5) Storage: Use a relational database for mappings with caching layer (Redis) for popular URLs. 6) Scaling: Discuss sharding strategies, caching, and load balancing. In Australian tech interviews, emphasize both the technical solution and business considerations like analytics, security, and custom URL support."
      },
      {
        id: 'q3.4.2',
        question: "What key components would you include when designing a notification system?",
        answer: "A notification system should include: 1) Service interface: APIs for sending notifications and managing preferences, 2) Notification types: Push, SMS, email, in-app, etc., 3) Template engine: For consistent notification formatting, 4) Queue system: To handle bursts of traffic, using Kafka/RabbitMQ, 5) Scheduling service: For delayed notifications, 6) Rate limiting: To prevent spamming users, 7) Delivery tracking: To monitor successful deliveries and failures, 8) User preferences: To respect opt-outs and delivery channel preferences, 9) Analytics: To track engagement. For Australian companies, emphasize compliance with the Privacy Act and Spam Act regulations. When discussing this in interviews, mention specific AWS services (SNS, SQS) or Azure equivalents to demonstrate practical implementation knowledge."
      }
    ]
  };
  
  // Render function framework to be implemented next
  const renderSectionContent = () => {
    switch(activeSection) {
      case '3.1':
        return renderSection3_1();
      case '3.2':
        return renderSection3_2();
      case '3.3':
        return renderSection3_3();
      case '3.4':
        return renderSection3_4();
      case 'resources':
        return renderResources();
      default:
        return <div>Section not found</div>;
    }
  };
  
  // Section render functions will be implemented in following edits
  const renderSection3_1 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Common Technical Test Types</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Understanding the Landscape</h3>
          <p className="mb-4">Technical tests come in various formats, but they all aim to evaluate your problem-solving abilities, coding skills, and thought process. Let's break down the main types you'll encounter:</p>
          
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Live Coding Interviews</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Real-time problem solving with interviewers watching. These typically last 30-60 minutes and focus on algorithms, data structures, or simple programming challenges. The emphasis is on your thinking process and communication as much as getting the right answer.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Take-Home Assignments</h4>
              <p className="text-slate-600 dark:text-slate-300">
                More extensive projects completed on your own time (typically 1-7 days). These evaluate your ability to write clean, maintainable code and often include requirements like tests, documentation, and proper architecture.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Online Assessments</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Automated platforms (HackerRank, Codility, LeetCode) with timed problems to solve. Usually 1-3 hours with multiple questions of increasing difficulty. These focus primarily on algorithmic problem-solving and efficiency.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">System Design Discussions</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Open-ended discussions about designing larger systems or applications. These test your architectural knowledge, understanding of trade-offs, and ability to work with requirements and constraints.
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaLightbulb className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">In Australia's tech market, I've found that take-home tests are particularly common for junior to mid-level roles, while system design questions become more prevalent for senior positions.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">The Winning Strategy for Each Type</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">Live Coding Interviews</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Think out loud - verbalize your thought process</li>
                  <li>Start with a naive solution, then optimize</li>
                  <li>Ask clarifying questions before coding</li>
                  <li>Test your solution with examples</li>
                  <li>Practice on a whiteboard or without code completion tools</li>
                </ul>
                
                <div className="mt-4 p-3 bg-white dark:bg-slate-600 rounded-lg">
                  <p className="font-medium mb-1">Example Question:</p>
                  <p className="text-slate-700 dark:text-slate-300 mb-2">"Find the two numbers in an array that add up to a target value."</p>
                  <p className="font-medium mb-1">Winning Approach:</p>
                  <p className="text-slate-700 dark:text-slate-300">Start by asking about input size, if the array is sorted, and if there are duplicate values. Begin with the brute force O(n²) solution (two nested loops), then optimize to the O(n) solution using a hash map to track seen values.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">Take-Home Assignments</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Focus on code quality and readability</li>
                  <li>Include tests and documentation</li>
                  <li>Follow best practices for the tech stack</li>
                  <li>Error handling and edge cases</li>
                  <li>Don't over-engineer but show scalable architecture</li>
                </ul>
                
                <div className="mt-4 p-3 bg-white dark:bg-slate-600 rounded-lg">
                  <p className="font-medium mb-1">Example Assignment:</p>
                  <p className="text-slate-700 dark:text-slate-300 mb-2">"Build a simple weather app that fetches and displays data from a public API."</p>
                  <p className="font-medium mb-1">Winning Approach:</p>
                  <p className="text-slate-700 dark:text-slate-300">Create a clean UI that works well on all devices. Implement proper state management, loading states, and error handling. Include unit tests for key components. Add a README explaining your approach, setup instructions, and potential improvements if you had more time.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">Online Assessments</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Practice with the specific platform beforehand</li>
                  <li>Understand time/space complexity requirements</li>
                  <li>Manage your time carefully across problems</li>
                  <li>Test your code with multiple examples</li>
                  <li>Start with problems you're confident in solving</li>
                </ul>
                
                <div className="mt-4 p-3 bg-white dark:bg-slate-600 rounded-lg">
                  <p className="font-medium mb-1">Example Problem:</p>
                  <p className="text-slate-700 dark:text-slate-300 mb-2">"Find the longest substring without repeating characters."</p>
                  <p className="font-medium mb-1">Winning Approach:</p>
                  <p className="text-slate-700 dark:text-slate-300">Use a sliding window technique with two pointers and a hash map to track character positions. When you encounter a duplicate, move the start pointer to the position after the first occurrence of the duplicate.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">System Design Discussions</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Clarify requirements and constraints first</li>
                  <li>Start with a high-level architecture diagram</li>
                  <li>Break down into components and services</li>
                  <li>Discuss data models and storage options</li>
                  <li>Address scalability, reliability, and security</li>
                </ul>
                
                <div className="mt-4 p-3 bg-white dark:bg-slate-600 rounded-lg">
                  <p className="font-medium mb-1">Example Question:</p>
                  <p className="text-slate-700 dark:text-slate-300 mb-2">"Design a URL shortening service like bit.ly"</p>
                  <p className="font-medium mb-1">Winning Approach:</p>
                  <p className="text-slate-700 dark:text-slate-300">Start by clarifying scale (requests per second, storage needs). Outline API endpoints, data model, and shortening algorithm (base62 encoding). Discuss database choice, caching strategy, and how to handle redirects efficiently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">How to Prepare Without Grinding</h3>
          
          <p className="mb-6">You don't need to solve hundreds of LeetCode problems to succeed. Here's a smarter approach:</p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Learn Problem Patterns</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Most algorithmic problems fall into common patterns (two-pointer, sliding window, BFS/DFS, etc.). Master these patterns rather than memorizing specific solutions.
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Deliberate Practice</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Solve 1-2 problems daily with full focus. After solving, study alternative solutions and optimize your approach. This is more effective than rushing through many problems.
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Mock Interviews</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Practice with a friend or use platforms like Pramp for mock interviews. The experience of explaining your solution verbally is invaluable.
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Build Projects</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Create small projects that showcase your ability to write clean, maintainable code. This prepares you for take-home assignments and demonstrates practical skills.
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
            <h4 className="font-medium mb-2">My Personal Approach:</h4>
            <p className="text-slate-700 dark:text-slate-300">
              I focused on mastering 20 core problems that cover the main patterns, rather than solving hundreds randomly. For each pattern, I learned one problem deeply, including multiple approaches. This targeted strategy was more effective than endless grinding.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['3.1'] && questions['3.1'].map(q => (
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
              onClick={() => markSectionComplete('3.1')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['3.1'] ? (
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
              onClick={() => setActiveSection('3.2')}
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Section <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderSection3_2 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Array & String Problems</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Most Common Problem Patterns</h3>
          <p className="mb-4">Array and string problems appear in virtually every technical interview. Let's explore the most common patterns and how to approach them:</p>
          
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Two-Pointer Technique</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Using two pointers that move through the array/string to find pairs or subarrays that meet certain conditions.
              </p>
              <div className="flex items-center">
                <div className="bg-emerald-100 dark:bg-emerald-800 p-2 rounded-full mr-3">
                  <FaCode className="text-emerald-600 dark:text-emerald-300" />
                </div>
                <p className="text-sm italic">Common in: Two sum, palindrome checking, reversing arrays in-place</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Sliding Window</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Maintaining a "window" of elements that grows or shrinks as you move through the array/string.
              </p>
              <div className="flex items-center">
                <div className="bg-emerald-100 dark:bg-emerald-800 p-2 rounded-full mr-3">
                  <FaCode className="text-emerald-600 dark:text-emerald-300" />
                </div>
                <p className="text-sm italic">Common in: Maximum/minimum subarray sum, longest substring without repeating characters</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Hash Map Technique</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Using a hash map/dictionary to store elements and their properties for quick lookup.
              </p>
              <div className="flex items-center">
                <div className="bg-emerald-100 dark:bg-emerald-800 p-2 rounded-full mr-3">
                  <FaCode className="text-emerald-600 dark:text-emerald-300" />
                </div>
                <p className="text-sm italic">Common in: Finding duplicates, counting frequencies, grouping anagrams</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Prefix Sum</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Precomputing cumulative sums to efficiently answer range-sum queries.
              </p>
              <div className="flex items-center">
                <div className="bg-emerald-100 dark:bg-emerald-800 p-2 rounded-full mr-3">
                  <FaCode className="text-emerald-600 dark:text-emerald-300" />
                </div>
                <p className="text-sm italic">Common in: Subarray sum equals K, continuous subarray sum, range sum queries</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Example Problem 1: Two Sum</h3>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-6">
            <p className="font-medium mb-2">Problem:</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Given an array of integers <code>nums</code> and an integer <code>target</code>, return the indices of the two numbers that add up to the <code>target</code>.
            </p>
            <p className="font-medium mb-2">Example:</p>
            <p className="text-slate-600 dark:text-slate-300">
              Input: <code>nums = [2, 7, 11, 15]</code>, <code>target = 9</code><br />
              Output: <code>[0, 1]</code> (because <code>nums[0] + nums[1] = 2 + 7 = 9</code>)
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium text-lg mb-2 text-emerald-600">Approach 1: Brute Force</h4>
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <p className="mb-2 font-medium">Pseudocode:</p>
              <pre className="bg-slate-800 text-slate-200 p-3 rounded overflow-x-auto">
{`function twoSum(nums, target):
    for i from 0 to length(nums) - 1:
        for j from i + 1 to length(nums) - 1:
            if nums[i] + nums[j] == target:
                return [i, j]
    return [] // No solution found`}
              </pre>
              
              <div className="mt-4">
                <p className="font-medium mb-1">Time Complexity: O(n²)</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">We have two nested loops, checking each pair of elements.</p>
                <p className="font-medium mb-1">Space Complexity: O(1)</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">We only use a constant amount of extra space.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-2 text-emerald-600">Approach 2: Hash Map (Optimal)</h4>
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <p className="mb-2 font-medium">Pseudocode:</p>
              <pre className="bg-slate-800 text-slate-200 p-3 rounded overflow-x-auto">
{`function twoSum(nums, target):
    map = empty hash map
    for i from 0 to length(nums) - 1:
        complement = target - nums[i]
        if complement exists in map:
            return [map[complement], i]
        map[nums[i]] = i
    return [] // No solution found`}
              </pre>
              
              <div className="mt-4">
                <p className="font-medium mb-1">Time Complexity: O(n)</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">We only need to traverse the array once, with constant-time lookups in the hash map.</p>
                <p className="font-medium mb-1">Space Complexity: O(n)</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">In the worst case, we might need to store all elements in the hash map.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaLightbulb className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">In interviews, always mention both approaches. Start with the brute force to show you can solve the problem, then optimize with the hash map approach. This demonstrates your problem-solving process.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Example Problem 2: Longest Substring Without Repeating Characters</h3>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-6">
            <p className="font-medium mb-2">Problem:</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Given a string <code>s</code>, find the length of the longest substring without repeating characters.
            </p>
            <p className="font-medium mb-2">Example:</p>
            <p className="text-slate-600 dark:text-slate-300">
              Input: <code>s = "abcabcbb"</code><br />
              Output: <code>3</code> (The longest substring is <code>"abc"</code>, with length 3)
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-2 text-emerald-600">Sliding Window Approach</h4>
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <p className="mb-2 font-medium">Pseudocode:</p>
              <pre className="bg-slate-800 text-slate-200 p-3 rounded overflow-x-auto">
{`function lengthOfLongestSubstring(s):
    n = length(s)
    max_length = 0
    char_map = empty hash map // Tracks character positions
    left = 0 // Left pointer of the window
    
    for right from 0 to n - 1:
        // If character exists in our current window
        if s[right] in char_map and char_map[s[right]] >= left:
            // Move left pointer to position after the duplicate
            left = char_map[s[right]] + 1
        
        // Update max_length if current window is larger
        max_length = maximum(max_length, right - left + 1)
        
        // Store current character position
        char_map[s[right]] = right
        
    return max_length`}
              </pre>
              
              <div className="mt-4">
                <p className="font-medium mb-1">Visual Example:</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                  With string <code>"abcabcbb"</code>:
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  <li>Start with empty window: left=0, right=0, char_map={"{}"}</li>
                  <li>Process 'a': window="a", char_map={"{a:0}"}, max_length=1</li>
                  <li>Process 'b': window="ab", char_map={"{a:0,b:1}"}, max_length=2</li>
                  <li>Process 'c': window="abc", char_map={"{a:0,b:1,c:2}"}, max_length=3</li>
                  <li>Process 'a': Found duplicate! Move left to 1, window="bca", char_map={"{a:3,b:1,c:2}"}, max_length=3</li>
                  <li>Process 'b': Found duplicate! Move left to 2, window="cab", char_map={"{a:3,b:4,c:2}"}, max_length=3</li>
                  <li>Continue this pattern...</li>
                </ol>
                
                <div className="mt-4">
                  <p className="font-medium mb-1">Time Complexity: O(n)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">We scan the string once, performing constant-time operations at each step.</p>
                  <p className="font-medium mb-1">Space Complexity: O(min(m, n))</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Where m is the size of the character set and n is the string length. In practice, this is often O(1) for ASCII strings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Tips for Array & String Problems</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Look for patterns before coding</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Take a moment to identify if the problem fits a known pattern like two-pointer, sliding window, etc.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Consider sorting as preprocessing</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  For array problems, sorting first (O(n log n)) can sometimes simplify the solution significantly.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Check for edge cases</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Empty arrays/strings, single element arrays, all identical elements, etc.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Use hash maps for O(1) lookups</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  If you need to check for existence or count occurrences, hash maps are your friend.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Test with small examples first</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Walk through your algorithm with small inputs to catch logical errors before implementing.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['3.2'] && questions['3.2'].map(q => (
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
            onClick={() => setActiveSection('3.1')}
            className="flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <FaArrowLeft className="mr-2" /> Previous Section
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => markSectionComplete('3.2')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['3.2'] ? (
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
              onClick={() => setActiveSection('3.3')}
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Section <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderSection3_3 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Data Structures & Algorithms</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Core Data Structures You Need to Know</h3>
          <p className="mb-4">Understanding these fundamental data structures is essential for technical interviews. Let's explore each one and its common applications:</p>
          
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Arrays & Hash Tables</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Arrays provide O(1) access by index but O(n) search for values. Hash tables offer O(1) average search, insert, and delete operations, making them ideal for lookups. In JavaScript, objects and Maps are implementations of hash tables.
              </p>
              <div className="mt-2 text-sm text-emerald-600">
                <span className="font-medium">Common interview questions:</span> Two Sum, Group Anagrams, Valid Sudoku
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Linked Lists</h4>
              <p className="text-slate-600 dark:text-slate-300">
                A sequence of nodes where each node stores data and a reference to the next node. Singly linked lists have one pointer (next), while doubly linked lists have two (next and previous). Useful when you need constant-time insertions/deletions or don't know the size in advance.
              </p>
              <div className="mt-2 text-sm text-emerald-600">
                <span className="font-medium">Common interview questions:</span> Reverse Linked List, Detect Cycle, Merge Two Sorted Lists
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Stacks & Queues</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Stacks follow Last-In-First-Out (LIFO) principle, while queues follow First-In-First-Out (FIFO). Stacks are ideal for tracking function calls, parsing expressions, and backtracking. Queues are used for breadth-first search and managing task scheduling.
              </p>
              <div className="mt-2 text-sm text-emerald-600">
                <span className="font-medium">Common interview questions:</span> Valid Parentheses, Implement Queue using Stacks, Min Stack
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Trees & Graphs</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Trees are hierarchical structures with a root node and children. Binary trees have at most two children per node. Binary Search Trees (BSTs) maintain an ordering property for efficient searching. Graphs are collections of nodes with edges between them, used to represent networks and relationships.
              </p>
              <div className="mt-2 text-sm text-emerald-600">
                <span className="font-medium">Common interview questions:</span> Maximum Depth of Binary Tree, Binary Tree Level Order Traversal, Course Schedule (graph)
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Heaps</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Special trees (usually binary) where the parent nodes are always smaller (min-heap) or larger (max-heap) than their children. Used for priority queues, finding the k-th largest/smallest element, and certain graph algorithms like Dijkstra's.
              </p>
              <div className="mt-2 text-sm text-emerald-600">
                <span className="font-medium">Common interview questions:</span> Kth Largest Element, Merge K Sorted Lists, Find Median from Data Stream
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Essential Algorithms</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">Searching Algorithms</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-1">Binary Search</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                      Efficiently finds elements in a sorted array with O(log n) time complexity. Repeatedly divides the search space in half.
                    </p>
                    <pre className="bg-slate-800 text-slate-200 p-2 rounded text-xs">
{`function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1; // Target not found
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-1">Depth-First Search (DFS)</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                      Explores as far as possible along each branch before backtracking. Uses a stack (often implemented recursively).
                    </p>
                    <pre className="bg-slate-800 text-slate-200 p-2 rounded text-xs">
{`function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start); // Process node
  
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}`}
                    </pre>
                  </div>
                </div>
                
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-1">Breadth-First Search (BFS)</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                      Explores all neighbors at the present depth before moving to nodes at the next depth level. Uses a queue.
                    </p>
                    <pre className="bg-slate-800 text-slate-200 p-2 rounded text-xs">
{`function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node); // Process node
    
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`}
                    </pre>
                  </div>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded">
                    <p className="font-medium mb-2">When to use which search algorithm:</p>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      <li><strong>Binary Search:</strong> Sorted arrays when finding a specific value</li>
                      <li><strong>DFS:</strong> Path finding, topological sorting, cycle detection</li>
                      <li><strong>BFS:</strong> Shortest path (unweighted), level-order traversal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">Sorting Algorithms</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-300 dark:border-slate-600">
                      <th className="text-left py-2">Algorithm</th>
                      <th className="text-left py-2">Time Complexity</th>
                      <th className="text-left py-2">Space Complexity</th>
                      <th className="text-left py-2">Stable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="py-2">Merge Sort</td>
                      <td>O(n log n)</td>
                      <td>O(n)</td>
                      <td>Yes</td>
                    </tr>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="py-2">Quick Sort</td>
                      <td>O(n log n) average, O(n²) worst</td>
                      <td>O(log n)</td>
                      <td>No</td>
                    </tr>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="py-2">Heap Sort</td>
                      <td>O(n log n)</td>
                      <td>O(1)</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="py-2">Bubble, Insertion, Selection</td>
                      <td>O(n²)</td>
                      <td>O(1)</td>
                      <td>Varies</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="mt-4 p-3 bg-white dark:bg-slate-600 rounded">
                  <p className="font-medium mb-2">Key Insight for Interviews:</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    In JavaScript interviews, knowing the built-in sort method and how to use custom comparators is often more important than implementing sorting algorithms from scratch. However, you should understand the principles and tradeoffs of common sorting algorithms.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">Dynamic Programming</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="mb-3">
                  Dynamic Programming (DP) breaks down complex problems into simpler overlapping subproblems, solving each subproblem just once and storing the results for future use.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-1">Example: Fibonacci with Memoization</p>
                    <pre className="bg-slate-800 text-slate-200 p-2 rounded text-xs">
{`function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  
  memo[n] = fibonacci(n-1, memo) + 
            fibonacci(n-2, memo);
  return memo[n];
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-1">Example: Fibonacci with Tabulation</p>
                    <pre className="bg-slate-800 text-slate-200 p-2 rounded text-xs">
{`function fibonacci(n) {
  if (n <= 1) return n;
  
  const dp = new Array(n+1);
  dp[0] = 0; dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  
  return dp[n];
}`}
                    </pre>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="font-medium mb-2">When to use Dynamic Programming:</p>
                  <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                    <li>Problem exhibits <strong>overlapping subproblems</strong> (same calculations many times)</li>
                    <li>Problem has <strong>optimal substructure</strong> (optimal solution can be built from optimal subsolutions)</li>
                    <li>Common examples: Knapsack problems, sequence alignment, shortest paths</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Example Problem: Implement a Queue using Stacks</h3>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-6">
            <p className="font-medium mb-2">Problem:</p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Implement a first-in-first-out (FIFO) queue using only two stacks. The implemented queue should support the standard queue operations: push, peek, pop, and empty.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-2 text-emerald-600">Solution</h4>
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <p className="mb-4">
                We'll use two stacks: one for pushing elements (inStack) and one for popping elements (outStack). When we need to pop or peek, if outStack is empty, we'll transfer all elements from inStack to outStack, which reverses their order.
              </p>
              
              <pre className="bg-slate-800 text-slate-200 p-3 rounded overflow-x-auto">
{`class MyQueue {
  constructor() {
    this.inStack = [];  // For push operations
    this.outStack = []; // For pop/peek operations
  }
  
  push(x) {
    this.inStack.push(x);
  }
  
  pop() {
    // If outStack is empty, transfer elements from inStack
    if (this.outStack.length === 0) {
      this.transferElements();
    }
    return this.outStack.pop();
  }
  
  peek() {
    if (this.outStack.length === 0) {
      this.transferElements();
    }
    return this.outStack[this.outStack.length - 1];
  }
  
  empty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
  
  // Helper method to transfer elements from inStack to outStack
  transferElements() {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
}`}
              </pre>
              
              <div className="mt-4">
                <p className="font-medium mb-1">Time Complexity:</p>
                <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                  <li><strong>push:</strong> O(1)</li>
                  <li><strong>pop:</strong> Amortized O(1), worst case O(n)</li>
                  <li><strong>peek:</strong> Amortized O(1), worst case O(n)</li>
                  <li><strong>empty:</strong> O(1)</li>
                </ul>
                
                <p className="font-medium mt-3 mb-1">Space Complexity:</p>
                <p className="text-slate-600 dark:text-slate-300">O(n) - we need space for all n elements in the queue</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Tips for Data Structure & Algorithm Problems</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Master common traversal techniques</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Deeply understand DFS and BFS as they apply to various data structures (trees, graphs, matrices).
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Learn to recognize pattern indicators</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  "Find shortest path" → BFS or Dijkstra's. "All possible combinations" → backtracking or DFS. "Minimum/maximum" → DP or greedy.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Understand space-time tradeoffs</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  You can often use extra space (usually a hash map) to significantly improve time complexity. Be explicit about these tradeoffs in interviews.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Practice in-place operations</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Many array/string problems require modifying data structures in-place. Understanding techniques like two-pointer swaps and overwriting values is essential.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Learn to implement basic data structures</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Even in languages with built-in implementations, practice coding stacks, queues, linked lists, and heaps from scratch.
                </p>
              </div>
            </li>
          </ul>
          
          <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
            <h4 className="font-medium mb-2">Australian Tech Interview Insight:</h4>
            <p className="text-slate-700 dark:text-slate-300">
              From my experience interviewing at Australian companies, data structure questions tend to be more practical than algorithmic puzzles. Expect questions about implementing or modifying data structures for specific use cases rather than theoretical algorithm optimization.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['3.3'] && questions['3.3'].map(q => (
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
            onClick={() => setActiveSection('3.2')}
            className="flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <FaArrowLeft className="mr-2" /> Previous Section
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => markSectionComplete('3.3')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['3.3'] ? (
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
              onClick={() => setActiveSection('3.4')}
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Section <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderSection3_4 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">System Design Problems</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">System Design Interview Basics</h3>
          <p className="mb-4">System design interviews evaluate your ability to architect scalable, reliable, and maintainable systems. Unlike coding challenges, these are open-ended discussions focusing on high-level design decisions.</p>
          
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">When Will You Face These?</h4>
              <p className="text-slate-600 dark:text-slate-300">
                System design questions typically appear in interviews for mid-level to senior roles. However, even junior developers are increasingly asked simplified versions to gauge architectural thinking. At Australian companies, these questions are common for roles involving distributed systems or customer-facing applications.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">What Are Interviewers Looking For?</h4>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li>Systematic approach to problem-solving</li>
                <li>Understanding of scalability concepts</li>
                <li>Knowledge of common components and trade-offs</li>
                <li>Communication skills and collaboration</li>
                <li>Practical experience with real-world considerations</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Common System Design Questions</h4>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li>Design a URL shortening service (like bit.ly)</li>
                <li>Design a social media feed</li>
                <li>Design a file sharing service</li>
                <li>Design a notification system</li>
                <li>Design a ride-sharing service</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaLightbulb className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">For junior roles in Australian companies, the system design questions are often more focused on components you've worked with directly rather than massive scale problems. Be prepared to discuss the architecture of your previous projects in detail.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">The RADIO Framework</h3>
          
          <p className="mb-6">Use this structured approach to tackle any system design question successfully:</p>
          
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">R - Requirements</h4>
              <div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Start by clarifying the functional and non-functional requirements:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li><strong>Functional:</strong> What features should the system have?</li>
                  <li><strong>Scale:</strong> How many users, requests per second, data volume?</li>
                  <li><strong>Performance:</strong> Expected latency, response times?</li>
                  <li><strong>Reliability:</strong> Availability requirements (99.9%)?</li>
                </ul>
                <div className="p-3 bg-white dark:bg-slate-600 rounded text-sm">
                  <strong>Example:</strong> "For this URL shortener, we need to support URL creation, redirection, custom aliases, analytics, and an API. We expect about 100M URLs, 1000 new URLs/day, and 10,000 redirects/second. Latency should be under 100ms for redirects."
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">A - Architecture</h4>
              <div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Outline the high-level components and their interactions:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Draw a system diagram with major components</li>
                  <li>Define API endpoints and interfaces</li>
                  <li>Explain relationships between components</li>
                </ul>
                <div className="p-3 bg-white dark:bg-slate-600 rounded text-sm">
                  <strong>Example:</strong> "Our URL shortener will have: a web server for the API and redirection, a database to store URL mappings, a cache for popular URLs, and an analytics service. The API will have endpoints for creating short URLs and retrieving stats."
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">D - Data Model</h4>
              <div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Define how data is stored and accessed:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Database schema or data structures</li>
                  <li>Choice of database (relational, NoSQL, graph)</li>
                  <li>Data access patterns and indexing strategy</li>
                </ul>
                <div className="p-3 bg-white dark:bg-slate-600 rounded text-sm">
                  <strong>Example:</strong> "For our URL shortener, we'll use a relational database with a URLs table containing: id, short_code, original_url, created_at, user_id, expiry_date. We'll index on short_code for fast lookups. For analytics, we'll have a separate clicks table with short_code, timestamp, user_agent, and IP."
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">I - Implementation Details</h4>
              <div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Dive deeper into specific components:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Algorithms for key operations</li>
                  <li>Technologies and frameworks to use</li>
                  <li>API design and protocols</li>
                  <li>Error handling approaches</li>
                </ul>
                <div className="p-3 bg-white dark:bg-slate-600 rounded text-sm">
                  <strong>Example:</strong> "For generating short codes, we'll use a base62 encoding of an auto-incrementing ID. For caching, we'll use Redis with a TTL-based eviction policy. The API will be RESTful with rate limiting implemented using a token bucket algorithm."
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">O - Optimization & Trade-offs</h4>
              <div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Discuss improvements and limitations:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Scaling strategies (horizontal vs. vertical)</li>
                  <li>Performance optimizations</li>
                  <li>Trade-offs in your design</li>
                  <li>Bottlenecks and how to address them</li>
                </ul>
                <div className="p-3 bg-white dark:bg-slate-600 rounded text-sm">
                  <strong>Example:</strong> "To scale our URL shortener, we'll use a load balancer with multiple API servers. For global access, we'll use CDN for static content and geo-distributed read replicas. A trade-off is that our custom aliases feature could create hotspots in the database, which we could address by sharding based on the first few characters of the short code."
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Example: Design a URL Shortening Service</h3>
          
          <div className="mb-6">
            <p className="mb-4">Let's apply the RADIO framework to a common system design question:</p>
            
            <div className="border-l-4 border-emerald-500 pl-4 mb-4">
              <h4 className="font-medium mb-2">Requirements</h4>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li><strong>Functional:</strong> Create short URLs, redirect to original URL, custom aliases, analytics, expiration</li>
                <li><strong>Non-functional:</strong> High availability, low latency for redirects (&lt;100ms), scalable to millions of URLs</li>
                <li><strong>Scale:</strong> 100M URLs stored, 10K redirects/second, 1K new URLs/day</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4 mb-4">
              <h4 className="font-medium mb-2">Architecture</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-2">High-level components:</p>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li>Load Balancers: Distribute traffic across application servers</li>
                <li>Application Servers: Handle API requests and redirections</li>
                <li>Database: Store URL mappings</li>
                <li>Cache: Store frequently accessed URLs</li>
                <li>Analytics Service: Track click data</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mt-2">API Endpoints:</p>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li>POST /api/shorten - Create a short URL</li>
                <li>GET /api/stats/{"shortCode"} - Get URL statistics</li>
                <li>GET /{"shortCode"} - Redirect to original URL</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4 mb-4">
              <h4 className="font-medium mb-2">Data Model</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Tables:</p>
              <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded text-sm">
                <p className="font-medium">URLs Table:</p>
                <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                  <li>id: BigInt, primary key</li>
                  <li>short_code: Varchar(10), indexed, unique</li>
                  <li>original_url: Varchar(2048)</li>
                  <li>created_at: Timestamp</li>
                  <li>expires_at: Timestamp, nullable</li>
                  <li>user_id: BigInt, nullable</li>
                </ul>
                <p className="font-medium mt-3">Clicks Table:</p>
                <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                  <li>id: BigInt, primary key</li>
                  <li>short_code: Varchar(10), indexed</li>
                  <li>timestamp: Timestamp</li>
                  <li>referrer: Varchar(2048), nullable</li>
                  <li>user_agent: Varchar(512), nullable</li>
                  <li>ip_address: Varchar(45), nullable</li>
                </ul>
              </div>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4 mb-4">
              <h4 className="font-medium mb-2">Implementation Details</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-2">URL Generation:</p>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li>Base62 encoding ([a-zA-Z0-9]) of an auto-incrementing ID</li>
                <li>Guarantees uniqueness and provides 62^7 ≈ 3.5 trillion possible combinations with 7 characters</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mt-2 mb-2">Pseudocode for URL shortening:</p>
              <pre className="bg-slate-800 text-slate-200 p-3 rounded overflow-x-auto text-sm">
{`function shortenURL(originalURL, customAlias=null):
    if customAlias:
        if customAlias exists in database:
            return error "Alias already taken"
        shortCode = customAlias
    else:
        // Get next ID from database
        id = getNextId()
        // Convert to base62
        shortCode = base62Encode(id)
    
    // Store in database
    storeURL(shortCode, originalURL)
    return shortCode`}
              </pre>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Optimizations & Trade-offs</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Scaling Considerations:</p>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li>Cache popular URLs in Redis with TTL (Time-To-Live) to reduce database load</li>
                <li>Implement read replicas for the database to scale reads</li>
                <li>Use CDN for global distribution</li>
                <li>Batch write analytics data to reduce database writes</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mt-2 mb-2">Trade-offs:</p>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li>Custom aliases could create hotspots - potential solution: separate storage</li>
                <li>Base62 encoding produces random-looking strings - trade-off for collision avoidance</li>
                <li>Analytics increases complexity but provides business value</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Example: Design a Notification System</h3>
          
          <div className="mb-6">
            <p className="mb-4">Here's a condensed outline for a notification system design:</p>
            
            <div className="border-l-4 border-emerald-500 pl-4 mb-4">
              <h4 className="font-medium mb-2">Requirements</h4>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li>Support multiple notification types: push, email, SMS, in-app</li>
                <li>Handle high throughput with potential traffic spikes</li>
                <li>Support delivery status tracking</li>
                <li>Allow user preference management</li>
                <li>Support scheduled and triggered notifications</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4 mb-4">
              <h4 className="font-medium mb-2">Key Components</h4>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li><strong>API Gateway:</strong> Entry point for notification requests</li>
                <li><strong>Message Queue:</strong> Buffer to handle traffic spikes (Kafka/RabbitMQ)</li>
                <li><strong>Notification Service:</strong> Core service for processing notifications</li>
                <li><strong>Provider Services:</strong> Adapters for different notification channels</li>
                <li><strong>Template Service:</strong> Manages notification templates</li>
                <li><strong>User Preference Service:</strong> Manages user opt-in/opt-out settings</li>
                <li><strong>Tracking Service:</strong> Monitors delivery and engagement</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Design Considerations</h4>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
                <li><strong>Reliability:</strong> Retry mechanisms, dead-letter queues</li>
                <li><strong>Scalability:</strong> Horizontal scaling of services, partitioning of queues</li>
                <li><strong>Rate Limiting:</strong> Prevent notification spam</li>
                <li><strong>Idempotency:</strong> Ensure notifications aren't sent multiple times</li>
                <li><strong>Monitoring:</strong> Track success rates, latency, and errors</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Australian Compliance Note:</h4>
            <p className="text-slate-700 dark:text-slate-300">
              When designing systems that send notifications to users in Australia, always consider compliance with the Spam Act 2003, which requires explicit consent for commercial electronic messages, clear unsubscribe mechanisms, and accurate sender information. This is particularly important for ASX companies that face regulatory scrutiny.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">How to Prepare for System Design Interviews</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-emerald-500 mr-2">1.</span>
              <div>
                <p className="font-medium">Study Common Building Blocks</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Understand key components: load balancers, caching, databases, message queues, API gateways, CDNs, etc.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-emerald-500 mr-2">2.</span>
              <div>
                <p className="font-medium">Learn Common Architectures</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Familiarize yourself with microservices, event-driven architecture, and serverless patterns.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-emerald-500 mr-2">3.</span>
              <div>
                <p className="font-medium">Practice on Paper</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Draw system diagrams for common applications you use daily (e.g., Instagram, Uber, Netflix).
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-emerald-500 mr-2">4.</span>
              <div>
                <p className="font-medium">Study Real-World Systems</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Read engineering blogs from major tech companies to understand how they solve problems.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-emerald-500 mr-2">5.</span>
              <div>
                <p className="font-medium">Practice Structured Communication</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Use frameworks like RADIO to ensure you cover all important aspects systematically.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <p className="font-medium mb-2">Recommended Resources:</p>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-1">
              <li>"System Design Interview" by Alex Xu</li>
              <li>"Designing Data-Intensive Applications" by Martin Kleppmann</li>
              <li>GitHub repositories with system design case studies</li>
              <li>Engineering blogs: Atlassian, REA Group, SEEK, Canva (Australian tech companies)</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['3.4'] && questions['3.4'].map(q => (
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
            onClick={() => setActiveSection('3.3')}
            className="flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <FaArrowLeft className="mr-2" /> Previous Section
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => markSectionComplete('3.4')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['3.4'] ? (
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
              Next: Resources & Downloads <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderResources = () => {
    // Define resources data
    const resources = [
      {
        id: 'cheatsheet',
        icon: <FaCode className="text-emerald-600 text-xl mr-3" />,
        title: 'Technical Interview Cheat Sheet',
        description: 'A comprehensive guide covering common algorithm patterns, time complexity analysis, and problem-solving frameworks tailored for technical interviews.',
        downloadLink: '/downloads/technical-cheatsheet.txt',
        linkText: 'Download Cheat Sheet'
      },
      {
        id: 'leetcode',
        icon: <FaCodeBranch className="text-emerald-600 text-xl mr-3" />,
        title: 'LeetCode Problem Patterns',
        description: 'Classification of 75 essential LeetCode problems by pattern with strategies for solving each type. Focus on these patterns rather than memorizing solutions.',
        downloadLink: '/downloads/leetcode-patterns.txt',
        linkText: 'Download Patterns'
      },
      {
        id: 'system-design',
        icon: <FaDatabase className="text-emerald-600 text-xl mr-3" />,
        title: 'System Design Templates',
        description: 'Ready-to-use templates and diagrams for common system design interview questions, including URL shorteners, notification systems, and more.',
        downloadLink: '/downloads/system-design.txt',
        linkText: 'Download Templates'
      },
      {
        id: 'aus-problems',
        icon: <FaCodeBranch className="text-emerald-600 text-xl mr-3" />,
        title: 'Australian Tech Company Problems',
        description: 'A collection of technical problems and system design questions frequently asked at top Australian tech companies like Atlassian, Canva, and REA Group.',
        downloadLink: '/downloads/australian-tech-problems.txt',
        linkText: 'Download Problems'
      }
    ];

    return (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-6">Resources & Downloads</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Technical Interview Preparation</h3>
          <p className="mb-6">These resources will help you prepare for technical interviews and coding challenges. I've compiled them based on my experience interviewing at Australian tech companies.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {resources && resources.map(resource => (
              <div key={resource.id} className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {resource.icon}
                  <h4 className="font-medium text-lg">{resource.title}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {resource.description}
                </p>
                <a 
                  href={resource.downloadLink} 
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="mr-2" /> {resource.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Module 3 Complete!</h3>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="mb-6">
              Congratulations on completing the Technical Interview Preparation module! You now have a solid foundation in the most common technical interview formats and problem-solving strategies.
            </p>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-6">
              <h4 className="font-semibold mb-4">Next Steps for Success:</h4>
              
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Complete 2-3 LeetCode problems daily, focusing on patterns rather than random problems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Practice explaining your thought process out loud while solving problems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Review the system design frameworks and apply them to real-world applications</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Join a study group or find a partner to practice mock interviews</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Revisit this module before your interviews to refresh key concepts</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg font-medium mb-4">
              Remember: Technical interviews are as much about communication as they are about problem-solving.
            </p>
            
            <p>
              The patterns and frameworks you&apos;ve learned here will serve as your foundation. With consistent practice and the right mindset, you&apos;ll be well-prepared to showcase your skills and land your dream tech role in Australia.
            </p>
            
            <div className="mt-6 p-4 bg-emerald-100 dark:bg-emerald-800/50 rounded-lg text-emerald-800 dark:text-emerald-200">
              <p className="font-medium">Ready to learn about career strategy and mindset? Continue to Module 4!</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button 
            onClick={() => setActiveSection('3.4')}
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
              href="/break-into-tech/modules/4"
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Continue to Module 4 <FaArrowRight className="ml-2" />
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
              Module 3 of 4
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
              🧩 MODULE 3: Technical Tests – Win Without LeetCode Grinding
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Ace code tests and take-homes even if you're not LeetCode grinding daily.
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