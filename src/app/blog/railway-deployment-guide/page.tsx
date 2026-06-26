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
                Deployment
              </span>
              <span className="px-3 py-1 bg-[#1f3a5f] text-white rounded-full text-sm">
                Railway
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Shipping on Railway with Postgres and Git</h1>
            <p className="text-gray-600 mb-4">April 18, 2024 • 14 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">What Railway gets right</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span><strong>Fast deploys</strong> – Git push to a live URL in under a minute most days</span>
                    </li>
                    <li className="flex items-start">
                      <span><strong>Postgres in one command</strong> – No separate database account to set up</span>
                    </li>
                    <li className="flex items-start">
                      <span><strong>Sensible defaults</strong> – It detects the framework and builds it without a config file</span>
                    </li>
                    <li className="flex items-start">
                      <span><strong>TLS and a domain</strong> – Handled for you, which is one less thing to forget</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Things I've shipped on it</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span><strong>Recruiter Copilot AI</strong> – Django + React + PostgreSQL</span>
                    </li>
                    <li className="flex items-start">
                      <span><strong>EssentialsDash</strong> – A product discovery side project</span>
                    </li>
                    <li className="flex items-start">
                      <span><strong>LifeGPT</strong> – A reflection app wired up to the OpenAI API</span>
                    </li>
                    <li className="flex items-start">
                      <span><strong>20+ projects</strong> – All on the same workflow</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I avoided Railway for ages because I assumed it'd be another toy PaaS. It isn't. I'd been writing Dockerfiles and fighting AWS for side projects that didn't need either, and the friction was enough that I stopped shipping them. Railway reads your repo, guesses the framework, and builds it. Usually it guesses right. I've put 20-odd projects through it now, and the workflow below is the one I keep coming back to.
            </p>
            
            <div className="mb-6 bg-[#fbfbf9] p-5 rounded-lg border border-[#e6e4dd]">
              <h4 className="font-semibold mb-3 text-[#1f3a5f]">What I used to do vs what I do now</h4>
              <div className="bg-white p-4 rounded-md mb-4 border border-[#e6e4dd]">
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-[#e6e4dd] rounded-md p-3 bg-[#fbfbf9]">
                      <strong>AWS / Docker</strong><br/>
                      <span className="text-xs">• Write the Dockerfile<br/>• Stand up a database by hand<br/>• Wire up the pipeline<br/>• An afternoon, if it goes well</span>
                    </div>
                    <div className="border border-[#e6e4dd] rounded-md p-3 bg-[#fbfbf9]">
                      <strong>Railway</strong><br/>
                      <span className="text-xs">• Git push<br/>• <code>railway add postgresql</code><br/>• Pipeline's already there<br/>• Live in under a minute</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                For a side project this is the difference between shipping it on a Sunday and not shipping it at all. For real production I'd still reach for more control, but most things aren't real production.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Setting it up</h4>
              <p className="text-gray-700 mb-4">
                Railway reads your repo and figures out the framework on its own, so most of this is just glue. Here's the sequence I run for a new project:
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
              It's not magic and it's not for everything. The build minutes add up if you leave a service running idle, and the logging is fine until you actually need to debug something, at which point you'll wish for more. But for getting a thing from my laptop onto a URL someone else can open, nothing else I've used gets out of the way this fast. That's the whole pitch.
            </p>
            
            {/* Back to Blog Link */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/#writing"
                className="inline-flex items-center text-[#1f3a5f] hover:opacity-70 font-medium transition-colors"
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