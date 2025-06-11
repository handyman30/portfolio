'use client';

import Link from 'next/link';
import { ArrowLeft, Activity, Zap, Database, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import Lung3D from '../../../components/Lung3D';

export default function Lung3DDemo() {
  return (
    <>
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 w-full z-20 bg-black/80 backdrop-blur-sm border-b border-green-500/30">
        <div className="flex items-center justify-between p-4">
          <Link 
            href="/" 
            className="flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            BACK TO PORTFOLIO
          </Link>
          
          <div className="flex items-center space-x-6 text-sm font-mono">
            <div className="text-green-400">LUNG IMAGING SYSTEM</div>
            <div className="flex items-center text-blue-400">
              <Activity className="h-4 w-4 mr-1" />
              LIVE
            </div>
          </div>
        </div>
      </header>

      {/* Main 3D Visualization */}
      <Lung3D />

      {/* Information Panel - Toggleable */}
      <div className="absolute top-20 right-6 max-w-sm z-20">
        <motion.div 
          className="bg-black/90 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-cyan-400 font-mono mb-4 flex items-center">
            <Stethoscope className="h-5 w-5 mr-2" />
            MEDICAL IMAGING SYSTEM
          </h3>
          
          <div className="space-y-4 text-sm">
            <div className="text-gray-300">
              <p className="mb-2">
                Interactive 3D lung visualization built with <strong className="text-cyan-300">Three.js</strong> and medical imaging expertise from <strong className="text-green-400">4DMedical</strong>.
              </p>
              <p className="mb-3">
                Features real-time breathing animation, DICOM-style slice viewing, and medical data visualization.
              </p>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <h4 className="text-cyan-300 font-mono mb-2">🏥 MEDICAL FEATURES</h4>
              <ul className="space-y-1 text-xs text-gray-400">
                <li>• Anatomically accurate lung structure</li>
                <li>• Real-time breathing simulation</li>
                <li>• DICOM slice visualization</li>
                <li>• Respiratory data monitoring</li>
                <li>• 3D medical data points</li>
              </ul>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <h4 className="text-green-300 font-mono mb-2">⚡ TECH STACK</h4>
              <div className="flex flex-wrap gap-2">
                {['Three.js', 'React', 'TypeScript', 'WebGL', 'DICOM'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-800/80 text-gray-300 rounded text-xs border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <h4 className="text-purple-300 font-mono mb-2">🔬 4DMEDICAL EXPERIENCE</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <div>• Processing 3,290+ DICOM scans daily</div>
                <div>• gRPC systems for medical devices</div>
                <div>• Cloud-based imaging workflows</div>
                <div>• Medical-grade reliability (99.97%)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Instructions Panel */}
      <div className="absolute top-20 left-6 max-w-xs z-20">
        <motion.div 
          className="bg-black/90 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-yellow-400 font-mono mb-4 flex items-center">
            <Zap className="h-5 w-5 mr-2" />
            INTERACTION GUIDE
          </h3>
          
          <div className="space-y-3 text-sm text-gray-300">
            <div>
              <strong className="text-yellow-300">MOUSE CONTROLS:</strong>
              <ul className="text-xs mt-1 space-y-1 text-gray-400">
                <li>• Left click + drag: Rotate view</li>
                <li>• Right click + drag: Pan around</li>
                <li>• Scroll wheel: Zoom in/out</li>
              </ul>
            </div>
            
            <div>
              <strong className="text-blue-300">FEATURES:</strong>
              <ul className="text-xs mt-1 space-y-1 text-gray-400">
                <li>• Watch realistic breathing animation</li>
                <li>• Toggle DICOM slice visualization</li>
                <li>• View floating medical data</li>
                <li>• Control breathing simulation</li>
              </ul>
            </div>
            
            <div className="border-t border-gray-700 pt-3">
              <div className="text-xs text-gray-500 font-mono">
                Built to demonstrate medical imaging expertise and 3D web development skills.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Credits */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div 
          className="bg-black/80 backdrop-blur-sm rounded-full px-6 py-2 border border-green-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-green-400 font-mono text-sm flex items-center">
            <Database className="h-4 w-4 mr-2" />
            Developed by Handy Hasan | Medical Imaging Specialist @ 4DMedical
          </div>
        </motion.div>
      </div>
    </>
  );
} 