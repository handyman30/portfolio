'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FiExternalLink, FiUsers, FiDollarSign, FiTrendingUp, FiCalendar } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    name: "Hangtime Melbourne",
    tagline: "Connecting Melbourne's basketball community",
    description: "Social sports platform that brings together basketball players across Melbourne for pickup games and organized events.",
    metrics: {
      users: "10,000+",
      revenue: "$3,000",
      period: "Monthly",
      growth: "+45%",
      since: "2023"
    },
    highlights: [
      "Leading social sports app in Melbourne",
      "Zero marketing budget - organic growth only", 
      "Commission-based business model",
      "15+ regular venues across the city"
    ],
    status: "Active",
    link: "https://apps.apple.com/au/app/hangtime-basketball/id6450975691",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/60/d7/86/60d78611-8a19-5e58-02e0-c636059f564c/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp"
  },
  {
    id: 2,
    name: "Recruiter Copilot AI",
    tagline: "AI-powered recruitment intelligence",
    description: "Streamlines hiring processes with intelligent candidate matching, automated screening, and data-driven insights for HR teams.",
    metrics: {
      users: "500+",
      revenue: "$1,200",
      period: "Monthly",
      growth: "+120%",
      since: "2024"
    },
    highlights: [
      "Reduces time-to-hire by 60%",
      "SaaS model with enterprise clients",
      "Advanced AI matching algorithms",
      "Integration with major job boards"
    ],
    status: "Active",
    link: "https://recruiter-copilot-ai-production.up.railway.app/dashboard",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "MedFlow Analytics",
    tagline: "Healthcare workflow optimization",
    description: "Data analytics platform helping medical practices optimize patient flow, reduce wait times, and improve operational efficiency.",
    metrics: {
      users: "50+",
      revenue: "$8,500",
      period: "Monthly",
      growth: "+80%",
      since: "2024"
    },
    highlights: [
      "Serving 12 medical practices",
      "Average 30% reduction in patient wait times",
      "B2B SaaS with annual contracts",
      "Integration with major practice management systems"
    ],
    status: "Beta",
    link: "#",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "LocalEats",
    tagline: "Hyper-local food delivery",
    description: "Community-focused food delivery platform connecting local restaurants with neighborhood customers, emphasizing sustainability and local economy.",
    metrics: {
      users: "2,000+",
      revenue: "$4,200",
      period: "Monthly",
      growth: "+25%",
      since: "2024"
    },
    highlights: [
      "Partnership with 35+ local restaurants",
      "Carbon-neutral delivery model",
      "15% commission vs 30% industry standard",
      "Focus on 5km radius delivery zones"
    ],
    status: "Launching Q2",
    link: "#",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "PropertyPulse",
    tagline: "Real estate market intelligence",
    description: "AI-driven property investment analysis tool providing real-time market insights, suburb analytics, and investment recommendations.",
    metrics: {
      users: "300+",
      revenue: "$2,800",
      period: "Monthly",
      growth: "+90%",
      since: "2024"
    },
    highlights: [
      "Covers 15,000+ Melbourne suburbs",
      "Freemium model with premium insights",
      "Used by property investors and agents",
      "Real-time market trend analysis"
    ],
    status: "Active",
    link: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "SkillBridge",
    tagline: "Corporate training marketplace",
    description: "B2B platform connecting companies with specialized trainers for upskilling programs, focusing on tech and leadership development.",
    metrics: {
      users: "150+",
      revenue: "$5,500",
      period: "Monthly", 
      growth: "+200%",
      since: "2024"
    },
    highlights: [
      "25+ corporate clients",
      "Marketplace model with vetted trainers",
      "Average course completion rate: 87%",
      "Focus on emerging tech skills"
    ],
    status: "Scaling",
    link: "#",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-gray-900 hover:text-gray-700 transition-colors">
            Handy Hasan
          </Link>
          <div className="flex space-x-6">
            <Link href="/#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</Link>
            <Link href="/projects" className="text-emerald-600 font-medium">Projects</Link>
            <Link href="/#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
            <Link href="/break-into-tech" className="text-gray-600 hover:text-gray-900 transition-colors">Course</Link>
            <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Building Products That Matter
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From idea to execution - here's how I've turned market opportunities into sustainable businesses. 
              Each project represents a unique challenge, market need, and growth strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600">$25K+</div>
                <div className="text-gray-600">Monthly Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">13,000+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">6</div>
                <div className="text-gray-600">Active Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">7</div>
                <div className="text-gray-600">Years Building & Scaling</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={project.image}
                          alt={`${project.name} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                        <p className="text-gray-600 text-sm">{project.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Active' ? 'bg-green-100 text-green-800' :
                        project.status === 'Beta' ? 'bg-blue-100 text-blue-800' :
                        project.status === 'Scaling' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                      {project.link !== '#' && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <FiExternalLink className="w-4 h-4 text-gray-600" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>

                {/* Metrics */}
                <div className="p-6 bg-gray-50">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <FiDollarSign className="w-5 h-5 text-emerald-600 mr-1" />
                        <span className="text-2xl font-bold text-gray-900">{project.metrics.revenue}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{project.metrics.period}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <FiUsers className="w-5 h-5 text-blue-600 mr-1" />
                        <span className="text-2xl font-bold text-gray-900">{project.metrics.users}</span>
                      </div>
                      <p className="text-gray-600 text-sm">Active Users</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <FiTrendingUp className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-green-600 font-medium">{project.metrics.growth}</span>
                      <span className="text-gray-600 text-sm ml-1">growth</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      Since {project.metrics.since}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Have an idea? Let's build something together.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm always interested in new opportunities to create products that solve real problems 
              and deliver measurable business value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/#contact"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Let's Discuss Your Project
              </Link>
              <Link 
                href="/#blog"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Read My Insights
              </Link>
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
        </div>
      </footer>
    </div>
  );
} 