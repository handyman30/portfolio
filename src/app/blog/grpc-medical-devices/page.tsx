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
              <span className="px-3 py-1 bg-[#1f3a5f] text-white rounded-full text-sm">
                4DMedical
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Talking to medical devices over gRPC</h1>
            <p className="text-gray-600 mb-6">April 20, 2024 • 12 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-[#e6e4dd]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">What made this hard</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>1GB+ DICOM files</strong> – a single scan is large, and we needed to move it without buffering the whole thing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Patient data</strong> – HIPAA obligations meant encryption and audit trails weren&apos;t optional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Low latency</strong> – the device and the backend needed to talk in close to real time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Mixed platforms</strong> – Windows on the device, Linux in the cloud</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Where we landed</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>80% less bandwidth</strong> – compared with the REST approach we started from</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>3,290+ scans a day</strong> – moving through the pipeline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>No dropped scans</strong> – chunk checksums and retries cover the network hiccups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>50+ clinics</strong> – running the same client</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              The XVD hardware sits in a clinic and produces lung scans. The analysis runs in our cloud backend. So the scan has to get from the box to the cloud, and a single scan is over a gigabyte. We started with REST, because that&apos;s what you reach for. A 1GB scan serialised as JSON over HTTP/1.1 is slow, and you can&apos;t stream it without bolting something on. We moved to gRPC. Bandwidth dropped about 80%, which I didn&apos;t expect to be that large. The rest is the parts that took longer than the protocol switch did.
            </p>
            
            <div className="mb-6 bg-gray-50 p-5 rounded-lg border border-[#e6e4dd]">
              <h4 className="font-semibold mb-3 text-[#1f3a5f]">gRPC vs REST for this job</h4>
              <div className="bg-white p-4 rounded-md mb-4 border border-[#e6e4dd]">
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-[#e6e4dd] rounded-md p-3 bg-gray-50">
                      <strong>REST</strong><br/>
                      <span className="text-xs">• 1GB+ JSON payloads<br/>• HTTP overhead<br/>• No streaming<br/>• Polling required</span>
                    </div>
                    <div className="border border-[#e6e4dd] rounded-md p-3 bg-gray-50">
                      <strong>gRPC</strong><br/>
                      <span className="text-xs">• Binary Protocol Buffers<br/>• HTTP/2 multiplexing<br/>• Bidirectional streaming<br/>• Real-time push</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                The two that mattered for us were the binary wire format and real streaming. We&apos;re pushing big files on a schedule from boxes on patchy networks, so those two cover most of what we needed. The rest of the list is nice to have.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">The Protocol Buffer schema</h4>
              <p className="text-gray-700 mb-4">
                You write the schema first, both ends generate off it, and the C# device client and the Go backend stop disagreeing about what a field means. That alone was worth the move. Here&apos;s a trimmed-down version of what we used for the imaging data:
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
              <h4 className="font-semibold mb-3 text-gray-900">A few things that mattered</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#1f3a5f] mr-2">•</span>
                  <span><strong>Stream, don&apos;t buffer</strong> – chunking the scan over a stream keeps memory flat on the device. The box is also running the acquisition, so we couldn&apos;t have it holding a gigabyte in RAM to send a gigabyte.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1f3a5f] mr-2">•</span>
                  <span><strong>Do security first</strong> – cert-based auth, encryption in transit, audit logging. We did these on day one because retrofitting them onto a working pipeline is miserable, and I&apos;ve done that before.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1f3a5f] mr-2">•</span>
                  <span><strong>Make it observable</strong> – health checks and per-stream metrics. When a scan stalls in a clinic in another state, you want to know why without anyone driving out there.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1f3a5f] mr-2">•</span>
                  <span><strong>Expect bad networks</strong> – hospital networks drop. Retries, a circuit breaker, a resume-from-chunk fallback. A connection cutting out mid-scan is normal, not an edge case.</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              gRPC didn&apos;t solve anything on its own. The chunking, the retries, the auth, the metrics — that&apos;s where the actual work was, and most of it you&apos;d write whatever protocol you picked. What gRPC gave us was a sane place to put it. For moving big scans off a box on a network you don&apos;t control, I&apos;d pick it again.
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

            <div className="mt-8 pt-6 border-t border-[#e6e4dd]">
              <Link
                href="/#writing"
                className="inline-flex items-center text-[#1f3a5f] hover:text-[#16293f] transition-colors"
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