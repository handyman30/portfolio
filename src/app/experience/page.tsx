'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-gray-900">
            Handy Hasan
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
            <Link href="/business" className="text-gray-600 hover:text-gray-900 transition-colors">Business</Link>
            <Link href="/#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
            <Link href="/break-into-tech" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">Course</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              7+ years of full-stack development experience, from e-commerce platforms processing millions of transactions to medical imaging systems saving lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
            
            <div className="space-y-16">
              {/* 4DMedical - Current Role */}
              <motion.div 
                className="flex flex-col md:flex-row md:items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:order-1">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 md:ml-8 relative">
                    <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-lg"></div>
                    <div className="flex flex-col md:flex-row justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior Software Engineer</h3>
                        <div className="text-emerald-600 font-medium text-lg">4DMedical (ASX: 4DX)</div>
                      </div>
                      <div className="text-gray-600 font-medium">Oct 2021 - Present (3+ years)</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-3 mt-1">🚀</span>
                          <span><strong>Scaled Medical Imaging Platform:</strong> Built architecture processing 3,290+ daily DICOM scans, each 1GB+, serving hospitals across Australia and globally.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-3 mt-1">⚡</span>
                          <span><strong>gRPC Implementation:</strong> Designed real-time communication system between XVD medical devices and cloud backend, achieving 80% bandwidth reduction.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-3 mt-1">🔧</span>
                          <span><strong>Microservices Architecture:</strong> Led transition from monolith to microservices, enabling independent team deployments and 10x faster feature delivery.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-3 mt-1">🏥</span>
                          <span><strong>Medical-Grade Quality:</strong> Implemented comprehensive testing strategies with 90%+ coverage, ensuring HIPAA compliance and zero production incidents.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Leadership</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">Backend Systems</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Python/Django microservices</li>
                            <li>• gRPC API design</li>
                            <li>• Pub/Sub messaging (AWS SQS)</li>
                            <li>• DICOM file processing</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">Infrastructure & DevOps</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• AWS cloud architecture</li>
                            <li>• Docker containerization</li>
                            <li>• CI/CD pipelines</li>
                            <li>• Monitoring & alerting</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-blue-900 mb-2">Impact on Healthcare</h5>
                      <p className="text-blue-800 text-sm">
                        4DMedical's technology provides 10x more accurate lung imaging than traditional CT scans, helping diagnose respiratory conditions earlier and more precisely. Our platform processes imaging data from hospitals worldwide, directly contributing to better patient outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-16 flex justify-center md:justify-end md:order-0">
                  <div className="bg-emerald-50 p-6 rounded-xl shadow-inner w-full max-w-md border border-emerald-200">
                    <div className="text-center mb-4">
                      <Image
                        src="https://alhi.com.au/wp-content/uploads/2020/05/4DMedical_Logo_RGB-2.png"
                        alt="4DMedical Logo"
                        width={200}
                        height={80}
                        className="mx-auto"
                      />
                    </div>
                    <h4 className="font-semibold mb-3 text-lg text-emerald-900">Core Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Django", "React", "TypeScript", "gRPC", "AWS", "Docker", "PostgreSQL", "TensorFlow", "DICOM"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white text-emerald-700 rounded-md text-sm border border-emerald-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* The Good Guys */}
              <motion.div 
                className="flex flex-col md:flex-row md:items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 md:ml-auto md:mr-8 relative">
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-lg"></div>
                    <div className="flex flex-col md:flex-row justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Software Developer</h3>
                        <div className="text-emerald-600 font-medium text-lg">The Good Guys (JB Hi-Fi Group, ASX: JBH)</div>
                      </div>
                      <div className="text-gray-600 font-medium">Oct 2019 - Oct 2021 (2 years)</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-3 mt-1">🛒</span>
                          <span><strong>E-commerce Platform Development:</strong> Built and maintained features for Australia's largest electronics retailer, handling millions of daily transactions.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-3 mt-1">⚡</span>
                          <span><strong>Performance Optimization:</strong> Reduced page load times by 35% through code optimization, image compression, and caching strategies.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-3 mt-1">📱</span>
                          <span><strong>Mobile-First Development:</strong> Implemented responsive checkout flow that increased mobile conversion rates by 25%.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-500 mr-3 mt-1">🔄</span>
                          <span><strong>Real-time Inventory System:</strong> Developed live inventory tracking preventing overselling and improving customer satisfaction.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Contributions</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">Frontend Development</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• React/JavaScript SPAs</li>
                            <li>• Responsive UI components</li>
                            <li>• A/B testing frameworks</li>
                            <li>• Performance monitoring</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">Backend Integration</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• RESTful API development</li>
                            <li>• Payment gateway integration</li>
                            <li>• Inventory management APIs</li>
                            <li>• Database optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h5 className="font-semibold text-orange-900 mb-2">Business Impact</h5>
                      <p className="text-orange-800 text-sm">
                        The Good Guys is Australia's largest electrical retailer with 100+ stores. My contributions directly impacted millions of customers and helped maintain the platform's position as a market leader during the critical digital transformation period.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-16 flex justify-center md:justify-start">
                  <div className="bg-orange-50 p-6 rounded-xl shadow-inner w-full max-w-md border border-orange-200">
                    <div className="text-center mb-4">
                      <Image
                        src="https://www.nationalproductreview.com.au/wp-content/uploads/TGG_DesktopBanner.jpg.optimal.jpg"
                        alt="The Good Guys Logo"
                        width={200}
                        height={80}
                        className="mx-auto rounded"
                      />
                    </div>
                    <h4 className="font-semibold mb-3 text-lg text-orange-900">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Redis", "AWS", "Jenkins", "Git"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white text-orange-700 rounded-md text-sm border border-orange-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Technical Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Frontend Development",
                icon: "🎨",
                skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Mobile-First Design"]
              },
              {
                title: "Backend Development", 
                icon: "⚙️",
                skills: ["Python/Django", "Node.js", "gRPC", "GraphQL", "Microservices"]
              },
              {
                title: "Cloud & DevOps",
                icon: "☁️", 
                skills: ["AWS", "Docker", "CI/CD", "Terraform", "Monitoring"]
              },
              {
                title: "Data & Analytics",
                icon: "📊",
                skills: ["PostgreSQL", "Redis", "ElasticSearch", "Data Pipelines", "Medical Imaging"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-gray-600 flex items-center">
                      <span className="text-emerald-500 mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Career Highlights
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "7+", label: "Years Experience", description: "Full-stack development" },
              { metric: "3,290+", label: "Daily Medical Scans", description: "Processed by systems I built" },
              { metric: "10M+", label: "E-commerce Transactions", description: "Handled by platforms I developed" },
              { metric: "90%+", label: "Test Coverage", description: "Quality engineering standards" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-emerald-600 mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{item.label}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to work together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Looking for a senior full-stack engineer who can lead technical initiatives, architect scalable systems, and deliver results? Let's connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/#contact" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </Link>
              <Link 
                href="/projects" 
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-medium transition-colors"
              >
                View My Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 