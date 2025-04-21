'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft, FaArrowRight, FaDownload, FaQuestionCircle, FaLightbulb, FaUsers, FaDollarSign, FaHandshake, FaHome } from 'react-icons/fa';

export default function Module4Page() {
  const [activeSection, setActiveSection] = useState('4.1');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [completedSections, setCompletedSections] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('module4Progress');
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
    localStorage.setItem('module4Progress', JSON.stringify(completedSections));
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
    { id: '4.1', title: 'Career Strategy & Mindset' },
    { id: '4.2', title: 'Targeting Companies' },
    { id: '4.3', title: 'Leveraging Networks' },
    { id: '4.4', title: 'Negotiation Techniques' },
    { id: 'resources', title: 'Resources & Downloads' }
  ];
  
  const questions = {
    '4.1': [
      {
        id: 'q4.1.1',
        question: "How do I determine which technology specialization to focus on?",
        answer: "Consider these factors: 1) Market demand - research which skills have consistent job openings in your target location, 2) Personal aptitude - what technical areas come more naturally to you, 3) Interest level - technologies you genuinely enjoy working with (you'll learn faster), 4) Income potential - some specializations pay more than others, and 5) Future growth - look at industry trends to identify growing rather than declining areas. The sweet spot is the intersection of what you enjoy, what you're good at, and what the market values. For ASX companies specifically, skills in cloud architecture, data engineering, cybersecurity, and financial systems integration are consistently in high demand."
      },
      {
        id: 'q4.1.2',
        question: "How do I overcome the negative mindset when job searching takes longer than expected?",
        answer: "Extended job searches can be mentally challenging. Try these approaches: 1) Set process goals instead of outcome goals (e.g., 'apply to 5 quality jobs per week' rather than 'get a job by next month'), 2) Create a structured daily routine that includes upskilling, job searching, and personal well-being, 3) Track and celebrate small wins (getting an interview, improving your portfolio), 4) Join communities of other job searchers for support and perspective, 5) Schedule regular breaks to prevent burnout, and 6) Remember that job searching is a numbers game with many factors outside your control—rejection is often not personal. Most importantly, conduct weekly retrospectives to continuously improve your approach rather than simply repeating the same strategies."
      }
    ],
    '4.2': [
      {
        id: 'q4.2.1',
        question: "How do I identify companies that are likely to hire junior developers?",
        answer: "Look for these indicators: 1) Companies advertising multiple junior roles (suggests a structured program for junior talent), 2) Organizations with graduate programs or internships (shows investment in developing talent), 3) Rapidly growing mid-size companies (often need to build teams quickly and may be more open to training), 4) Companies with active technical blogs and community involvement (often value teaching and mentorship), 5) Organizations whose leadership frequently discusses talent development, and 6) Companies using technologies with shallower learning curves (e.g., Ruby on Rails, JavaScript frameworks). In the ASX context, larger financial institutions often have dedicated early career programs, while established fintech companies frequently hire junior developers to support growth."
      },
      {
        id: 'q4.2.2',
        question: "Should I focus on smaller companies or larger enterprises for my first tech role?",
        answer: "Both have distinct advantages: Smaller companies/startups typically offer: 1) Broader experience across the stack, 2) More direct responsibility and impact, 3) Faster career progression, and 4) Less bureaucracy. Larger companies typically offer: 1) More structured training and mentorship, 2) Better job security, 3) Established processes and best practices to learn from, and 4) Name recognition for your resume. If you learn quickly and thrive with autonomy, smaller companies may suit you better. If you benefit from structure and formal guidance, larger organizations may be preferable. In Australia, many successful tech careers begin in consulting firms (like TCS, Accenture) or banks (Commonwealth, ANZ) which provide excellent foundational training before moving to more specialized roles."
      }
    ],
    '4.3': [
      {
        id: 'q4.3.1',
        question: "How can I effectively network when I don't know many people in tech?",
        answer: "Start building your network through these approachable channels: 1) Attend local meetups and industry events (Meetup.com lists many tech groups in Australian cities), 2) Join online communities (Reddit's r/AusJobs, r/cscareerquestions, local Slack groups), 3) Connect with alumni from your education programs, 4) Participate in hackathons and coding competitions, 5) Contribute to open source projects, and 6) Reach out for informational interviews with people in roles you aspire to (be specific about what you'd like to learn, keep it to 20-30 minutes). LinkedIn is particularly valuable in Australia—search for second-degree connections at companies you're interested in and ask for introductions. Focus on building genuine relationships rather than immediately asking for job referrals."
      },
      {
        id: 'q4.3.2',
        question: "What's the most effective way to approach someone for a referral?",
        answer: "When seeking referrals, follow this approach: 1) Build the relationship first—connect genuinely around shared interests before asking for help, 2) Do your research—understand the company and specific role thoroughly, 3) Make a targeted request—'I've applied for [specific position] that aligns with my experience in [relevant skill]. Would you feel comfortable referring me?' 4) Make it easy—provide your updated resume and a brief paragraph about why you're a good fit, 5) Offer something in return, even if it's just keeping them updated on your career progress, and 6) Be gracious whether they agree or decline. Remember that when someone refers you, they're putting their professional reputation on the line, so only ask once you're confident they know your capabilities well enough to vouch for you."
      }
    ],
    '4.4': [
      {
        id: 'q4.4.1',
        question: "When and how should I negotiate salary for a tech role?",
        answer: "For effective salary negotiation: 1) Timing: wait until after a formal offer is extended, never discuss salary during initial interviews, 2) Research: use resources like Hays Salary Guide, Indeed, and Glassdoor to understand market rates in Australia for your specific role and experience level, 3) Approach: express enthusiasm for the role before discussing compensation, frame the conversation around mutual benefit rather than demands, 4) Technique: start by asking if there's flexibility in the offered package before proposing a specific number (usually 10-15% above their initial offer), 5) Consider the full package: superannuation, equity, flexibility, professional development, and other benefits can be negotiated beyond base salary. For junior roles in Australia, there's typically less negotiation room on base salary but more flexibility on learning opportunities and work arrangements."
      },
      {
        id: 'q4.4.2',
        question: "What should I do if the company says they can't meet my salary expectations?",
        answer: "When faced with compensation limitations: 1) Ask about a performance-based salary review after 3-6 months if you meet specific objectives, 2) Negotiate additional benefits like extra vacation days, professional development budget, or flexible work arrangements, 3) Inquire about bonus potential or equity compensation (particularly relevant for startups), 4) Consider accepting a lower base with a clear written path to advancement, including specific milestones and corresponding salary increases, 5) If the gap is substantial and other benefits don't compensate, politely explain that while you're excited about the role, the offer is significantly below your market value and current needs. Sometimes this transparency leads to an improved offer. Remember that in Australian tech, companies often have more flexibility with role titles, learning opportunities, and work arrangements than with initial base salary."
      }
    ]
  };
  
  // Render function framework to be implemented next
  const renderSectionContent = () => {
    switch(activeSection) {
      case '4.1':
        return renderSection4_1();
      case '4.2':
        return renderSection4_2();
      case '4.3':
        return renderSection4_3();
      case '4.4':
        return renderSection4_4();
      case 'resources':
        return renderResources();
      default:
        return <div>Section not found</div>;
    }
  };
  
  // Section render functions will be implemented in following edits
  const renderSection4_1 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Career Strategy & Mindset</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Strategic Career Planning</h3>
          <p className="mb-4">Having a clear strategy dramatically increases your chances of breaking into tech successfully. Let's look at how to approach this systematically:</p>
          
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Identify Your North Star</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Define your ideal role 3-5 years from now. This isn't about your first job, but where you want that job to lead. Be specific about the role, industry, and company type.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Work Backward</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Research people who currently have your target role. Study their career path, skills, and qualifications. Use this to create a roadmap of skills and experiences you'll need.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Identify Entry Points</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Find roles that both match your current capabilities and serve as stepping stones toward your goal. Often, these aren't the most obvious or prestigious positions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Build Learning Loops</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Create short feedback cycles to accelerate your growth. This might involve side projects, seeking mentorship, or creating content to demonstrate your understanding.
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaLightbulb className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">In Australia's tech market, I've found that specialization can significantly accelerate your career progress compared to being a generalist, especially in your first 2-3 years.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Specialization vs. Generalization</h3>
          
          <p className="mb-6">One of the most important strategic decisions is whether to specialize or remain a generalist early in your career:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">Specialist Path</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Focus deeply on one technology, framework, or domain (e.g., React, machine learning, cybersecurity).
              </p>
              <div>
                <p className="font-medium mb-2">Advantages:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Faster path to market value and higher initial salary</li>
                  <li>Easier to market yourself with clear positioning</li>
                  <li>Less competition for specialized roles</li>
                </ul>
                
                <p className="font-medium mb-2">Disadvantages:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Risk if your specialization becomes less valuable</li>
                  <li>Can be limiting for certain senior roles</li>
                  <li>May need to rebuild expertise if pivoting</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">Generalist Path</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Build broad knowledge across multiple technologies and domains (full-stack development, various languages).
              </p>
              <div>
                <p className="font-medium mb-2">Advantages:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>More adaptability to market changes</li>
                  <li>Better foundation for technical leadership</li>
                  <li>Wider range of potential roles</li>
                </ul>
                
                <p className="font-medium mb-2">Disadvantages:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Harder to stand out in application process</li>
                  <li>Usually slower path to higher compensation</li>
                  <li>May struggle to compete with specialists</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
            <p className="font-medium">My Recommendation:</p>
            <p className="mt-2">Begin as a specialist to break in more easily and command higher initial value, then gradually broaden your expertise. This "T-shaped" approach gives you both depth and breadth over time.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Resilience Mindset</h3>
          
          <p className="mb-6">Job searching is mentally challenging. Here's how to build the resilience you'll need:</p>
          
          <div className="space-y-5">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Separate Identity from Outcome</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Your value as a person and professional isn't determined by whether you get a particular job. Rejections are often about fit, timing, and factors beyond your control.
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Process Over Outcomes</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Focus on what you can control: your learning, application quality, and networking efforts. Set goals based on actions (apply to 10 quality positions) rather than results (get a job by next month).
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Implement Structured Reflection</h4>
              <p className="text-slate-600 dark:text-slate-300">
                After each interview or rejection, ask: What went well? What could I improve? What patterns am I noticing? Use these insights to continuously refine your approach.
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Create Support Systems</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Connect with peers in similar situations, find mentors who've successfully navigated career transitions, and don't hesitate to seek professional support if needed.
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <p className="font-medium mb-2">My Personal Approach:</p>
            <p className="text-slate-600 dark:text-slate-300">
              During my own job search, I maintained a spreadsheet tracking not just applications but also my daily learning, networking efforts, and mood. This helped me see progress even when job offers weren't immediate. I also limited job searching to specific hours rather than letting it consume entire days.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['4.1'] && questions['4.1'].map(q => (
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
              onClick={() => markSectionComplete('4.1')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['4.1'] ? (
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
              onClick={() => setActiveSection('4.2')}
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Section <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderSection4_2 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Targeting Companies</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Strategic Company Selection</h3>
          <p className="mb-4">Not all companies are equally receptive to entry-level candidates. Here's how to identify organizations where you'll have the best chances:</p>
          
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Growth Phase Companies</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Companies that have secured funding and are scaling rapidly often hire more broadly and have greater tolerance for training new talent. Look for businesses that have recently announced significant funding or are expanding into new markets.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Tech-Forward Traditional Companies</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Many established companies in finance, insurance, and retail are investing heavily in digital transformation. These organizations often have more structured onboarding and training for junior talent.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Companies with Graduate Programs</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Organizations with formal graduate programs have the infrastructure to support entry-level talent. Even when you're not part of the program, these companies typically have a culture that values developing junior staff.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Consultancies and Service Companies</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Technology consultancies frequently hire entry-level developers as they can staff them on less complex parts of client projects while training them. These roles can provide excellent exposure to different industries and technologies.
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">In the Australian market, companies like Commonwealth Bank, Atlassian, and REA Group are known for having strong early career development programs that can be excellent entry points.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Company Research Framework</h3>
          
          <p className="mb-6">Thoroughly researching target companies gives you a significant advantage. Use this structured approach:</p>
          
          <div className="space-y-5">
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">1. Technical Stack Analysis</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Identify the company's technology stack through:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Job descriptions (look at multiple roles)</li>
                  <li>Employee LinkedIn profiles (especially engineers)</li>
                  <li>Technical blog posts and engineering pages</li>
                  <li>GitHub repositories (for open source contributions)</li>
                  <li>StackShare and similar technology tracking sites</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  Use this information to highlight relevant skills in your resume and application.
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">2. Cultural Assessment</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Understand the company culture through:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Company values and mission statements</li>
                  <li>Glassdoor reviews (focus on engineering department)</li>
                  <li>LinkedIn posts from current employees</li>
                  <li>The company's social media presence and tone</li>
                  <li>News articles and press releases</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  Use these insights to assess culture fit and customize your cover letter.
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">3. Business Context</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Understand the company's business and industry through:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Annual reports and investor presentations</li>
                  <li>Recent press releases and news coverage</li>
                  <li>Industry analyst reports</li>
                  <li>Competitor analysis</li>
                  <li>Customer reviews and product feedback</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  Use this understanding to demonstrate business acumen during interviews.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Research Template</h4>
            <p className="text-slate-600 dark:text-slate-300">
              For each target company, create a one-page research document covering:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Mission and values</li>
              <li>Key technologies and technical focus areas</li>
              <li>Recent business developments and challenges</li>
              <li>Current employees you might connect with</li>
              <li>Why you're interested in this specific company</li>
              <li>How your skills and experience match their needs</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-300 mt-3">
              Review this document before applying and interviewing.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Company Size Trade-offs</h3>
          
          <p className="mb-6">Different company sizes offer distinct advantages and challenges for early career professionals:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">Startups (≤50 employees)</h4>
              <div>
                <p className="font-medium mb-2">Pros:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
                  <li>Broad exposure across technologies</li>
                  <li>Direct impact on product and business</li>
                  <li>Less bureaucracy, faster implementation</li>
                  <li>Potential equity upside</li>
                </ul>
                
                <p className="font-medium mb-2">Cons:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Limited mentorship and training</li>
                  <li>Often have higher expectations</li>
                  <li>Job instability if funding is limited</li>
                  <li>May lack structured development paths</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">Mid-size (50-500 employees)</h4>
              <div>
                <p className="font-medium mb-2">Pros:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
                  <li>Balance of structure and flexibility</li>
                  <li>Often growing with promotion opportunities</li>
                  <li>More resources than startups</li>
                  <li>Usually have some mentorship systems</li>
                </ul>
                
                <p className="font-medium mb-2">Cons:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>May be in transitional phase organizationally</li>
                  <li>Roles can be less clearly defined</li>
                  <li>Often competing with larger companies</li>
                  <li>Tech debt from growth phases</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">Enterprise (500+ employees)</h4>
              <div>
                <p className="font-medium mb-2">Pros:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
                  <li>Structured training and onboarding</li>
                  <li>Clear career advancement paths</li>
                  <li>Better work-life balance typically</li>
                  <li>Comprehensive benefits packages</li>
                </ul>
                
                <p className="font-medium mb-2">Cons:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Slower implementation and decision making</li>
                  <li>May work on smaller components only</li>
                  <li>More rigid processes and approaches</li>
                  <li>Potentially less cutting-edge tech</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
            <p className="font-medium mb-2">Best First Job Recommendation:</p>
            <p className="text-slate-700 dark:text-slate-300">
              For most entry-level developers, mid-size companies or larger enterprises with good training programs offer the best balance of structure, learning, and opportunity. If you're extremely self-directed and learn quickly, a startup can accelerate your growth but comes with higher risk.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['4.2'] && questions['4.2'].map(q => (
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
            onClick={() => setActiveSection('4.1')}
            className="flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <FaArrowLeft className="mr-2" /> Previous Section
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => markSectionComplete('4.2')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['4.2'] ? (
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
              onClick={() => setActiveSection('4.3')}
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Section <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderSection4_3 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Leveraging Networks</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">The Network Advantage</h3>
          <p className="mb-4">In the Australian tech market, 60-70% of jobs are filled through referrals and networking rather than traditional applications. Here's how to leverage this reality:</p>
          
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Understanding the "Hidden" Job Market</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Many positions are filled before they're ever publicly posted. Companies prefer to hire through referrals because it reduces risk and speeds up the hiring process. By building your network, you gain access to these opportunities.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Referral Power</h4>
              <p className="text-slate-600 dark:text-slate-300">
                A strong referral typically moves your application to the top of the stack and often bypasses initial screening steps. In many companies, employees receive bonuses for successful referrals, creating mutual benefit.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Beyond Job Opportunities</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Networks provide more than just job leads. They offer industry insights, technical mentorship, feedback on your skills and approach, and emotional support during your job search.
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaLightbulb className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">Even with no existing tech network, you can build meaningful connections within 2-3 months through consistent, strategic networking activities.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Building Your Network From Zero</h3>
          
          <p className="mb-6">If you're starting without connections in tech, here's a structured approach to building your network:</p>
          
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">1. Online Communities</h4>
              <div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Join and actively participate in:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Australian Tech Slack channels</strong> - ACS, Melb/Syd Tech, Women in Tech</li>
                  <li><strong>Reddit communities</strong> - r/cscareerquestions, r/devanz, r/AusJobs</li>
                  <li><strong>Discord servers</strong> for specific technologies you're interested in</li>
                  <li><strong>LinkedIn groups</strong> related to your target roles and technologies</li>
                </ul>
                <div className="mt-4 bg-white dark:bg-slate-600 p-3 rounded text-sm">
                  <strong>Key Approach:</strong> Don't just lurk. Ask thoughtful questions, answer others' questions when you can, and share useful resources. Consistent, valuable participation builds visibility.
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">2. In-Person Events</h4>
              <div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Attend regular:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Meetups</strong> - Language/framework specific groups, general tech gatherings</li>
                  <li><strong>Tech conferences</strong> - Even volunteering at these events provides networking opportunities</li>
                  <li><strong>Hackathons</strong> - Great for meeting peers and potential employers</li>
                  <li><strong>Industry seminars and workshops</strong> - Often held by companies looking to hire</li>
                </ul>
                <div className="mt-4 bg-white dark:bg-slate-600 p-3 rounded text-sm">
                  <strong>Key Approach:</strong> Arrive early, stay late, and prepare a concise introduction about your background and goals. Set a goal to have 3-5 meaningful conversations per event rather than collecting business cards.
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">3. Strategic Informational Interviews</h4>
              <div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Reach out to professionals in roles you aspire to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Identify 2nd-degree connections on LinkedIn</li>
                  <li>Send personalized connection requests explaining your career interests</li>
                  <li>Ask specific questions about their career path and experience</li>
                  <li>Request a brief (20-30 minute) coffee chat or virtual meeting</li>
                </ul>
                <div className="mt-4 bg-white dark:bg-slate-600 p-3 rounded text-sm">
                  <strong>Template:</strong> "Hi [Name], I found your profile while researching careers in [specific area]. I'm transitioning into tech with a background in [your background] and would love to learn how you navigated your path to [their role]. Would you be open to a 20-minute virtual coffee to share your insights? I'm particularly interested in [specific aspect of their career]."
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
            <h4 className="font-medium mb-2">90-Day Networking Plan</h4>
            <p className="text-slate-600 dark:text-slate-300 mb-3">
              A structured approach to building your network:
            </p>
            <div className="space-y-3">
              <p><strong>Weeks 1-4:</strong> Join 3-5 online communities and participate daily. Attend 2 local meetups. Set up LinkedIn profile and connect with former colleagues/classmates.</p>
              <p><strong>Weeks 5-8:</strong> Reach out to 5 professionals for informational interviews. Continue online participation and attend 2-3 more events. Start sharing relevant content on LinkedIn.</p>
              <p><strong>Weeks 9-12:</strong> Follow up with connections made. Attend a hackathon or volunteer at a conference. Begin asking about referral opportunities with connections you've built rapport with.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">The Art of Requesting Referrals</h3>
          
          <p className="mb-4">Asking for referrals requires tact and timing. Here's how to do it effectively:</p>
          
          <div className="space-y-5">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Build the Relationship First</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Don't ask for referrals from brand new connections. Invest time in genuine relationship building through multiple interactions before making requests.
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Research Thoroughly</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Only ask for referrals to positions that are a genuine fit for your skills and experience. Do your homework on the role and company first.
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Make a Specific, Easy Request</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Be clear about which role you're interested in and provide your updated resume and a brief paragraph about why you're qualified. Make it as easy as possible for them to refer you.
              </p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Accept Rejection Gracefully</h4>
              <p className="text-slate-600 dark:text-slate-300">
                If someone declines to refer you, thank them for considering it and maintain the relationship. They may be able to help in other ways or refer you in the future.
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Sample Referral Request</h4>
            <div className="bg-white dark:bg-slate-600 p-3 rounded text-sm">
              <p className="mb-2">Hi [Name],</p>
              <p className="mb-2">I hope you're doing well. I've really enjoyed our conversations about [relevant topic] over the past few months.</p>
              <p className="mb-2">I noticed that [Company] is hiring for a [Position], which aligns well with my experience in [relevant skills/experience]. From our discussions and my research, I believe the company culture and technical challenges would be a great fit for me.</p>
              <p className="mb-2">Would you feel comfortable referring me for this position? I understand that a referral reflects on you, so I want to assure you I would represent myself professionally throughout the process.</p>
              <p className="mb-2">I've attached my updated resume and a short summary of why I'm interested and qualified for the role to make this easier. Of course, if you don't feel comfortable, I completely understand.</p>
              <p>Thanks for considering this, and I look forward to catching up at [future event/time] regardless.</p>
              <p>Best regards,<br />[Your Name]</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['4.3'] && questions['4.3'].map(q => (
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
            onClick={() => setActiveSection('4.2')}
            className="flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <FaArrowLeft className="mr-2" /> Previous Section
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => markSectionComplete('4.3')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['4.3'] ? (
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
              onClick={() => setActiveSection('4.4')}
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Next Section <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const renderSection4_4 = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Negotiation Techniques</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Why Negotiation Matters</h3>
          <p className="mb-4">Even as a junior developer, effective negotiation can significantly impact your career trajectory:</p>
          
          <div className="mt-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Compound Effect</h4>
              <p className="text-slate-600 dark:text-slate-300">
                A $5,000 increase in your starting salary can translate to over $100,000 in additional earnings over 10 years, as each subsequent raise and job offer builds on your previous compensation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Beyond Salary</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Negotiation isn't just about base pay. Learning opportunities, flexible scheduling, additional leave, title, and role scope can all be negotiated and significantly impact your quality of life and career growth.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Setting Expectations</h4>
              <p className="text-slate-600 dark:text-slate-300">
                How you negotiate establishes your professional reputation. Approaching negotiations collaboratively rather than confrontationally shows maturity and business acumen that will serve you throughout your career.
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4">
              <FaQuestionCircle className="text-emerald-600 dark:text-emerald-300 text-xl" />
            </div>
            <p className="italic">In the Australian tech market, I've found that junior developers who negotiate appropriately typically secure 5-10% higher starting packages than those who accept initial offers.</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Salary Research Strategy</h3>
          
          <p className="mb-6">Before any negotiation, thorough research is essential. Use these sources to determine your market value:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">Industry Specific</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Hays Salary Guide (Australia)</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    The most accurate source for Australian tech salaries, broken down by experience level and location.
                  </p>
                </li>
                <li>
                  <strong>SEEK Salary Reports</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    Provides average salaries based on current job listings in Australia.
                  </p>
                </li>
                <li>
                  <strong>Tech company salary bands</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    Some companies like Atlassian and Canva publish their salary bands publicly.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-5 rounded-lg">
              <h4 className="font-medium text-lg mb-3 text-emerald-600">Crowdsourced Data</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Glassdoor & Levels.fyi</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    User-reported compensation data, filterable by company, location, and experience.
                  </p>
                </li>
                <li>
                  <strong>Reddit r/AusFinance threads</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    Regular salary sharing threads provide current data across industries.
                  </p>
                </li>
                <li>
                  <strong>LinkedIn network</strong>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    Discreetly ask peers in similar roles about salary ranges (not exact figures).
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
            <p className="font-medium mb-2">Creating Your Target Range:</p>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Based on your research, develop three key figures:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Minimum acceptable:</strong> The lowest number you'd accept (keep private)</li>
              <li><strong>Target:</strong> A realistic figure slightly above market average (10-15%)</li>
              <li><strong>Aspiration:</strong> Higher end figure to begin negotiations with (15-20% above average)</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">The Negotiation Framework</h3>
          
          <p className="mb-6">Follow this structured approach to negotiating your tech role offer:</p>
          
          <div className="space-y-5">
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">1. Express Enthusiasm First</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300">
                  Always begin by expressing genuine excitement about the opportunity. This sets a collaborative tone and reassures the employer that you're seriously interested.
                </p>
                <div className="bg-white dark:bg-slate-600 p-3 rounded mt-3 text-sm">
                  <strong>Example:</strong> "Thank you for the offer! I'm really excited about the opportunity to join [Company] and contribute to [specific project/team]. The role aligns perfectly with my background in [relevant experience]."
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">2. Ask Questions Before Negotiating</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300">
                  Gather information about the complete compensation package, performance evaluation process, and growth opportunities before discussing specific numbers.
                </p>
                <div className="bg-white dark:bg-slate-600 p-3 rounded mt-3 text-sm">
                  <strong>Questions to ask:</strong>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>"Can you tell me more about the complete compensation package, including superannuation, bonuses, and benefits?"</li>
                    <li>"How is performance evaluated, and how frequently are compensation reviews conducted?"</li>
                    <li>"What does the typical career progression look like for someone in this role?"</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">3. Anchor Higher</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300">
                  When discussing salary, begin by mentioning your aspiration figure based on your research. This establishes an anchor point for the negotiation.
                </p>
                <div className="bg-white dark:bg-slate-600 p-3 rounded mt-3 text-sm">
                  <strong>Example:</strong> "Based on my research of similar roles in the market and the value I can bring with my experience in [specific skills], I was targeting a salary in the range of $X-Y. Is there flexibility in the offered amount?"
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">4. Focus on Value, Not Need</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300">
                  Frame your negotiation around the value you'll bring to the company, not your personal financial needs. Highlight specific skills, experiences, or achievements that justify higher compensation.
                </p>
                <div className="bg-white dark:bg-slate-600 p-3 rounded mt-3 text-sm">
                  <strong>Example:</strong> "With my background in [specific technology] and experience with [relevant project type], I'm confident I can make an immediate impact on [specific company challenge]. This expertise typically commands a salary of $X in the current market."
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2 text-emerald-600">5. Consider the Total Package</h4>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-slate-600 dark:text-slate-300">
                  If there's limited flexibility on base salary, explore other valuable components of the compensation package.
                </p>
                <div className="bg-white dark:bg-slate-600 p-3 rounded mt-3 text-sm">
                  <strong>Negotiable elements:</strong>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Sign-on bonus or relocation assistance</li>
                    <li>Performance review timeline (3 months vs. 6 months)</li>
                    <li>Professional development budget</li>
                    <li>Flexible working arrangements</li>
                    <li>Additional annual leave</li>
                    <li>Equity or stock options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Handling Compensation Limitations</h3>
          
          <p className="mb-4">When a company can't meet your salary expectations, consider these strategic approaches:</p>
          
          <div className="space-y-5">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Request an Early Performance Review</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Negotiate a salary review after 3-6 months based on specific performance metrics, rather than waiting for the standard annual review.
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded mt-2 text-sm">
                <strong>Example:</strong> "I understand there are budget constraints at the moment. Would you be open to scheduling a performance and compensation review in 4 months if I meet or exceed [specific measurable goals]?"
              </div>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Explore Growth-Focused Alternatives</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Request resources that accelerate your professional development and future earning potential.
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded mt-2 text-sm">
                <strong>Example:</strong> "If there's limited flexibility on base salary, would it be possible to include a professional development budget for certifications and conferences, or dedicated time for learning and side projects?"
              </div>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Ask for Written Success Path</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Request a documented path to promotion or salary increases based on specific achievements.
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded mt-2 text-sm">
                <strong>Example:</strong> "I'm excited about growing with the company. Could we outline a clear path to [next level position] with corresponding compensation increases, including the specific milestones I would need to achieve?"
              </div>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-medium mb-2">Consider Quality of Life Benefits</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Flexible working arrangements, additional time off, or wellness benefits can significantly improve your overall compensation package.
              </p>
              <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded mt-2 text-sm">
                <strong>Example:</strong> "I value work-life balance. Would it be possible to work remotely two days per week or adjust my working hours to [preferred schedule]? This flexibility would be very valuable to me."
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
            <p className="font-medium mb-2">When to Walk Away:</p>
            <p className="text-slate-700 dark:text-slate-300">
              Sometimes the best negotiation strategy is being prepared to decline. If an offer is significantly below your researched market value (more than 15-20%) and the company shows no flexibility on salary or other components, it may indicate how they value their employees overall. Trust your research, and remember that accepting a severely undervalued position can impact your long-term earning potential.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Check Your Understanding</h3>
          
          <div className="space-y-4">
            {questions['4.4'] && questions['4.4'].map(q => (
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
          <h3 className="text-xl font-semibold mb-4">Module 4 Complete!</h3>
          <p className="mb-4">Congratulations on completing the final module of the Break Into Tech program! You now have a comprehensive toolkit for launching and advancing your tech career.</p>
          
          <div className="mt-6 bg-white dark:bg-slate-800 p-5 rounded-xl">
            <h4 className="font-semibold text-lg mb-3">Next Steps for Success:</h4>
            <ol className="list-decimal ml-5 space-y-3">
              <li>Complete your career strategy workbook to define your specific goals and path</li>
              <li>Join at least two tech communities from the directory relevant to your interests</li>
              <li>Schedule 2-3 informational interviews using the networking templates</li>
              <li>Practice your negotiation scripts with a friend to build confidence</li>
              <li>Revisit all modules as needed during your job search journey</li>
            </ol>
            
            <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
              <p className="italic">Remember, breaking into tech is a journey that requires patience and persistence. The strategies you've learned in this program have been proven effective for hundreds of career changers. Stay consistent, keep refining your approach, and success will follow.</p>
              <p className="font-medium mt-3">— Handy Hasan</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button 
            onClick={() => setActiveSection('4.3')}
            className="flex items-center text-emerald-600 hover:text-emerald-700"
          >
            <FaArrowLeft className="mr-2" /> Previous Section
          </button>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => markSectionComplete('4.4')}
              className="flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-4 py-2 rounded hover:bg-emerald-200 dark:hover:bg-emerald-800"
            >
              {completedSections['4.4'] ? (
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
        id: 'career-strategy',
        icon: <FaLightbulb className="text-emerald-600 text-xl mr-3" />,
        title: 'Career Strategy Workbook',
        description: 'A comprehensive guide to planning your tech career path with templates for setting short and long-term goals and tracking your progress.',
        downloadLink: '/downloads/career-strategy-workbook.pdf',
        linkText: 'Download Workbook'
      },
      {
        id: 'tech-community',
        icon: <FaUsers className="text-emerald-600 text-xl mr-3" />,
        title: 'Tech Community Directory',
        description: 'A curated list of Australian tech communities, meetups, and networking groups, with tips on how to make the most of each.',
        downloadLink: '/downloads/tech-community-directory.pdf',
        linkText: 'Download Directory'
      },
      {
        id: 'salary-scripts',
        icon: <FaDollarSign className="text-emerald-600 text-xl mr-3" />,
        title: 'Salary Negotiation Scripts',
        description: 'Word-for-word scripts and email templates for negotiating your salary and benefits, specifically tailored for the Australian tech industry.',
        downloadLink: '/downloads/salary-scripts.pdf',
        linkText: 'Download Scripts'
      },
      {
        id: 'networking',
        icon: <FaHandshake className="text-emerald-600 text-xl mr-3" />,
        title: 'Networking Templates & Cold Outreach',
        description: 'Templates for LinkedIn messages, cold emails, and follow-ups that have resulted in interviews and job offers in the Australian market.',
        downloadLink: '/downloads/networking-templates.pdf',
        linkText: 'Download Templates'
      }
    ];

    return (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-6">Resources & Downloads</h2>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Career Strategy Resources</h3>
          <p className="mb-6">These resources will help you implement the career strategies covered in this module. I've created these based on my experience navigating the Australian tech industry.</p>
          
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
          <h3 className="text-2xl font-bold mb-4 text-center">Course Complete!</h3>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="mb-6">
              Congratulations on completing the entire Break Into Tech course! You now have all the tools, templates, and strategies needed to launch your tech career in Australia.
            </p>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mb-6">
              <h4 className="font-semibold mb-4">Your Next Steps:</h4>
              
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Set specific weekly goals using the Career Strategy Workbook</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Join at least 2-3 communities from the Tech Community Directory</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Send 5 personalized connection requests each week using the networking templates</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Practice your salary negotiation scripts with a friend or mentor</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Return to previous modules as needed when you reach different stages of your job search</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg font-medium mb-4">
              Remember: Success in tech is about persistence, continuous learning, and strategic networking.
            </p>
            
            <p>
              I'm excited to hear about your journey and success stories. Don't forget to reach out and let me know when you land your dream role!
            </p>
            
            <div className="mt-6 p-4 bg-emerald-100 dark:bg-emerald-800/50 rounded-lg text-emerald-800 dark:text-emerald-200">
              <p className="font-medium">Have questions or need help? Email support@breakintotech.com.au</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button 
            onClick={() => setActiveSection('4.4')}
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
              href="/break-into-tech/dashboard"
              className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
            >
              Return to Dashboard <FaHome className="ml-2" />
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
              Module 4 of 4
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
              🧩 MODULE 4: Strategy, Mindset, and Career Leverage
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Strategic approaches to build your career and negotiate the best opportunities.
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
            Questions? <a href="mailto:support@example.com" className="text-emerald-400 hover:underline">Contact Support</a>
          </p>
        </div>
      </footer>
    </div>
  );
} 