import { motion, AnimatePresence, HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";

interface PageAnimationProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

const PageAnimation = ({ children, ...props }: PageAnimationProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={props.id ?? "default-key"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimation;
