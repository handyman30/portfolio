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
              <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
                Latest
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Polling vs. WebSockets vs. Server Actions in React/Next.js</h1>
            <p className="text-gray-600 mb-4">
              January 8, 2025 • 16 min read
            </p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Polling</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">⏰</span>
                      <span><strong>Simple Implementation</strong> – Easy to understand and debug</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔄</span>
                      <span><strong>HTTP-based</strong> – Works with existing REST APIs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">⚡</span>
                      <span><strong>Configurable Intervals</strong> – Control update frequency</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">WebSockets</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">🚀</span>
                      <span><strong>Real-time Updates</strong> – Instant bidirectional communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">💰</span>
                      <span><strong>Efficient</strong> – Lower bandwidth after connection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">🔄</span>
                      <span><strong>Persistent Connection</strong> – No repeated handshakes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Server Actions</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">⚡</span>
                      <span><strong>Next.js Native</strong> – Built-in server-side execution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">🎯</span>
                      <span><strong>Type Safety</strong> – End-to-end TypeScript support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">🔄</span>
                      <span><strong>Progressive Enhancement</strong> – Works without JavaScript</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Choosing the right data synchronization strategy can make or break your user experience. After building real-time features for applications serving millions of users, I've learned when to use polling, WebSockets, or Next.js Server Actions. Each approach has its sweet spot—let's explore them with practical examples.
            </p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">When to Use Each Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Use Polling For:</h3>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li>• Dashboard metrics (5-30 second updates)</li>
                    <li>• Background job status checking</li>
                    <li>• Simple notifications</li>
                    <li>• When WebSocket infrastructure isn't available</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Use WebSockets For:</h3>
                  <ul className="text-sm text-green-800 space-y-2">
                    <li>• Live chat applications</li>
                    <li>• Real-time collaboration (like Figma)</li>
                    <li>• Live sports scores/trading data</li>
                    <li>• Multiplayer games</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Use Server Actions For:</h3>
                  <ul className="text-sm text-purple-800 space-y-2">
                    <li>• Form submissions with validation</li>
                    <li>• CRUD operations in Next.js</li>
                    <li>• User interactions (likes, follows)</li>
                    <li>• Progressive enhancement scenarios</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-6 bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h4 className="font-semibold mb-3 text-purple-900">Performance Comparison</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md">
                  <h5 className="font-bold text-blue-600 mb-2">Polling</h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Latency: 2.5-15s avg</div>
                    <div>Bandwidth: High (repeated requests)</div>
                    <div>Battery: Moderate impact</div>
                    <div>Complexity: Low</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md">
                  <h5 className="font-bold text-green-600 mb-2">WebSockets</h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Latency: under 50ms real-time</div>
                    <div>Bandwidth: Low (after setup)</div>
                    <div>Battery: Higher impact</div>
                    <div>Complexity: High</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md">
                  <h5 className="font-bold text-purple-600 mb-2">Server Actions</h5>
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
              The best approach depends on your specific use case. For dashboard updates, smart polling works great. For real-time collaboration, WebSockets are essential. For form interactions in Next.js, Server Actions provide the best developer experience with built-in optimizations.
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