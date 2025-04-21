import { Variants } from 'framer-motion';

export const fadeInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}; 