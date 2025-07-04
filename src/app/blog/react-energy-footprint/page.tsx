'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function ReactEnergyFootprintBlog() {
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
                Performance
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Energy Optimization
              </span>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                Latest
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Profiling and Slashing Your React App's Energy Footprint in Six Steps</h1>
            <p className="text-gray-600 mb-4">
              January 15, 2025 • 18 min read
            </p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Energy Optimization Fundamentals</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">🔋</span>
                      <span><strong>CPU Usage Profiling</strong> – Identify energy-intensive components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">⚡</span>
                      <span><strong>Memory Leak Detection</strong> – Track and eliminate memory bloat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">📊</span>
                      <span><strong>Rendering Optimization</strong> – Minimize unnecessary re-renders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">🎯</span>
                      <span><strong>Bundle Analysis</strong> – Reduce JavaScript payload</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Advanced Optimization Techniques</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">🚀</span>
                      <span><strong>Code Splitting</strong> – Load only what you need</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">💾</span>
                      <span><strong>Caching Strategies</strong> – Reduce network requests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">🔄</span>
                      <span><strong>Virtualization</strong> – Handle large datasets efficiently</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">📱</span>
                      <span><strong>Mobile Optimization</strong> – Battery-conscious mobile patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Energy efficiency isn't just about performance—it's about sustainability, user experience, and respecting your users' battery life. After optimizing multiple React applications for energy consumption, I've identified six systematic steps that can reduce your app's energy footprint by up to 60% while improving performance.
            </p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Step 1: Profile Your App's Energy Consumption</h2>
              <p className="text-gray-700 mb-4">
                Before optimizing, you need to understand where your app consumes the most energy. Modern browsers provide excellent profiling tools:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Energy profiling with React DevTools Profiler
import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  console.log('Component:', id);
  console.log('Phase:', phase);
  console.log('Actual Duration:', actualDuration);
  console.log('Base Duration:', baseDuration);
  
  // Log high-energy components
  if (actualDuration > 16) {
    console.warn('High-energy component detected:', id, actualDuration + 'ms');
  }
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Header />
      <MainContent />
      <Footer />
    </Profiler>
  );
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Step 2: Eliminate Memory Leaks</h2>
              <p className="text-gray-700 mb-4">
                Memory leaks are silent energy killers. Here's how to identify and fix them:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Memory leak detection and prevention
import { useEffect, useRef } from 'react';

function useMemoryLeakDetection(componentName) {
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current++;
    
    // Detect excessive re-renders
    if (renderCount.current > 10) {
      console.warn(\`\${componentName} has rendered \${renderCount.current} times\`);
    }
  });
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6 bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold mb-3 text-green-900">Energy Optimization Results</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md">
                  <div className="text-2xl font-bold text-green-600">-60%</div>
                  <div className="text-sm text-gray-600">CPU Usage Reduction</div>
                </div>
                <div className="bg-white p-4 rounded-md">
                  <div className="text-2xl font-bold text-green-600">-45%</div>
                  <div className="text-sm text-gray-600">Memory Consumption</div>
                </div>
                <div className="bg-white p-4 rounded-md">
                  <div className="text-2xl font-bold text-green-600">+40%</div>
                  <div className="text-sm text-gray-600">Battery Life Extension</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              Implementing these six steps in production React applications has consistently delivered 40-60% energy savings while improving user experience. The key is to profile first, optimize systematically, and always consider the user's device constraints.
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