'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function GrpcMedicalDevicesBlog() {
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
                gRPC
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Medical Devices
              </span>
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                4DMedical
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Building Medical Device Communication with gRPC: Connecting XVD Hardware to Cloud Backend</h1>
            <p className="text-gray-600 mb-6">April 20, 2024 • 12 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Technical Challenges</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">📡</span>
                      <span><strong>1GB+ DICOM Files</strong> – Real-time streaming of massive medical scans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔒</span>
                      <span><strong>Medical-Grade Security</strong> – HIPAA compliance and patient data protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">⚡</span>
                      <span><strong>Sub-second Latency</strong> – Real-time device communication requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🌐</span>
                      <span><strong>Cross-Platform</strong> – Windows devices to Linux cloud infrastructure</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Business Impact Results</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">📈</span>
                      <span><strong>80% Bandwidth Reduction</strong> – vs traditional REST API approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🚀</span>
                      <span><strong>3,290+ Daily Scans</strong> – Processing at enterprise scale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🎯</span>
                      <span><strong>Zero Data Loss</strong> – Automatic retry and recovery mechanisms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🏥</span>
                      <span><strong>50+ Clinics</strong> – Deployed across multiple healthcare facilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              At 4DMedical, we faced a unique engineering challenge: connecting proprietary XVD medical hardware to our cloud infrastructure. Traditional REST APIs weren&apos;t suitable for real-time medical imaging data streams of 1GB+ per scan. This is how we implemented a high-performance gRPC solution that reduced bandwidth by 80% while maintaining medical-grade reliability and HIPAA compliance.
            </p>
            
            <div className="mb-6 bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-3 text-blue-900">gRPC vs REST: Medical Device Communication</h4>
              <div className="bg-white p-4 rounded-md mb-4">
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-red-300 rounded-md p-3 bg-red-50">
                      <strong>REST API Challenges</strong><br/>
                      <span className="text-xs">• 1GB+ JSON payloads<br/>• HTTP overhead<br/>• No streaming<br/>• Polling required</span>
                    </div>
                    <div className="border border-green-300 rounded-md p-3 bg-green-50">
                      <strong>gRPC Solution</strong><br/>
                      <span className="text-xs">• Binary Protocol Buffers<br/>• HTTP/2 multiplexing<br/>• Bidirectional streaming<br/>• Real-time push</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-blue-800 text-sm">
                gRPC&apos;s binary protocol and streaming capabilities made it the perfect choice for medical device communication.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Protocol Buffer Schema Design</h4>
              <p className="text-gray-700 mb-4">
                We designed Protocol Buffer schemas specifically for medical imaging data, ensuring type safety and efficient serialization:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// medical_imaging.proto
syntax = "proto3";

package medical.imaging;

// DICOM scan metadata
message ScanMetadata {
  string scan_id = 1;
  string patient_id = 2;
  string device_id = 3;
  int64 timestamp = 4;
  ScanType scan_type = 5;
  PatientInfo patient_info = 6;
  DeviceSettings device_settings = 7;
}

// Patient information (HIPAA compliant)
message PatientInfo {
  string encrypted_patient_id = 1;  // Encrypted for privacy
  int32 age = 2;
  Gender gender = 3;
  repeated string medical_conditions = 4;
}

// XVD device-specific settings
message DeviceSettings {
  float breathing_protocol_duration = 1;  // seconds
  int32 image_resolution_x = 2;
  int32 image_resolution_y = 3;
  float voxel_size = 4;  // mm
  string calibration_data = 5;
}

// Streaming DICOM data chunks
message DicomChunk {
  string scan_id = 1;
  int32 chunk_sequence = 2;
  bytes data = 3;  // Binary DICOM data
  string checksum = 4;  // For integrity verification
  bool is_final_chunk = 5;
}

enum ScanType {
  SCAN_TYPE_UNSPECIFIED = 0;
  FOUR_D_CT = 1;
  INSPIRATION_HOLD = 2;
  EXPIRATION_HOLD = 3;
}

enum Gender {
  GENDER_UNSPECIFIED = 0;
  MALE = 1;
  FEMALE = 2;
  OTHER = 3;
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Key Implementation Principles</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚀</span>
                  <span><strong>Streaming First</strong> – Use bidirectional streaming for large medical files to reduce memory usage and improve user experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔒</span>
                  <span><strong>Security by Design</strong> – Implement certificate-based authentication, encryption, and comprehensive audit logging from day one.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📊</span>
                  <span><strong>Observable Operations</strong> – Comprehensive monitoring, health checks, and performance metrics for medical-grade reliability.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚡</span>
                  <span><strong>Graceful Degradation</strong> – Implement circuit breakers, retry logic, and fallback mechanisms to handle network issues common in hospitals.</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              Building gRPC solutions for medical devices taught us that performance and security aren&apos;t trade-offs—they&apos;re both essential. When lives depend on your software, every byte of bandwidth and every millisecond of latency matters.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Share:</span>
                <a 
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://handyhasan.com/blog/grpc-medical-devices"
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