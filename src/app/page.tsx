'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, highlightVariant, TypeAnimation } from "./AnimatedComponents";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [, setBaseUrl] = useState('');
  
  useEffect(() => {
    // Set the base URL only on the client side
    setBaseUrl(window.location.origin);
    
    // Check for hash in URL and scroll to that section if present
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // Show blog content if it's a blog hash
          if (hash.startsWith('#blog-')) {
            element.classList.remove('hidden');
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
          element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }

    // Handle hash changes for blog content
    const handleHashChange = () => {
      const hash = window.location.hash;
      // Hide all blog content first
      document.querySelectorAll('[id^="blog-"]').forEach(el => el.classList.add('hidden'));
      
      // Show the targeted blog content
      if (hash.startsWith('#blog-')) {
        const element = document.querySelector(hash);
        if (element) {
          element.classList.remove('hidden');
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
      {/* Sticky CTA */}
      <div className="fixed right-8 top-24 z-50 hidden md:block">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer flex items-center gap-2 pr-4 group"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <motion.span 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.3 }}
            className="font-bold whitespace-nowrap overflow-hidden"
          >
            Get In Touch
          </motion.span>
        </motion.div>
      </div>

      {/* Header/Navigation */}
      <header className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-gray-900">Handy Hasan</div>
          <div className="flex space-x-6">
            <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
            <Link href="/business" className="text-gray-900 hover:text-gray-700 font-medium transition-colors">Business</Link>
            <a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <Link href="/break-into-tech" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">Course</Link>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Profile Image */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/profile.jpg"
                  alt="Handy Hasan"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-[75%_25%]"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span 
                variants={fadeIn}
                className="text-lg text-gray-600 mb-2 block"
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
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
              >
                <h2 className="text-2xl text-gray-700">Senior Full-Stack Software Engineer | Melbourne</h2>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                className="mb-8 max-w-2xl"
              >
                <TypeAnimation 
                  text="👋 Hi! I'm Handy — a Senior Software Engineer in Melbourne with 7+ years experience in full-stack development, specializing in React, Python, AWS, and mobile applications. Available for hire by Melbourne tech companies and startups." 
                  className="text-lg text-gray-600"
                />
              </motion.div>
              <motion.div 
                variants={fadeIn}
                className="flex flex-wrap justify-center lg:justify-start space-x-0 sm:space-x-4 gap-4 sm:gap-0"
              >
                <a 
                  href="#contact" 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Hire Me
                </a>
                <Link 
                  href="/demos/fintech-dashboard" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all font-medium flex items-center gap-2"
                >
                  View Live Demos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="/projects" 
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg transition-colors"
                >
                  View Projects
                </Link>
                <a 
                  href="#blog" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                  Read My Blog
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v9.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 12.586V3a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
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
          <motion.h2 
            className="text-2xl font-bold mb-8 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Full-Stack Technology Expertise
          </motion.h2>
          
          {/* Frontend Technologies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Frontend Development</h3>
          <motion.div 
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
              {["React", "TypeScript", "Next.js", "Vue.js", "Angular", "JavaScript ES6+", "HTML5/CSS3", "Tailwind CSS", "Sass/SCSS", "Webpack", "Vite", "React Native"].map((skill) => (
              <motion.div
                key={skill}
                variants={highlightVariant}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium shadow-sm border border-blue-200"
                whileHover={{ 
                  scale: 1.05, 
                    backgroundColor: "rgb(239, 246, 255)",
                    borderColor: "rgb(147, 197, 253)" 
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

          {/* Backend Technologies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Backend Development</h3>
            <motion.div 
              className="flex flex-wrap justify-center gap-3 md:gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {["Python", "Django", "FastAPI", "Go", "C#/.NET", "Node.js", "Express", "GraphQL", "gRPC", "RESTful APIs", "Microservices", "WebSockets"].map((skill) => (
                <motion.div
                  key={skill}
                  variants={highlightVariant}
                  className="px-4 py-2 bg-green-50 text-green-700 rounded-full font-medium shadow-sm border border-green-200"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgb(240, 253, 244)",
                    borderColor: "rgb(134, 239, 172)" 
                  }}
                >
                  {skill}
      </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Cloud & DevOps */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Cloud & DevOps</h3>
            <motion.div 
              className="flex flex-wrap justify-center gap-3 md:gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {["AWS", "Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions", "Nginx", "Redis", "Monitoring"].map((skill) => (
                <motion.div
                  key={skill}
                  variants={highlightVariant}
                  className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full font-medium shadow-sm border border-purple-200"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgb(250, 245, 255)",
                    borderColor: "rgb(196, 181, 253)" 
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Databases & Tools */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Databases & Tools</h3>
            <motion.div 
              className="flex flex-wrap justify-center gap-3 md:gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Git", "Linux", "VS Code", "Postman", "Figma", "Jira", "Slack"].map((skill) => (
                <motion.div
                  key={skill}
                  variants={highlightVariant}
                  className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full font-medium shadow-sm border border-orange-200"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgb(255, 251, 235)",
                    borderColor: "rgb(254, 215, 170)" 
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* SEO Section for Recruiters - Melbourne Software Engineer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              Hire a Senior Software Engineer in Melbourne
            </motion.h2>
            <motion.div 
              className="text-lg text-gray-700 leading-relaxed space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                Looking for a <strong>top software engineer in Melbourne</strong>? I'm a senior full-stack developer with <strong>7+ years of professional experience</strong> working with leading Melbourne companies including 4DMedical (ASX listed) and The Good Guys.
              </p>
              <p>
                As a <strong>Melbourne-based software engineer</strong>, I specialize in building scalable web applications, mobile apps, and cloud solutions. My expertise includes <strong>React, Python, AWS, Node.js, and mobile development</strong> - perfect for startups and enterprise companies looking to scale their tech teams.
              </p>
              <p>
                <strong>Available for hire</strong> as a senior developer, tech lead, or consultant for Melbourne companies. I have a proven track record of delivering high-impact projects, from medical imaging platforms processing 3,000+ daily scans to mobile apps with 10,000+ active users.
              </p>
            </motion.div>
            <motion.div 
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#contact" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg transition-colors font-medium inline-flex items-center gap-2"
              >
                Hire Me Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <Link 
                href="/experience" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg transition-colors font-medium"
              >
                View Full Resume
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section - Brief Summary */}
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 4DMedical - Current Role */}
            <motion.div 
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Senior Software Engineer</h3>
                <div className="text-blue-600 font-medium mb-1">4DMedical (ASX: 4DX)</div>
                <div className="text-sm text-gray-600">Oct 2021 - Present (3+ years)</div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Leading development of medical imaging platform processing 3,290+ daily DICOM scans. Built gRPC systems connecting XVD hardware to cloud backend, achieving 80% bandwidth reduction and medical-grade reliability.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "gRPC", "AWS", "Medical Imaging", "Microservices"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
                    
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <p className="text-gray-800 text-sm font-medium">
                  🚀 Key Impact: Enabling 10x more accurate lung imaging for hospitals worldwide
                </p>
              </div>
            </motion.div>

            {/* The Good Guys */}
            <motion.div 
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Software Developer</h3>
                <div className="text-orange-600 font-medium mb-1">The Good Guys (JB Hi-Fi Group)</div>
                <div className="text-sm text-gray-600">Oct 2019 - Oct 2021 (2 years)</div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Developed e-commerce platform features for Australia's largest electronics retailer. Reduced page load times by 35%, built real-time inventory systems, and optimized mobile checkout flows.
              </p>
                    
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "E-commerce", "Performance", "Mobile-First"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <p className="text-gray-800 text-sm font-medium">
                  📈 Key Impact: Millions of daily transactions, 25% mobile conversion increase
                </p>
              </div>
            </motion.div>
                      </div>
          
                <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
                >
            <Link 
              href="/experience" 
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-colors font-medium"
            >
              View Full Experience Details →
            </Link>
              </motion.div>
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
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FinPay Analytics Dashboard - LIVE DEMO */}
            <motion.a 
              href="/demos/fintech-dashboard" 
              className="block bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all hover:scale-105 hover:shadow-xl relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  LIVE DEMO
                </span>
              </div>
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">💰</div>
                  <div className="text-xl font-bold">FinPay Dashboard</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">FinPay Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Interactive fintech analytics dashboard with real-time transaction monitoring, payment method distribution, risk scoring, and regional insights. Built with React & TypeScript.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 hover:text-gray-800 transition-colors">
                    Try Live Demo
                  </span>
                  <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    Interactive
                  </span>
                </div>
              </div>
            </motion.a>

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
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🤖</div>
                  <div className="text-xl font-bold">Recruiter Copilot AI</div>
                </div>
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

            {/* EssentialsDash */}
            <motion.a 
              href="https://essentials-life-production.up.railway.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🛍️</div>
                  <div className="text-xl font-bold">EssentialsDash</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">EssentialsDash</h3>
                <p className="text-gray-600 mb-4">
                  Curated product discovery platform for trending essentials across shoes, tech, watches, cars, and style. Discover the latest trends with direct buy links.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 hover:text-gray-800 transition-colors">
                    Discover Products
                  </span>
                  <span className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                    Trending
                  </span>
                </div>
              </div>
            </motion.a>

            {/* LifeGPT */}
            <motion.a 
              href="https://hesitant-dock-production.up.railway.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🧠</div>
                  <div className="text-xl font-bold">LifeGPT</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">LifeGPT</h3>
                <p className="text-gray-600 mb-4">
                  AI reflection buddy for personal growth. Chat with your future self, 60-year-old self, biggest fan, and brutally honest friend for deeper self-awareness.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 hover:text-gray-800 transition-colors">
                    Start Reflecting
                  </span>
                  <span className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                    Personal Growth
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
          
          {/* Blog Posts Grid - Previews only for better performance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Quality Engineering Preview */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🧪</div>
                  <div className="text-xl font-bold">Quality Engineering</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center mb-3 gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    Testing
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    Quality Engineering
                  </span>
                  <span className="px-2 py-1 bg-emerald-500 text-white rounded-full text-xs">
                    Latest
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Quality Engineering at Scale: Unit Tests, Cypress & SonarCloud</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Quality isn't just about writing tests—it's about building a culture and infrastructure that prevents bugs from reaching production. Learn how to implement comprehensive testing strategies...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">15 min read</span>
                  <Link 
                    href="/blog/quality-engineering-testing"
                    className="text-emerald-600 hover:text-emerald-800 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* gRPC Medical Devices Preview */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-xl font-bold">gRPC & Medical Devices</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center mb-3 gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    gRPC
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    Medical Devices
                  </span>
                  <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs">
                    New
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Building Medical Device Communication with gRPC</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  At 4DMedical, we connected proprietary XVD hardware to cloud infrastructure using gRPC. Learn how we achieved 80% bandwidth reduction and medical-grade reliability...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">12 min read</span>
                  <Link 
                    href="/blog/grpc-medical-devices"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Railway Deployment Preview */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-xl font-bold">Railway Deployment</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center mb-3 gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    DevOps
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    Deployment
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Railway Deployment Made Easy: PostgreSQL + Git</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Deployment shouldn't be the hard part of building software. Railway combines simplicity with power, featuring built-in PostgreSQL and lightning-fast deployments...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">10 min read</span>
                  <Link 
                    href="/blog/railway-deployment-guide"
                    className="text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* E-commerce Observability Preview */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-xl font-bold">E-commerce Observability</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center mb-3 gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    E-commerce
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    DevOps
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">The Invisible Layer of E-Commerce: Enterprise Observability with Mixpanel, New Relic & Sumo Logic</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  E-commerce platforms live and die by the experience they deliver in real time. Learn how to implement enterprise observability with Mixpanel analytics, New Relic APM, and Sumo Logic...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">12 min read</span>
                  <Link 
                    href="/blog/ecommerce-observability"
                    className="text-orange-600 hover:text-orange-800 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Microservices Preview */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🧩</div>
                  <div className="text-xl font-bold">Microservices</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center mb-3 gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    E-commerce
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    Architecture
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">From Monolith to Microservices: E-Commerce at Scale</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Most e-commerce platforms start with a monolith for good reason. Learn when and how to transition to microservices for product velocity...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">8 min read</span>
                  <Link 
                    href="/blog/monolith-to-microservices"
                    className="text-teal-600 hover:text-teal-800 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Hangtime App Preview */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏀</div>
                  <div className="text-xl font-bold">Hangtime App</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center mb-3 gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    Mobile App
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    Basketball
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Building Hangtime: Basketball Meets Software Engineering</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Combining passion for basketball with engineering skills to solve real problems. Learn the business strategy and technical challenges of building a sports community app...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">10 min read</span>
                  <Link 
                    href="/blog/hangtime-app"
                    className="text-green-600 hover:text-green-800 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Beyond Stripe Preview */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">💳</div>
                  <div className="text-xl font-bold">Beyond Stripe</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center mb-3 gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    Payments
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    Fintech
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Beyond Stripe: Building Custom Payment Solutions</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  While Stripe is excellent for most use cases, some businesses need custom payment flows. Learn when to build your own and how to do it safely...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">12 min read</span>
                  <Link 
                    href="/blog/beyond-stripe"
                    className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Medical Imaging Preview */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-br from-red-500 to-pink-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏥</div>
                  <div className="text-xl font-bold">Medical Imaging</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center mb-3 gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    Healthcare
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    DICOM
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Medical Imaging in the Cloud: DICOM, PACS & ML</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Processing medical imaging data at scale requires specialized knowledge. Learn about DICOM standards, PACS integration, and machine learning applications...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">14 min read</span>
                  <Link 
                    href="/blog/medical-imaging"
                    className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Aussie E-commerce Asia Preview */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.9 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🌏</div>
                  <div className="text-xl font-bold">Aussie E-commerce</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center mb-3 gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    E-commerce
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                    International
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Scaling Aussie E-commerce to Asia: Lessons Learned</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Expanding from Australia to Asian markets brings unique challenges. Learn about currency handling, localization, logistics, and cultural considerations...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">11 min read</span>
                  <Link 
                    href="/blog/aussie-ecommerce-asia"
                    className="text-yellow-600 hover:text-yellow-800 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
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
                    <div className="text-gray-600">
                      <div>152 Elizabeth St</div>
                      <div>Melbourne VIC 3000, Australia</div>
                    </div>
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