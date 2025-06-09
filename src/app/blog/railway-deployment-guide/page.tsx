'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function RailwayDeploymentBlog() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-gray-900">Handy Hasan</Link>
          <div className="flex space-x-6">
            <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
            <Link href="/business" className="text-gray-900 hover:text-gray-700 font-medium transition-colors">Business</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
            <Link href="/break-into-tech" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">Course</Link>
            <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
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
                Deployment
              </span>
              <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
                Railway
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Railway Deployment Made Easy: PostgreSQL + Git Integration for Production Apps</h1>
            <p className="text-gray-600 mb-4">April 18, 2024 • 14 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Railway Advantages</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">🚀</span>
                      <span><strong>Sub-30s Deployments</strong> – From git push to live application</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">🗄️</span>
                      <span><strong>Built-in PostgreSQL</strong> – No external database setup required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">🔧</span>
                      <span><strong>Zero Config</strong> – Automatic framework detection and builds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">🌐</span>
                      <span><strong>Global CDN</strong> – Edge deployment for optimal performance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Production Projects Deployed</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">🤖</span>
                      <span><strong>Recruiter Copilot AI</strong> – Django + React + PostgreSQL</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">🛍️</span>
                      <span><strong>EssentialsDash</strong> – Product discovery platform</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">🧠</span>
                      <span><strong>LifeGPT</strong> – AI reflection buddy with OpenAI integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">📊</span>
                      <span><strong>20+ Projects</strong> – Consistent deployment success</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Deployment shouldn't be the hard part of building software. After struggling with AWS, Heroku pricing, and complex Docker configurations, I discovered Railway—a platform that combines simplicity with production-grade power. Here's how Railway became my go-to deployment platform for rapid prototyping and production applications, with real examples from 20+ successful projects.
            </p>
            
            <div className="mb-6 bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h4 className="font-semibold mb-3 text-purple-900">Railway vs Traditional Deployment</h4>
              <div className="bg-white p-4 rounded-md mb-4">
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-red-300 rounded-md p-3 bg-red-50">
                      <strong>Traditional AWS/Docker</strong><br/>
                      <span className="text-xs">• Complex configurations<br/>• Manual database setup<br/>• CI/CD pipeline setup<br/>• 2-4 hours deployment</span>
                    </div>
                    <div className="border border-green-300 rounded-md p-3 bg-green-50">
                      <strong>Railway Solution</strong><br/>
                      <span className="text-xs">• Git-based auto-deploy<br/>• One-click PostgreSQL<br/>• Built-in CI/CD<br/>• 30 seconds deployment</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-purple-800 text-sm">
                Railway eliminates infrastructure complexity while maintaining production-grade reliability.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Project Setup & Configuration</h4>
              <p className="text-gray-700 mb-4">
                Railway's magic lies in its intelligent project detection and zero-config deployment. Here's how to set up a production-ready application:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`# 1. Initialize Railway project
npm install -g @railway/cli
railway login
railway init

# 2. Link GitHub repository
railway connect

# 3. Add PostgreSQL database (one command!)
railway add postgresql

# 4. Configure environment variables
railway variables set NODE_ENV=production
railway variables set DATABASE_URL=\${{PGHOST}}:\${{PGPORT}}/\${{PGDATABASE}}
railway variables set SECRET_KEY=your-secret-key

# 5. Deploy with git push
git add .
git commit -m "Initial deployment"
git push origin main

# Railway automatically:
# - Detects your framework (React, Django, Express, etc.)
# - Builds your application
# - Sets up SSL certificate
# - Deploys to global CDN
# - Provides custom domain`}
                </pre>
              </div>
            </div>

            <p className="text-gray-600 mb-6 italic">
              Railway transformed how I think about deployment. What used to take hours of AWS configuration now takes minutes. The platform handles infrastructure complexity while giving you the power and flexibility needed for production applications.
            </p>
            
            {/* Back to Blog Link */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                href="/blog"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
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