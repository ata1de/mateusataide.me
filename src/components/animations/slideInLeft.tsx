import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface SlideInProps {
    children: ReactNode;
    side?: 'left' | 'right';
    delay?: number;
}

const SlideIn = ({ children, delay = 0, side = 'left' }: SlideInProps) => {
  const slideLeftInVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRightInVariants = {
    hidden: { opacity: 0, x: +20 },
    visible: { opacity: 1, x: 0 },
  };

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={side === "left" ? slideLeftInVariants : slideRightInVariants}
      transition={{ type: "spring", stiffness: 50, damping: 15, delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
