'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Box, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { Mesh, Group, Vector3 } from 'three';
import { motion } from 'framer-motion';

// Lung geometry component with breathing animation
function LungGeometry({ side, breathingPhase }: { side: 'left' | 'right', breathingPhase: number }) {
  const meshRef = useRef<Mesh>(null!);
  const groupRef = useRef<Group>(null!);
  
  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      // Breathing animation - scale and subtle movement
      const scale = 0.8 + (breathingPhase * 0.3);
      meshRef.current.scale.setScalar(scale);
      
      // Subtle rotation for organic feel
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  const xPosition = side === 'left' ? -1.5 : 1.5;
  const color = side === 'left' ? '#ff6b9d' : '#4ecdc4';

  return (
    <group ref={groupRef} position={[xPosition, 0, 0]}>
      <mesh ref={meshRef}>
        {/* Main lung body - elongated sphere */}
        <sphereGeometry args={[1, 16, 32]} />
        <meshPhongMaterial 
          color={color}
          transparent
          opacity={0.7}
          shininess={100}
        />
      </mesh>
      
      {/* Bronchi tubes */}
      <mesh position={[side === 'left' ? 0.3 : -0.3, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 1.5, 8]} />
        <meshPhongMaterial color="#8e44ad" transparent opacity={0.8} />
      </mesh>
      
      {/* Alveoli representation - small spheres */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 0.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 1.5;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshPhongMaterial 
              color="#e74c3c" 
              transparent 
              opacity={0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// DICOM-style slice overlay
function DicomSlice({ slicePosition, visible }: { slicePosition: number, visible: boolean }) {
  if (!visible) return null;
  
  return (
    <mesh position={[0, slicePosition, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshBasicMaterial 
        color="#00ff00" 
        transparent 
        opacity={0.2}
        wireframe
      />
    </mesh>
  );
}

// Floating medical data points
function MedicalDataPoints() {
  const groupRef = useRef<Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const dataPoints = [
    { pos: [-2.5, 1.5, 0], label: "O₂ Sat: 98%", color: "#2ecc71" },
    { pos: [2.5, 1.5, 0], label: "CO₂: 35mmHg", color: "#3498db" },
    { pos: [0, 2.5, 0], label: "FEV1: 3.2L", color: "#e67e22" },
    { pos: [0, -2.5, 0], label: "Capacity: 4.8L", color: "#9b59b6" },
  ];

  return (
    <group ref={groupRef}>
      {dataPoints.map((point, i) => (
        <group key={i} position={point.pos as [number, number, number]}>
          <Sphere args={[0.05]}>
            <meshBasicMaterial color={point.color} />
          </Sphere>
          <Text
            position={[0, 0.2, 0]}
            fontSize={0.15}
            color={point.color}
            anchorX="center"
            anchorY="middle"
          >
            {point.label}
          </Text>
        </group>
      ))}
    </group>
  );
}

// Main Lung3D component
export default function Lung3D() {
  const [breathingPhase, setBreatheingPhase] = useState(0);
  const [showSlice, setShowSlice] = useState(false);
  const [slicePosition, setSlicePosition] = useState(0);
  const [showData, setShowData] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setBreatheingPhase(phase => {
        // Breathing cycle: inhale (0 to 1) and exhale (1 to 0)
        const newPhase = phase + 0.02;
        return newPhase > 2 ? 0 : newPhase;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentBreathingValue = breathingPhase <= 1 ? breathingPhase : 2 - breathingPhase;

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative">
      {/* Medical UI Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        {/* Header */}
        <div className="p-6 pointer-events-auto">
          <motion.div 
            className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-green-500/30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-green-400 text-xl font-mono mb-2">LUNG IMAGING SYSTEM v2.1</h1>
            <div className="text-green-300 text-sm font-mono">
              <div>PATIENT: DEMO_001 | STATUS: ACTIVE | SCAN: REAL-TIME</div>
              <div>PROCESSING: 3,290 DICOM SERIES/DAY | UPTIME: 99.97%</div>
            </div>
          </motion.div>
        </div>

        {/* Control Panel */}
        <div className="absolute bottom-6 left-6 pointer-events-auto">
          <motion.div 
            className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-blue-400 font-mono mb-4">CONTROLS</h3>
            
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                    isPlaying 
                      ? 'bg-red-600/80 hover:bg-red-500/80 text-white' 
                      : 'bg-green-600/80 hover:bg-green-500/80 text-white'
                  }`}
                >
                  {isPlaying ? 'PAUSE BREATHING' : 'START BREATHING'}
                </button>
              </div>
              
              <div>
                <label className="text-blue-300 font-mono text-sm block mb-2">
                  DICOM SLICE VIEW
                </label>
                <button
                  onClick={() => setShowSlice(!showSlice)}
                  className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                    showSlice 
                      ? 'bg-yellow-600/80 hover:bg-yellow-500/80 text-white' 
                      : 'bg-gray-600/80 hover:bg-gray-500/80 text-white'
                  }`}
                >
                  {showSlice ? 'HIDE SLICE' : 'SHOW SLICE'}
                </button>
              </div>
              
              {showSlice && (
                <div>
                  <label className="text-blue-300 font-mono text-sm block mb-1">
                    SLICE POSITION
                  </label>
                  <input
                    type="range"
                    min={-2}
                    max={2}
                    step={0.1}
                    value={slicePosition}
                    onChange={(e) => setSlicePosition(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-xs text-blue-200 font-mono mt-1">
                    {slicePosition.toFixed(1)}mm
                  </div>
                </div>
              )}
              
              <div>
                <button
                  onClick={() => setShowData(!showData)}
                  className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                    showData 
                      ? 'bg-purple-600/80 hover:bg-purple-500/80 text-white' 
                      : 'bg-gray-600/80 hover:bg-gray-500/80 text-white'
                  }`}
                >
                  {showData ? 'HIDE DATA' : 'SHOW DATA'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vital Stats */}
        <div className="absolute bottom-6 right-6 pointer-events-auto">
          <motion.div 
            className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-purple-400 font-mono mb-4">RESPIRATORY ANALYSIS</h3>
            
            <div className="space-y-3 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-gray-300">BREATHING RATE:</span>
                <span className="text-green-400">{isPlaying ? '16/min' : '0/min'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">LUNG VOLUME:</span>
                <span className="text-blue-400">{(currentBreathingValue * 100).toFixed(0)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">DICOM PROCESSED:</span>
                <span className="text-yellow-400">3,290/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">ACCURACY:</span>
                <span className="text-green-400">99.97%</span>
              </div>
            </div>
            
            {/* Breathing indicator */}
            <div className="mt-4">
              <div className="text-xs text-gray-400 font-mono mb-1">BREATHING CYCLE</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-100"
                  style={{ width: `${currentBreathingValue * 100}%` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4ecdc4" />
        <spotLight 
          position={[0, 15, 0]} 
          intensity={0.8} 
          angle={0.3} 
          penumbra={1} 
          color="#ff6b9d"
        />

        {/* Lung Models */}
        <LungGeometry side="left" breathingPhase={currentBreathingValue} />
        <LungGeometry side="right" breathingPhase={currentBreathingValue} />
        
        {/* Medical Data Points */}
        {showData && <MedicalDataPoints />}
        
        {/* DICOM Slice */}
        <DicomSlice slicePosition={slicePosition} visible={showSlice} />
        
        {/* Central Trachea */}
        <mesh position={[0, 1.8, 0]}>
          <cylinderGeometry args={[0.15, 0.2, 1, 8]} />
          <meshPhongMaterial color="#34495e" transparent opacity={0.8} />
        </mesh>
        
        {/* Interactive Controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxDistance={15}
          minDistance={3}
        />
      </Canvas>
    </div>
  );
} 