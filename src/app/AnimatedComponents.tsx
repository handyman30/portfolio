'use client';

import { motion as framerMotion } from 'framer-motion';

// Export motion for use in page components
export const motion = framerMotion;

// Animation variants
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const highlightVariant = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

// Typing animation
export const TypeAnimation = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(' ');
  
  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: i * 0.1,
            ease: "easeIn"
          }}
          className="inline-block mr-1.5"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}; 