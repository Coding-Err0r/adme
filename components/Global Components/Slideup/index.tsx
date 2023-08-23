"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  duration: number;
  component: ReactNode;
}
const Slideup = ({ duration, component }: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (duration === undefined || duration === null || duration === 0) {
    duration = 0.5;
  } else {
    duration = duration - 0.4;
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: duration }}
      >
        {component}
      </motion.div>
    </>
  );
};

export default Slideup;
