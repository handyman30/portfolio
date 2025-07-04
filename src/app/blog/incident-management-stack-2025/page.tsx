'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function IncidentManagementStackBlog() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-gray-900">Handy Hasan</Link>
          <div className="flex space-x-6">
            <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</Link>
            <a href="/#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <Link href="/break-into-tech" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">Course</Link>
            <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Blog Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center mb-4 gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                DevOps
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Incident Management
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Monitoring
              </span>
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                Latest
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Choosing the Right Incident Management Stack in 2025: From FullStory to OpsGenie</h1>
            <p className="text-gray-600 mb-4">
              January 10, 2025 • 22 min read
            </p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Detection & Monitoring</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">🔍</span>
                      <span><strong>FullStory</strong> – User session replay and error tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">📊</span>
                      <span><strong>DataDog</strong> – Infrastructure and application monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">⚡</span>
                      <span><strong>Sentry</strong> – Error tracking and performance monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">🎯</span>
                      <span><strong>New Relic</strong> – Full-stack observability</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Alerting & Response</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">🚨</span>
                      <span><strong>OpsGenie</strong> – Advanced alerting and on-call management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">📱</span>
                      <span><strong>PagerDuty</strong> – Incident response orchestration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">💬</span>
                      <span><strong>Slack/Teams</strong> – Communication and collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">📝</span>
                      <span><strong>Jira Service Management</strong> – Incident tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Building a robust incident management stack isn't just about picking the latest tools—it's about creating a seamless flow from detection to resolution. After implementing incident management systems for companies processing millions of daily transactions, I've learned what works, what doesn't, and how to choose the right stack for your scale and budget.
            </p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">The Four Pillars of Modern Incident Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">1. Detection</h3>
                  <p className="text-blue-800 text-sm">Proactive monitoring and anomaly detection before users notice issues</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="font-bold text-yellow-900 mb-2">2. Alerting</h3>
                  <p className="text-yellow-800 text-sm">Intelligent routing to the right people at the right time</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-2">3. Response</h3>
                  <p className="text-orange-800 text-sm">Coordinated response with clear runbooks and escalation</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">4. Learning</h3>
                  <p className="text-green-800 text-sm">Post-mortem analysis and continuous improvement</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2025 Stack Recommendations by Company Size</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Startup (under 50 employees)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Stack</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Sentry (Error tracking)</li>
                        <li>• Vercel/Netlify monitoring</li>
                        <li>• Slack + webhook alerts</li>
                        <li>• Linear/GitHub Issues</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Monthly Cost</h4>
                      <p className="text-lg font-bold text-green-700">$200-500</p>
                      <p className="text-sm text-green-600">Focus on simplicity and getting alerts to the right people fast</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Scale-up (50-200 employees)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Stack</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• FullStory (User session replay)</li>
                        <li>• DataDog or New Relic (APM)</li>
                        <li>• OpsGenie (Alerting)</li>
                        <li>• Slack/Teams integration</li>
                        <li>• Jira Service Management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Monthly Cost</h4>
                      <p className="text-lg font-bold text-blue-700">$2,000-8,000</p>
                      <p className="text-sm text-blue-600">Investment in proactive monitoring and user experience visibility</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Enterprise (200+ employees)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Stack</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• FullStory + Custom analytics</li>
                        <li>• DataDog/New Relic + Prometheus</li>
                        <li>• PagerDuty + OpsGenie</li>
                        <li>• Custom ChatOps integration</li>
                        <li>• ServiceNow or custom ITSM</li>
                        <li>• Incident.io for coordination</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Monthly Cost</h4>
                      <p className="text-lg font-bold text-purple-700">$15,000-50,000+</p>
                      <p className="text-sm text-purple-600">Full observability with advanced correlation and automation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6 bg-red-50 p-5 rounded-lg border border-red-200">
              <h4 className="font-semibold mb-3 text-red-900">Incident Management KPIs to Track</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-md">
                  <div className="text-2xl font-bold text-red-600">under 5min</div>
                  <div className="text-sm text-gray-600">Mean Time to Detection (MTTD)</div>
                </div>
                <div className="bg-white p-4 rounded-md">
                  <div className="text-2xl font-bold text-red-600">under 15min</div>
                  <div className="text-sm text-gray-600">Mean Time to Response (MTTR)</div>
                </div>
                <div className="bg-white p-4 rounded-md">
                  <div className="text-2xl font-bold text-red-600">under 2hr</div>
                  <div className="text-sm text-gray-600">Mean Time to Resolution</div>
                </div>
                <div className="bg-white p-4 rounded-md">
                  <div className="text-2xl font-bold text-red-600">99.9%</div>
                  <div className="text-sm text-gray-600">Target Uptime</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              The best incident management stack is the one your team actually uses. Start simple, measure everything, and evolve your stack as you scale. Remember: the goal isn't to prevent all incidents—it's to detect, respond, and learn from them faster than your competition.
            </p>
            
            {/* Back to Blog Link */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                href="/#blog"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                ← Back to All Posts
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Handy Hasan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 