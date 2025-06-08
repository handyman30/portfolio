'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function BusinessPortfolio() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'journey', 'contact'];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioSections = [
    {
      id: 'healthcare',
      title: 'HEALTHCARE',
      description: 'Revolutionizing medical technology and patient care through innovative software solutions and strategic partnerships.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      projects: [
        '4DMedical - Lung Imaging Platform',
        'AI-Powered Diagnostic Tools',
        'Telemedicine Solutions'
      ]
    },
    {
      id: 'commerce',
      title: 'COMMERCE',
      description: 'Building next-generation e-commerce platforms and retail technology that drives growth and customer satisfaction.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      projects: [
        'The Good Guys - E-commerce Platform',
        'EssentialsDash - Product Discovery',
        'Payment Gateway Solutions',
        'Inventory Management Systems'
      ]
    },
    {
      id: 'sports',
      title: 'SPORTS',
      description: 'Connecting communities through sport and creating platforms that enhance athletic experiences and social connections.',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      projects: [
        'Hangtime Melbourne - Basketball Community',
        'Sports Analytics Platform',
        'Athletic Performance Tracking'
      ]
    },
    {
      id: 'wellbeing',
      title: 'WELLBEING',
      description: 'Developing holistic wellness solutions that promote mental health, physical fitness, and overall life balance.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2320&q=80',
      projects: [
        'Mental Health Apps',
        'Fitness Tracking Solutions',
        'Wellness Community Platforms'
      ]
    },
    {
      id: 'fintech',
      title: 'FINTECH',
      description: 'Creating innovative financial technology solutions that democratize access to financial services and investment opportunities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      projects: [
        'Payment Processing Systems',
        'Investment Platform Development',
        'Financial Analytics Tools'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            HANDY HASAN
          </Link>
          <div className="flex space-x-8">
            <a 
              href="#portfolio" 
              className={`transition-colors ${activeSection === 'portfolio' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Portfolio
            </a>
            <a 
              href="#journey" 
              className={`transition-colors ${activeSection === 'journey' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              My Journey
            </a>
            <a 
              href="#contact" 
              className={`transition-colors ${activeSection === 'contact' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              HANDY HASAN
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Entrepreneur & Technology Leader building the future across Healthcare, Commerce, Sports, Wellbeing, and Fintech
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href="#portfolio" 
                className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-colors"
              >
                View Portfolio
              </a>
              <a 
                href="#journey" 
                className="border border-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
              >
                My Story
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            PORTFOLIO
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {portfolioSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative h-96 md:h-[500px] group cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-widest">
                    {section.title}
                  </h3>
                  <p className="text-lg text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {section.description}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <ul className="text-sm text-gray-300 space-y-2">
                      {section.projects.map((project, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            MY JOURNEY
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <div className="text-center mb-12">
                <div className="w-32 h-32 rounded-full bg-gray-800 mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Handy Hasan"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="space-y-8 text-gray-300 leading-relaxed">
                <p className="text-xl">
                  My journey began with a simple belief: technology should solve real problems and create meaningful impact. From my early days as a software engineer to building platforms that serve millions, every step has been driven by this core principle.
                </p>
                
                <p>
                  Starting at The Good Guys, I learned the intricacies of e-commerce at scale, working on systems that processed millions of transactions daily. This experience taught me that behind every successful platform lies a complex ecosystem of technologies, processes, and most importantly, people.
                </p>
                
                <p>
                  At 4DMedical, I witnessed firsthand how technology can transform healthcare. Working on lung imaging platforms that process gigabytes of medical data to save lives reinforced my belief in technology's power to create positive change. This experience opened my eyes to the healthcare sector's immense potential for innovation.
                </p>
                
                <p>
                  The creation of Hangtime Melbourne marked my transition from employee to entrepreneur. Building a platform that connected over 10,000 basketball players in Melbourne showed me the power of community-driven technology. It wasn't just about the code—it was about bringing people together.
                </p>
                
                <p>
                  Today, I'm focused on building ventures across five key sectors that I believe will define the next decade: Healthcare, Commerce, Sports, Wellbeing, and Fintech. Each represents an opportunity to leverage technology for meaningful impact while building sustainable businesses.
                </p>
                
                <p className="text-xl font-medium text-white">
                  My mission is simple: build technology that matters, create value that lasts, and inspire others to think bigger.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Users Reached' },
              { number: '5', label: 'Industry Sectors' },
              { number: '7+', label: 'Years Experience' },
              { number: '∞', label: 'Vision' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              LET'S BUILD SOMETHING GREAT
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to discuss your next venture or explore partnership opportunities? 
              Let's connect and create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:handy@handyhasan.com" 
                className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="https://www.linkedin.com/in/handyhasan" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Handy Hasan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 