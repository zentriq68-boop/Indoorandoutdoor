import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  staggerChildren?: number;
  threshold?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'slideUp',
  delay = 0,
  duration = 0.8,
  distance = 50,
  className = "",
  staggerChildren = 0,
  threshold = 0.1,
  once = true,
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: variant === 'slideLeft' ? distance : variant === 'slideRight' ? -distance : 0,
      y: variant === 'slideUp' ? distance : variant === 'slideDown' ? -distance : 0,
      scale: variant === 'scale' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration,
        delay,
        staggerChildren,
        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for premium feel
      },
    },
  };

  if (variant === 'none') {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
