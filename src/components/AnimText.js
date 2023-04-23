import { motion } from "framer-motion";

const MotionSpan = motion.span;

const AnimText = ({ text, color, lineHeight, duration }) => {
  const variants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 }
  };

  const transition = {
    duration,
    ease: "easeInOut"
  };

  return (
    <MotionSpan
      variants={variants}
      transition={transition}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block", color, lineHeight }}
    >
      {text}
    </MotionSpan>
  );
};

export default AnimText;
