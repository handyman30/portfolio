'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, fadeInFromRight, staggerContainer, highlightVariant, TypeAnimation } from "./AnimatedComponents";
import { useEffect, useState } from "react";
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';
import { fadeInFromLeft } from '@/lib/animations';
import Link from 'next/link';

export default function Home() {
  const [baseUrl, setBaseUrl] = useState('');
  
  useEffect(() => {
    // Set the base URL only on the client side
    setBaseUrl(window.location.origin);
    
    // Check for hash in URL and scroll to that section if present
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Blog post paths for sharing
  const blogPaths = {
    payments: '/blog/beyond-stripe',
    medical: '/blog/medical-imaging',
    hangtime: '/blog/hangtime-app',
    ecommerce: '/blog/aussie-ecommerce-asia',
    observability: '/blog/ecommerce-observability',
    microservices: '/blog/monolith-to-microservices'
  };
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
      {/* Sticky CTA */}
      <div className="fixed right-8 top-24 z-50 hidden md:block">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer flex items-center gap-2 pr-4 group"
          onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <motion.span 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.3 }}
            className="font-bold whitespace-nowrap overflow-hidden"
          >
            Read Latest Blog
          </motion.span>
        </motion.div>
      </div>

      {/* Header/Navigation */}
      <header className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-gray-900">Handy Hasan</div>
          <div className="flex space-x-6">
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
            <a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <Link href="/break-into-tech" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">Course</Link>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="w-full flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeIn}
              className="text-lg text-gray-600 mb-2"
            >
              Hello, I&apos;m
            </motion.span>
            <motion.h1 
              variants={fadeIn}
              className="text-5xl font-bold mb-4 text-gray-900"
            >
              Handy Hasan
            </motion.h1>
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap items-center justify-center gap-3 mb-6"
            >
              <h2 className="text-2xl text-gray-700">Full-Stack Software Engineer</h2>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="mb-8 max-w-2xl"
            >
              <TypeAnimation 
                text="👋 Hi! I'm Handy — a passionate Software Engineer specializing in Full-Stack Web and Mobile Development." 
                className="text-lg text-gray-600"
              />
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap space-x-0 sm:space-x-4 gap-4 sm:gap-0"
            >
              <a 
                href="#contact" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Hire Me
              </a>
              <a 
                href="#blog" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                Read My Blog
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v9.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 12.586V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </a>
              <Link 
                href="/projects" 
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg transition-colors"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Animated Skills Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="py-8 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {["JavaScript", "TypeScript", "React", "NextJS", "Python", "AWS", "PostgreSQL", "Docker"].map((skill, index) => (
              <motion.div
                key={skill}
                variants={highlightVariant}
                className="px-5 py-2 bg-white text-gray-700 rounded-full font-medium shadow-sm border border-gray-200"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgb(249, 250, 251)",
                  borderColor: "rgb(209, 213, 219)" 
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
            ></motion.div>
            
            <div className="space-y-0">
              {/* 4DMedical */}
              <motion.div 
                className="flex flex-col md:flex-row md:items-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:order-1">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 md:ml-8 relative">
                    <motion.div 
                      className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    ></motion.div>
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Software Engineer</h3>
                      <div className="text-gray-600">Oct 2021 - Mar 2025</div>
                    </div>
                    <div className="text-gray-700 mb-2">4DMedical (ASX: 4DX)</div>
                    <p className="text-gray-600 mb-4">
                      Led the development of critical components for 4DMedical's lung imaging platform, processing 1GB+ DICOM files from CT scans. Built a scalable architecture handling 3,290+ daily scans across clinics with pub/sub messaging for reliable data flow.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 mb-4">
                      <h4 className="font-semibold mb-3 text-gray-900">Technical Architecture Highlights</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span>Designed pub/sub system processing 1GB+ DICOM files from CT scans</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span>Built metadata extraction service that feeds proprietary algorithms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span>Implemented bidirectional conversion between DICOM and analysis metadata</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span>Created reporting system for clinicians with 10x improved diagnostic accuracy</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* 4DMedical News Link Preview */}
                    <a href="https://www.health.gov.au/ministers/the-hon-greg-hunt-mp/media/worlds-first-lung-scanner-to-change-millions-of-lives" 
                      target="_blank" rel="noopener noreferrer" 
                      className="block mt-4 overflow-hidden rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/3 bg-white h-32 sm:h-auto relative">
                          <Image
                            src="https://alhi.com.au/wp-content/uploads/2020/05/4DMedical_Logo_RGB-2.png"
                            alt="4DMedical Logo"
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <div className="w-full sm:w-2/3 p-4">
                          <h4 className="font-semibold text-gray-900">World&apos;s first lung scanner to change millions of lives</h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            Revolutionary lung imaging technology developed by 4DMedical is set to transform respiratory diagnostics and treatment globally.
                          </p>
                          <div className="text-xs text-gray-500 mt-2">health.gov.au</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <motion.div 
                  className="md:w-1/2 md:pl-16 flex justify-center md:justify-end md:order-0"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="bg-gray-50 p-4 rounded-lg shadow-inner w-full max-w-md border border-gray-200">
                    <h4 className="font-semibold mb-3 text-lg text-gray-900">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">Python</span>
                      <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">React</span>
                      <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">TypeScript</span>
                      <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">AWS</span>
                      <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">TensorFlow</span>
                      <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">DICOM</span>
                      <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">Docker</span>
                      <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200">CI/CD</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* The Good Guys */}
              <motion.div 
                className="flex flex-col md:flex-row md:items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 md:ml-auto md:mr-8 relative">
                    <motion.div 
                      className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    ></motion.div>
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Software Developer</h3>
                      <div className="text-gray-600">Oct 2019 - Oct 2021</div>
                    </div>
                    <div className="text-gray-700 mb-2">The Good Guys (JB Hi-Fi Group, ASX: JBH)</div>
                    <p className="text-gray-600 mb-4">
                      Developed and maintained e-commerce platform features, ensuring seamless customer experiences across web and mobile interfaces. Implemented key features such as product catalog enhancements, checkout flow improvements, and dynamic pricing logic.
                    </p>
                    
                    {/* The Good Guys Link Preview */}
                    <a href="https://www.nationalretail.org.au/jb-hi-fi-buys-the-good-guys/" 
                      target="_blank" rel="noopener noreferrer" 
                      className="block mt-4 overflow-hidden rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/3 bg-white h-32 sm:h-auto relative">
                          <Image
                            src="https://www.nationalproductreview.com.au/wp-content/uploads/TGG_DesktopBanner.jpg.optimal.jpg"
                            alt="The Good Guys Logo"
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <div className="w-full sm:w-2/3 p-4">
                          <h4 className="font-semibold text-gray-900">JB Hi-Fi buys The Good Guys</h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            JB Hi-Fi placed a bid believed to be worth $870 million to acquire the 101-store Good Guys network, boosting their total store count to 295 across Australia and New Zealand.
                          </p>
                          <div className="text-xs text-gray-500 mt-2">nationalretail.org.au</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <motion.div 
                  className="md:w-1/2 md:pl-16 flex justify-center md:justify-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="bg-gray-50 p-4 rounded-lg shadow-inner w-full max-w-md border border-gray-200">
                    <h4 className="font-semibold mb-3 text-lg text-gray-900">Achievements</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Reduced page load times by 35% through optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Implemented real-time inventory tracking system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Developed mobile-optimized checkout experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Improved A/B testing framework for product pages</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Personal Apps
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hangtime Melbourne */}
            <motion.a 
              href="https://apps.apple.com/au/app/hangtime-basketball/id6450975691" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-48 bg-white relative">
                <Image
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/60/d7/86/60d78611-8a19-5e58-02e0-c636059f564c/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp"
                  alt="Hangtime Basketball App Icon"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Hangtime Melbourne</h3>
                <p className="text-gray-600 mb-4">
                  A mobile app connecting local basketball players and creating social sport opportunities. Used by more than 10,000+ Melbourne residents.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 hover:text-gray-800 transition-colors">
                    App Store
                  </span>
                  <span className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                    10,000+ Users
                  </span>
                </div>
              </div>
            </motion.a>
            
            {/* Recruiter Copilot AI */}
            <motion.a 
              href="https://recruiter-copilot-ai-production.up.railway.app/dashboard" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-48 bg-white relative">
                <Image
                  src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Recruiter Copilot AI Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Recruiter Copilot AI</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered recruitment dashboard that streamlines the hiring process with intelligent candidate matching, automated screening, and data-driven insights for HR teams.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 hover:text-gray-800 transition-colors">
                    View Dashboard
                  </span>
                  <span className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                    AI-Powered
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Thoughts, insights, and technical explorations based on my experience in the industry.
          </motion.p>
          
          {/* Blog Posts Grid - Reversed order with newest first */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Microservices Post */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -5 }}
              id="blog-microservices"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center mb-4 gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    E-commerce
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    Architecture
                  </span>
                  <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm">
                    Latest
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">From Monolith to Microservices: How E-Commerce Platforms Evolve at Scale</h3>
                <p className="text-gray-600 mb-4">
                  April 25, 2024 • 8 min read
                </p>
                
                <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Typical E-commerce Services</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🛒</span>
                          <span><strong>Cart service</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">💳</span>
                          <span><strong>Payment gateway</strong> abstraction service</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🧾</span>
                          <span><strong>Order management</strong> service</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">📦</span>
                          <span><strong>Inventory</strong> service</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🎁</span>
                          <span><strong>Promotions/loyalty</strong> engine</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Microservice Challenges</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🔐</span>
                          <span><strong>Complex auth</strong> across services</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">📡</span>
                          <span><strong>Network latency</strong> and retry handling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🧩</span>
                          <span><strong>Data duplication</strong> and syncing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">📊</span>
                          <span><strong>Observability</strong> across distributed traces</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🚨</span>
                          <span><strong>Coordination</strong> between teams</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Most e-commerce platforms start with a monolith — and for good reason. It&apos;s fast to build, easy to deploy, and keeps everything in one place. But as scale, complexity, and team size grow, cracks start to appear. That&apos;s where the shift to microservices becomes not just a tech choice, but a product-enabling strategy.
                </p>
                
                <div className="mb-6 bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold mb-3 text-gray-900">Netflix Case Study</h4>
                  <p className="text-gray-700 mb-4">
                    Netflix was one of the first major tech companies to go all-in on microservices. After suffering a major outage in 2008 that brought down their DVD rental and streaming services, they began breaking apart their monolithic architecture. What followed was a complete transformation:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📦</span>
                      <span>Each team became responsible for a specific service — like content recommendation, billing, or user accounts.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">🔁</span>
                      <span>Services communicated through APIs and a robust messaging system.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">🧠</span>
                      <span>They built smart infrastructure (like Hystrix and Eureka) to manage service discovery, fault tolerance, and fallback mechanisms.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">🚀</span>
                      <span>This enabled Netflix to scale globally, stream to millions of users, and deploy hundreds of updates per day.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-gray-900">When to Consider Microservices</h4>
                  <p className="text-gray-700 mb-4">
                    Look for signs like:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Teams blocked by unrelated code changes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Feature velocity slows down</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Deploys are risky or infrequent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Scaling becomes expensive or inefficient</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  Moving from a monolith to microservices isn&apos;t about chasing trends — it&apos;s about unlocking product velocity while keeping systems reliable and teams autonomous.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Share:</span>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.microservices : '')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on LinkedIn"
                      id="share-linkedin-microservices"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl + blogPaths.microservices)}`,
                            'linkedin-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
          </a>
          <a
                      href={`https://twitter.com/intent/tweet?text=From Monolith to Microservices: How E-Commerce Platforms Evolve at Scale&url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.microservices : '')}`}
            target="_blank"
            rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on Twitter"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://twitter.com/intent/tweet?text=From Monolith to Microservices: How E-Commerce Platforms Evolve at Scale&url=${encodeURIComponent(baseUrl + blogPaths.microservices)}`,
                            'twitter-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
          </a>
        </div>
                </div>
              </div>
            </motion.div>
            
            {/* Observability Post */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -5 }}
              id="blog-observability"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center mb-4 gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    E-commerce
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    DevOps
                  </span>
                  <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm">
                    New
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">The Invisible Layer of E-Commerce: Observability, Alerting, and Real-Time Feedback</h3>
                <p className="text-gray-600 mb-4">
                  April 22, 2024 • 7 min read
                </p>
                
                <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Monitoring Areas</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">💳</span>
                          <span><strong>Checkout & Payments</strong> – Success rates, failures</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🛒</span>
                          <span><strong>Cart & Funnel</strong> – Abandonment, conversion drops</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🚀</span>
                          <span><strong>Performance</strong> – Page load, API response time</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">📦</span>
                          <span><strong>Inventory</strong> – Availability mismatches, fulfillment</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Effective Feedback Loop</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span><strong>Instrumentation first</strong> – Metrics and structured logging</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span><strong>Outcome-based alerts</strong> – Focus on business impact</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span><strong>Domain dashboards</strong> – Per team or feature area</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span><strong>Automated recovery</strong> – Feature flags, circuit breakers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  E-commerce platforms live and die by the experience they deliver in real time. A few seconds of latency, a failed payment flow, or a sudden drop in checkout conversions can cost millions. That&apos;s why building great features isn&apos;t enough — you need an invisible layer of observability that helps you catch issues before customers feel them.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">What Is Observability in E-Commerce?</h4>
                  <p className="text-gray-700 mb-4">
                    It&apos;s more than logs and dashboards. Observability is about answering the question: <em>&quot;Is everything working as expected — for users, business, and systems — right now?&quot;</em>
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Metrics</strong> – Page load times, API latency, conversion rate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Logs</strong> – System activity, failures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Traces</strong> – What happened between service A and B</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Events</strong> – User actions, product clicks, etc.</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Real-time alerting is not just about catching errors — it&apos;s about defending trust and experience. Questions like &quot;Why are iOS users suddenly dropping off after the payment step?&quot; or &quot;Why did conversion rate drop 20% in the last hour in NSW only?&quot; become answerable with the right observability system in place.
                </p>
                
                <p className="text-gray-600 mb-6 italic">
                  In a high-volume e-commerce environment, proactive observability is not a luxury — it&apos;s a competitive advantage. It&apos;s what allows teams to move fast, break fewer things, and catch what actually matters.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Share:</span>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.observability : '')}`}
          target="_blank"
          rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on LinkedIn"
                      id="share-linkedin-observability"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl + blogPaths.observability)}`,
                            'linkedin-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?text=The Invisible Layer of E-Commerce: Observability, Alerting, and Real-Time Feedback&url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.observability : '')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on Twitter"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://twitter.com/intent/tweet?text=The Invisible Layer of E-Commerce: Observability, Alerting, and Real-Time Feedback&url=${encodeURIComponent(baseUrl + blogPaths.observability)}`,
                            'twitter-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* E-commerce from Asia Post */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ y: -5 }}
              id="blog-aussie-ecommerce"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center mb-4 gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    E-commerce
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    UX Design
                  </span>
                  <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm">
                    Latest
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">What Aussie E-Commerce Can Learn from Asia&apos;s Tech Titans</h3>
                <p className="text-gray-600 mb-4">
                  April 12, 2024 • 8 min read
                </p>
                
                <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Asian UX Innovations</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🧩</span>
                          <span><strong>Gamification:</strong> Daily check-ins, vouchers, in-app games</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">⚡</span>
                          <span><strong>Speed and Feedback:</strong> Mobile-first, lightning-fast interfaces</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🎯</span>
                          <span><strong>Personalization:</strong> Dynamic product feeds and bundles</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">📱</span>
                          <span><strong>App-first Mentality:</strong> Optimized for mobile, low-bandwidth</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Market Acquisition Tactics</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">💰</span>
                          <span><strong>Subsidies:</strong> Vouchers, free shipping, cashback</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">📦</span>
                          <span><strong>Free Returns:</strong> Reducing friction for uncertain buyers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🤝</span>
                          <span><strong>Influencers:</strong> Real-time product demos and livestreams</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-2">🌏</span>
                          <span><strong>Localization:</strong> Market-specific strategies and content</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The e-commerce space in Australia is growing, but when you look across the ocean at the rapid rise of platforms like Temu, Shopee, and Lazada, it&apos;s clear that there are lessons to be learned from Asia&apos;s approach to online retail. These companies aren&apos;t just scaling fast — they&apos;re redefining how users interact with e-commerce platforms, and how to acquire and retain customers at massive scale.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-gray-900">Key Takeaways for Aussie Platforms</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Design with emotion and habit in mind</strong> – Don&apos;t just build a clean UI, build a sticky experience.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Reward engagement, not just conversion</strong> – Loyalty points, app-exclusive perks, and gamified incentives can go a long way.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Don&apos;t underestimate mobile</strong> – Optimizing for Android and low-bandwidth can open up under-served audiences.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Speed is trust</strong> – Fast-loading apps build credibility and user patience.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Community sells</strong> – Tap into social buying behaviors: reviews, shares, influencers, bundles.</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  Stay tuned for more posts on e-commerce trends and strategies.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Share:</span>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.ecommerce : '')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on LinkedIn"
                      id="share-linkedin-ecommerce"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl + blogPaths.ecommerce)}`,
                            'linkedin-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?text=What Aussie E-Commerce Can Learn from Asia's Tech Titans&url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.ecommerce : '')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on Twitter"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://twitter.com/intent/tweet?text=What Aussie E-Commerce Can Learn from Asia's Tech Titans&url=${encodeURIComponent(baseUrl + blogPaths.ecommerce)}`,
                            'twitter-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Hangtime App Post */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ y: -5 }}
              id="blog-hangtime-app"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center mb-4 gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    Mobile App
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    Basketball
                  </span>
                  <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm">
                    Success Story
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Building Hangtime: When Passion for Basketball Meets Software Engineering</h3>
                <p className="text-gray-600 mb-4">
                  April 5, 2024 • 10 min read
                </p>
                
                <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg mb-4">
                    <div className="w-full h-64 relative bg-gray-100 rounded-lg">
          <Image
                        src="/images/blog/hangtime/booking-flow.svg"
                        alt="Hangtime Booking System Architecture"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 italic text-center">
                    Real-time booking system with WebSockets to prevent concurrent booking collisions
                  </p>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As both a basketball enthusiast and software engineer, I saw an opportunity to solve a pain point in Melbourne's basketball community. This article details how I approached Hangtime's creator with a no-cost, commission-based app development proposal, the business strategy behind it, and how I tackled the complex technical challenge of concurrent bookings using WebSockets.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg shadow-inner border border-gray-200">
                    <h4 className="font-semibold mb-3 text-gray-900">Business Approach</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>No upfront cost for the organizer</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Commission-based revenue model (risk-free)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Focused on core functionality first, refined later</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Currently generating $2,500-3,000 monthly</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg shadow-inner border border-gray-200">
                    <h4 className="font-semibold mb-3 text-gray-900">Technical Challenge</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Multiple users trying to book the same spot</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Race conditions causing double bookings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>WebSocket solution for real-time availability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span>Temporary seat locking during checkout process</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-gray-900">Key Takeaways</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Start with the MVP:</strong> For small user bases (100-1000), focus on core functionality first and refine later</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Business model matters:</strong> The commission-based approach removed barriers to adoption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Solve real problems:</strong> The WebSocket implementation fixed a critical user experience issue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Passion projects can be profitable:</strong> Combining basketball passion with engineering skills created value</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Share:</span>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.hangtime : '')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on LinkedIn"
                      id="share-linkedin-hangtime"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl + blogPaths.hangtime)}`,
                            'linkedin-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
        </a>
        <a
                      href={`https://twitter.com/intent/tweet?text=Building Hangtime: When Passion for Basketball Meets Software Engineering&url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.hangtime : '')}`}
          target="_blank"
          rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on Twitter"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://twitter.com/intent/tweet?text=Building Hangtime: When Passion for Basketball Meets Software Engineering&url=${encodeURIComponent(baseUrl + blogPaths.hangtime)}`,
                            'twitter-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Medical Imaging Post */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ y: -5 }}
              id="blog-medical-imaging"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center mb-4 gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    Medical Tech
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    Cloud Architecture
                  </span>
                  <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm">
                    New
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Scaling Medical Imaging: How We Process 3,000+ 1GB DICOM Scans Daily</h3>
                <p className="text-gray-600 mb-4">
                  April 8, 2024 • 12 min read
                </p>
                
                <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg mb-4">
                    <div className="w-full h-64 relative bg-gray-100 rounded-lg">
          <Image
                        src="/images/blog/dicom-architecture.svg"
                        alt="DICOM Processing Architecture"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 italic text-center">
                    High-level architecture of our medical imaging processing pipeline
                  </p>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At 4DMedical, we faced a significant engineering challenge: processing over 3,290 DICOM files daily, each averaging 1GB in size. This article details the cloud-native architecture we built that processes these massive files, extracts critical metadata, and delivers 10x more accurate analysis to clinicians and patients.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-gray-900">Architecture Components</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Secure Ingestion Layer:</strong> High-throughput upload system with clinic-specific channels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Pub/Sub Messaging:</strong> Event-driven pipeline ensuring reliable data flow between services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Metadata Extraction:</strong> Specialized DICOM parsers that extract patient and scan metadata</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Algorithm Processing:</strong> Proprietary lung analysis algorithms that deliver 10x more accurate diagnostics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span><strong>Reporting Engine:</strong> Bidirectional conversion between raw data and clinician-friendly formats</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Share:</span>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.medical : '')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on LinkedIn"
                      id="share-linkedin-medical"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl + blogPaths.medical)}`,
                            'linkedin-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
        </a>
        <a
                      href={`https://twitter.com/intent/tweet?text=Scaling Medical Imaging: How We Process 3,000+ 1GB DICOM Scans Daily&url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.medical : '')}`}
          target="_blank"
          rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on Twitter"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://twitter.com/intent/tweet?text=Scaling Medical Imaging: How We Process 3,000+ 1GB DICOM Scans Daily&url=${encodeURIComponent(baseUrl + blogPaths.medical)}`,
                            'twitter-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Payment Gateway Post */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.7 }}
              whileHover={{ y: -5 }}
              id="blog-beyond-stripe"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center mb-4 gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    Payments
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                    E-commerce
                  </span>
                  <span className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Beyond Stripe: Why Small Businesses Should Consider Alternative Payment Gateways</h3>
                <p className="text-gray-600 mb-4">
                  April 10, 2024 • 8 min read
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  While Stripe has become the default payment gateway for many online businesses, it may not always be the most cost-effective solution. For small businesses processing $10,000+ monthly, implementing a custom payment solution with alternative gateways could significantly reduce transaction costs and increase flexibility.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-5 mb-6 shadow-inner border border-gray-200">
                  <h4 className="font-semibold mb-3 text-gray-900">Fee Comparison Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2 text-gray-900">Stripe</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Domestic Cards: 1.70% + A$0.30</li>
                        <li>• International Cards: 3.5% + A$0.30</li>
                        <li>• Currency Conversion: Additional 2%</li>
                        <li>• Afterpay via Stripe: 6% + A$0.30</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-gray-900">Alternatives</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Adyen: ~0.8% + interchange fees</li>
                        <li>• Google/Apple Pay: ~0.6% + interchange fees</li>
                        <li>• Direct Debit: 0.8% (capped at A$5.00)</li>
                        <li>• Custom implementations: Potential for further savings</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-gray-900">Key Takeaways</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>For businesses processing $10,000+/month, custom payment implementations can save thousands annually</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Alternative gateways like Adyen offer more competitive rates for growing businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Custom solutions allow for business-specific logic and optimizations</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Share:</span>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.payments : '')}`}
            target="_blank"
            rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on LinkedIn"
                      id="share-linkedin-payments"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl + blogPaths.payments)}`,
                            'linkedin-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?text=Beyond Stripe: Why Small Businesses Should Consider Alternative Payment Gateways&url=${encodeURIComponent(baseUrl ? baseUrl + blogPaths.payments : '')}`}
          target="_blank"
          rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Share on Twitter"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.open(
                            `https://twitter.com/intent/tweet?text=Beyond Stripe: Why Small Businesses Should Consider Alternative Payment Gateways&url=${encodeURIComponent(baseUrl + blogPaths.payments)}`,
                            'twitter-share',
                            'width=800,height=600'
                          );
                        }
                        return false;
                      }}
                    >
                      <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="#blog" 
              className="inline-block border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg transition-colors"
            >
              View All Posts
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-600">
                Whether you&apos;re looking for a collaborator, contractor, or just want to chat tech — I&apos;d love to hear from you!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:handy.hasan@yahoo.com" className="text-gray-600 hover:text-gray-700 transition-colors">
                      handy.hasan@yahoo.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <a href="https://linkedin.com/in/handy-hasan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 transition-colors">
                      LinkedIn Profile
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                    <span className="text-gray-600">
                      Melbourne, Australia
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Handy Hasan. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://linkedin.com/in/handy-hasan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://github.com/handyhasan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}