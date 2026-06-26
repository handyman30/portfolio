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
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Latest
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Picking an incident management stack in 2025</h1>
            <p className="text-gray-600 mb-4">
              January 10, 2025 • 22 min read
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Most incident tooling is sold on dashboards. The dashboards are the least useful part.
            </p>

            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Detection and monitoring</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>FullStory</strong> – session replay, so you can watch what the user actually hit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>DataDog</strong> – infrastructure and application metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Sentry</strong> – errors and performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>New Relic</strong> – observability across the stack</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Alerting and response</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>OpsGenie</strong> – alerting and on-call rotations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>PagerDuty</strong> – paging and escalation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Slack/Teams</strong> – where the incident actually gets worked</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Jira Service Management</strong> – tracking and the paper trail</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              The job of an incident stack is to get one person from "a graph went red" to "I've fixed it". That's it. I've stitched these together at The Good Guys and now at 4DMedical, and most of what I learned was what to rip out. Half the tools above I've bought and later cancelled because nobody opened them during an actual incident. So this is less a recommendation than a list of what I'd keep at each size.
            </p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">The four stages, and where tools fit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-[#e6e4dd]">
                  <h3 className="font-bold text-[#1f3a5f] mb-2">1. Detection</h3>
                  <p className="text-gray-700 text-sm">Catch it from your own monitoring before the support queue does</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-[#e6e4dd]">
                  <h3 className="font-bold text-[#1f3a5f] mb-2">2. Alerting</h3>
                  <p className="text-gray-700 text-sm">Wake the right person. Not the whole team.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-[#e6e4dd]">
                  <h3 className="font-bold text-[#1f3a5f] mb-2">3. Response</h3>
                  <p className="text-gray-700 text-sm">One channel, a runbook, and a number to call when you're stuck</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-[#e6e4dd]">
                  <h3 className="font-bold text-[#1f3a5f] mb-2">4. Learning</h3>
                  <p className="text-gray-700 text-sm">A blameless post-mortem, and one thing you actually change</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What I'd reach for, by company size</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-[#e6e4dd]">
                  <h3 className="text-xl font-bold text-[#1f3a5f] mb-3">Startup (under 50 employees)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Stack</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Sentry (Error tracking)</li>
                        <li>• Vercel/Netlify monitoring</li>
                        <li>• Slack + webhook alerts</li>
                        <li>• Linear/GitHub Issues</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Monthly Cost</h4>
                      <p className="text-lg font-bold text-[#1f3a5f]">$200-500</p>
                      <p className="text-sm text-gray-600">Sentry posting to a Slack channel, and one person who reads it. Don't buy an on-call tool yet. You don't have enough alerts to need a rotation.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-[#e6e4dd]">
                  <h3 className="text-xl font-bold text-[#1f3a5f] mb-3">Scale-up (50-200 employees)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Stack</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• FullStory (User session replay)</li>
                        <li>• DataDog or New Relic (APM)</li>
                        <li>• OpsGenie (Alerting)</li>
                        <li>• Slack/Teams integration</li>
                        <li>• Jira Service Management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Monthly Cost</h4>
                      <p className="text-lg font-bold text-[#1f3a5f]">$2,000-8,000</p>
                      <p className="text-sm text-gray-600">Buy OpsGenie the first time an alert fires at 2am into a channel nobody's watching. The APM and session replay are for the bugs you can't reproduce from the ticket. DataDog will be the line item that surprises you on the invoice.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-[#e6e4dd]">
                  <h3 className="text-xl font-bold text-[#1f3a5f] mb-3">Enterprise (200+ employees)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Stack</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
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
                      <p className="text-lg font-bold text-[#1f3a5f]">$15,000-50,000+</p>
                      <p className="text-sm text-gray-600">At this size one outage sets off forty alerts across five systems. Most of this spend is grouping them back into one incident so the on-call engineer isn't reading forty pages to find the one that matters.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6 bg-gray-50 p-5 rounded-lg border border-[#e6e4dd]">
              <h4 className="font-semibold mb-3 text-[#1f3a5f]">Numbers worth watching</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-md border border-[#e6e4dd]">
                  <div className="text-2xl font-bold text-[#1f3a5f]">under 5min</div>
                  <div className="text-sm text-gray-600">Mean Time to Detection (MTTD)</div>
                </div>
                <div className="bg-white p-4 rounded-md border border-[#e6e4dd]">
                  <div className="text-2xl font-bold text-[#1f3a5f]">under 15min</div>
                  <div className="text-sm text-gray-600">Mean Time to Response (MTTR)</div>
                </div>
                <div className="bg-white p-4 rounded-md border border-[#e6e4dd]">
                  <div className="text-2xl font-bold text-[#1f3a5f]">under 2hr</div>
                  <div className="text-sm text-gray-600">Mean Time to Resolution</div>
                </div>
                <div className="bg-white p-4 rounded-md border border-[#e6e4dd]">
                  <div className="text-2xl font-bold text-[#1f3a5f]">99.9%</div>
                  <div className="text-sm text-gray-600">Target Uptime</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              Start with less than you think you need. Add a tool the week an actual incident makes you wish you'd had it, not before. The stack that works is the one a tired engineer can use at 3am without reading a wiki, and you don't find out which one that is until something breaks.
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