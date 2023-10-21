import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";

type ChildrenWithNoProps = {
  children: ReactNode;
  left: boolean;
};

export default function Slide({ children, left }: ChildrenWithNoProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const threshold = 0.5;

  const variants = {
    hidden: {
      x: left ? 100 : -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "easeInOut",
      },
    },
  };

  useEffect(() => {

    if (!animationComplete) {
      void controls.start("hidden");
    }
  }, [controls, animationComplete]);

  // Make shift in view check, utilizes a more robust threshold operation
  // for ensuring animations are triggered a better time. Motion in view
  // api lacks robust functionality for this. Thus, the solution
  useEffect(() => {
    const checkInView = () => {
      if (ref.current) {
        const rect = (ref.current as HTMLElement).getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * threshold) {
          if (!animationComplete) {
           void controls.start("visible");
            setAnimationComplete(true);
          }
        }
      }
    };

    window.addEventListener("scroll", checkInView);
    checkInView();

    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, [controls, animationComplete]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
