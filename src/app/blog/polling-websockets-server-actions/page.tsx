'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function PollingWebSocketsServerActionsBlog() {
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
                React
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Real-time Data
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Latest
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Polling vs. WebSockets vs. Server Actions</h1>
            <p className="text-gray-600 mb-4">
              January 8, 2025 • 16 min read
            </p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Polling</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Easy to debug</strong> – it's just a request on a timer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>HTTP-based</strong> – works with the REST APIs you already have</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Wasteful</strong> – most requests come back saying nothing changed</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">WebSockets</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Instant, both directions</strong> – the server can push</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Cheap once open</strong> – no per-message handshake</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>You now own a connection</strong> – reconnects, dropped sockets, scaling</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Server Actions</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Next.js native</strong> – no API route to wire up</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Typed end to end</strong> – the call and the handler share types</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Not for live data</strong> – it's request/response, you call it</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Three ways to keep a React UI in sync with the server. I've shipped all three, and the thing I keep running into is teams reaching for WebSockets because real-time sounds better, then spending a sprint on reconnect logic for a dashboard that updates every ten seconds. Polling would have been a fetch in a setInterval. Here's how I pick.
            </p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">When to Use Each Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-[#e6e4dd]">
                  <h3 className="text-xl font-bold text-[#1f3a5f] mb-3">Use Polling For:</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Dashboard metrics (5-30 second updates)</li>
                    <li>• Background job status checking</li>
                    <li>• Simple notifications</li>
                    <li>• When WebSocket infrastructure isn't available</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-[#e6e4dd]">
                  <h3 className="text-xl font-bold text-[#1f3a5f] mb-3">Use WebSockets For:</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Live chat applications</li>
                    <li>• Real-time collaboration (like Figma)</li>
                    <li>• Live sports scores/trading data</li>
                    <li>• Multiplayer games</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-[#e6e4dd]">
                  <h3 className="text-xl font-bold text-[#1f3a5f] mb-3">Use Server Actions For:</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Form submissions with validation</li>
                    <li>• CRUD operations in Next.js</li>
                    <li>• User interactions (likes, follows)</li>
                    <li>• Progressive enhancement scenarios</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-6 bg-gray-50 p-5 rounded-lg border border-[#e6e4dd]">
              <h4 className="font-semibold mb-3 text-[#1f3a5f]">Performance Comparison</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md border border-[#e6e4dd]">
                  <h5 className="font-bold text-[#1f3a5f] mb-2">Polling</h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Latency: 2.5-15s avg</div>
                    <div>Bandwidth: High (repeated requests)</div>
                    <div>Battery: Moderate impact</div>
                    <div>Complexity: Low</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md border border-[#e6e4dd]">
                  <h5 className="font-bold text-[#1f3a5f] mb-2">WebSockets</h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Latency: under 50ms real-time</div>
                    <div>Bandwidth: Low (after setup)</div>
                    <div>Battery: Higher impact</div>
                    <div>Complexity: High</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md border border-[#e6e4dd]">
                  <h5 className="font-bold text-[#1f3a5f] mb-2">Server Actions</h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Latency: Request-based</div>
                    <div>Bandwidth: Optimized</div>
                    <div>Battery: Low impact</div>
                    <div>Complexity: Low-Medium</div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              My rule of thumb: start with polling. If the lag genuinely hurts the feature and you've measured it, move that one feature to a socket. Forms stay on Server Actions. I've never regretted starting with the boring option, and I have regretted the other way round, when the socket layer became the thing that paged me at the weekend.
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