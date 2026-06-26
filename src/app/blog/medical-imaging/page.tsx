'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function MedicalImagingBlog() {
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
                Healthcare
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                DICOM
              </span>
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
                4DMedical
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Medical imaging in the cloud: DICOM, PACS and ML</h1>
            <p className="text-gray-600 mb-6">February 28, 2024 • 14 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">The hard parts</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>DICOM files</strong> – often a gigabyte or more per scan, with a lot of metadata attached</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>HIPAA</strong> – patient data has to be protected at every hop</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>ML in the loop</strong> – running models over scans without holding up the pipeline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>PACS</strong> – talking to whatever system a given hospital already runs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Roughly the scale at 4DMedical</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>3,290+ scans a day</strong> – going through the pipeline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>50+ hospitals</strong> – across several countries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>ML on lung imaging</strong> – measurements, not just pictures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>99.9% uptime</strong> – the bar for anything clinical</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Medical imaging has its own set of standards and quirks that you don't really appreciate until you're in it: DICOM, PACS, and a stack of regulatory rules sitting on top. At 4DMedical we run cloud infrastructure that processes 3,290+ scans a day, has to stay HIPAA compliant, and feeds machine learning models that pull quantitative measurements out of lung scans. This post is the practical side of that: the architecture, the compliance headaches, and where the ML actually fits.
            </p>
            
            <div className="mb-6 bg-red-50 p-5 rounded-lg border border-red-200">
              <h4 className="font-semibold mb-3 text-red-900">Working with DICOM</h4>
              <div className="bg-white p-4 rounded-md mb-4">
                <p className="text-gray-700 text-sm mb-2">
                  DICOM (Digital Imaging and Communications in Medicine) is the format basically every medical scanner speaks. A single file isn't just the image — it carries a long list of tags about the patient, the procedure and the machine that took it. That metadata is half the work.
                </p>
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-orange-300 rounded-md p-3 bg-orange-50">
                      <strong>Traditional DICOM Handling</strong><br/>
                      <span className="text-xs">• On-premise PACS storage<br/>• Limited processing power<br/>• Manual quality control<br/>• Isolated systems</span>
                    </div>
                    <div className="border border-green-300 rounded-md p-3 bg-green-50">
                      <strong>Cloud-Native Processing</strong><br/>
                      <span className="text-xs">• Scalable storage & compute<br/>• Automated quality checks<br/>• ML-enhanced analysis<br/>• Global accessibility</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-red-800 text-sm">
                Moving processing to the cloud is mostly about headroom — you can run analysis and ML over scans that an on-premise PACS box was never going to have the compute for.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">The cloud architecture, and where HIPAA bites</h4>
              <p className="text-gray-700 mb-4">
                Patient data sets the bar for security here, and compliance shapes most of the design decisions. The aim is to keep the data locked down without making the processing pipeline unusable. Here's how the pieces fit:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Medical imaging cloud architecture
Data Flow: Hospital → Secure Upload → Processing → Analysis → Results

┌─────────────────────────────────────────────────────────────────┐
│ Hospital PACS Integration                                       │
│ • Secure DICOM transmission (TLS 1.3)                         │
│ • De-identification at source                                 │
│ • Digital signatures for integrity                           │
│ • Audit logging for all transfers                            │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Cloud Ingestion Layer (HIPAA BAA Compliant)                   │
│ • AWS S3 with server-side encryption                          │
│ • VPC with private subnets                                    │
│ • WAF and DDoS protection                                     │
│ • Multi-factor authentication                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Processing Pipeline                                             │
│ • DICOM parsing and validation                                 │
│ • Image quality assessment                                     │
│ • ML model inference (lung analysis)                          │
│ • Results generation and reporting                             │
└─────────────────────────────────────────────────────────────────┘`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Where the ML comes in</h4>
              <p className="text-gray-700 mb-4">
                4DMedical&apos;s XV Technology™ runs ML over lung scans to produce actual numbers — regional ventilation and perfusion — rather than a radiologist eyeballing the image. The pipeline looks something like this:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`# ML Pipeline for Lung Analysis
import tensorflow as tf
import pydicom
import numpy as np

class LungAnalysisML:
    def __init__(self):
        self.ventilation_model = tf.keras.models.load_model('ventilation_v2.h5')
        self.perfusion_model = tf.keras.models.load_model('perfusion_v2.h5')
    
    def process_4d_scan(self, dicom_series):
        """Process 4D lung scan for ventilation and perfusion analysis"""
        
        # Extract respiratory phases from DICOM series
        respiratory_phases = self.extract_respiratory_phases(dicom_series)
        
        # Preprocess for ML models
        normalized_data = self.preprocess_for_ml(respiratory_phases)
        
        # Run ventilation analysis
        ventilation_map = self.ventilation_model.predict(normalized_data)
        
        # Run perfusion analysis  
        perfusion_map = self.perfusion_model.predict(normalized_data)
        
        # Generate quantitative measurements
        measurements = self.calculate_lung_metrics(
            ventilation_map, 
            perfusion_map
        )
        
        return {
            'ventilation_map': ventilation_map,
            'perfusion_map': perfusion_map,
            'quantitative_metrics': measurements,
            'analysis_timestamp': datetime.utcnow(),
            'model_versions': {
                'ventilation': 'v2.1.3',
                'perfusion': 'v2.0.8'
            }
        }
    
    def calculate_lung_metrics(self, ventilation, perfusion):
        """Calculate clinically relevant lung function metrics"""
        return {
            'total_lung_volume': np.sum(ventilation > 0.1),
            'ventilation_defect_percentage': self.calc_defect_percentage(ventilation),
            'perfusion_defect_percentage': self.calc_defect_percentage(perfusion),
            'regional_analysis': self.regional_lung_analysis(ventilation, perfusion),
            'severity_score': self.calculate_severity_score(ventilation, perfusion)
        }`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">What I'd tell anyone starting on this</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Privacy isn't retrofittable</strong> – de-identification, encryption and access control have to be there from the start.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>A model isn't done when it works</strong> – it has to hold up against clinical outcomes and the regulator before it counts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>You're a guest in their workflow</strong> – fit into the hospital's existing PACS and radiology process, not the other way around.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Reliability is clinical</strong> – downtime here isn't a bad day, it's a delayed diagnosis. Plan for 99.9%+ and fast response.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>The software is a medical device</strong> – FDA, CE and local SaMD rules apply, and they shape how you ship.</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-gray-900">What it adds up to</h4>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`# 4DMedical XV Technology Clinical Impact

Global Deployment Metrics:
• 50+ hospitals across US, Europe, Australia
• 3,290+ scans processed daily
• 200,000+ patients analyzed to date
• 15+ clinical studies published

Clinical Benefits:
• 10x more sensitive than traditional lung imaging
• Quantitative measurements vs qualitative assessment  
• Early detection of lung disease progression
• Reduced need for invasive diagnostic procedures
• Personalized treatment planning capabilities

Technical Achievements:
• 99.97% system uptime across all deployments
• <30 second processing time for complete analysis
• HIPAA/GDPR compliant with zero data breaches
• Integration with 25+ different PACS systems
• Real-time quality control and error detection`}
                </pre>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              The thing that's stuck with me from 4DMedical is that the code is downstream of a real clinical decision. A bug isn't an annoyance for a user — it's a measurement a doctor might lean on. That changes how you think about a security control or an edge case in the pipeline. It's a heavier kind of responsibility than most software I've worked on, and honestly that's part of why I like it.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Share:</span>
                <a 
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://handyhasan.com/blog/medical-imaging"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="h-5 w-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                href="/#blog" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 