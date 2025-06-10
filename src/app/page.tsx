'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cloud, 
  Smartphone, 
  Database, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Target,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";
import { fadeIn, staggerContainer, highlightVariant, TypeAnimation } from "./AnimatedComponents";
import { useEffect, useState } from "react";
import Link from 'next/link';

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web applications using React, Next.js, Python, and Node.js",
    features: ["Modern UI/UX", "Scalable Architecture", "API Development", "Database Design"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "AWS, Azure, and Google Cloud infrastructure setup and optimization",
    features: ["Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code", "Cost Optimization"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS/Android apps and cross-platform React Native solutions",
    features: ["iOS & Android", "React Native", "App Store Deployment", "Performance Optimization"]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Database design, data pipelines, and analytics infrastructure",
    features: ["PostgreSQL", "MongoDB", "ETL Pipelines", "Data Analytics"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security implementation and compliance standards",
    features: ["PCI Compliance", "HIPAA Standards", "Security Audits", "Data Protection"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization, monitoring, and scalability improvements",
    features: ["Load Testing", "Performance Monitoring", "CDN Setup", "Caching Strategies"]
  }
];

const caseStudies = [
  {
    title: "4DMedical: Medical Imaging Platform",
    description: "Built gRPC systems connecting XVD hardware to cloud infrastructure, processing 3,290+ daily DICOM scans with 80% bandwidth reduction.",
    tech: ["Python", "gRPC", "AWS", "Medical Imaging", "Microservices"],
    impact: "Enabling 10x more accurate lung imaging for hospitals worldwide",
    category: "Healthcare Technology"
  },
  {
    title: "The Good Guys: E-commerce Platform",
    description: "Developed e-commerce features for Australia's largest electronics retailer, reducing page load times by 35% and optimizing mobile checkout flows.",
    tech: ["React", "Node.js", "E-commerce", "Performance", "Mobile-First"],
    impact: "Millions of daily transactions, 25% mobile conversion increase",
    category: "E-commerce"
  },
  {
    title: "Hangtime: Sports Community App",
    description: "Built React Native mobile app connecting basketball players, used by 10,000+ Melbourne residents with real-time features and social networking.",
    tech: ["React Native", "Firebase", "Real-time", "Social Features", "Mobile"],
    impact: "10,000+ active users, 4.8-star App Store rating",
    category: "Mobile App"
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "CTO, 4DMedical",
    content: "HandyLabs delivered exceptional technical solutions for our medical imaging platform. Their expertise in gRPC and cloud architecture was crucial to our success.",
    avatar: "SC"
  },
  {
    name: "Mark Thompson",
    role: "Head of Engineering, The Good Guys",
    content: "The performance optimizations delivered by HandyLabs resulted in significant improvements to our e-commerce platform and customer experience.",
    avatar: "MT"
  },
  {
    name: "Alex Rodriguez",
    role: "Founder, Hangtime",
    content: "HandyLabs built our mobile app from concept to 10,000+ users. Their technical expertise and product thinking were invaluable.",
    avatar: "AR"
  }
];

export default function Home() {
  const [, setBaseUrl] = useState('');
  
  useEffect(() => {
    // Set the base URL only on the client side
    setBaseUrl(window.location.origin);
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
              <motion.h2 
                variants={fadeIn}
                className="text-2xl text-gray-700 mb-6"
              >
                Full-Stack Software Engineer
              </motion.h2>
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
                className="flex flex-wrap space-x-0 sm:space-x-4 gap-4 sm:gap-0 justify-center lg:justify-start"
              >
                <a 
                  href="#contact" 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Hire Me
                </a>
                <Link 
                  href="/projects" 
                  className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors font-medium border border-gray-800"
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
                <Link 
                  href="/projects" 
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg transition-colors"
                >
                  View My Work
                </Link>
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

          {/* Rest of content continues... */}
        </div>
      </motion.div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
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
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Ready to work together? I'd love to hear about your project.
            </p>
            <a 
              href="mailto:handy@handyhasan.com" 
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Handy Hasan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}