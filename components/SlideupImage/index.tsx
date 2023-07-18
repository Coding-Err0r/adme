"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import FlipAnimation from "../FlipAnimation";

interface Props {
  duration: number;
  frontSide: ReactNode;
  backSide: ReactNode;
  leftToRight: boolean;
  bottomToTop: boolean;
}
const SlideupImage = ({
  duration,
  frontSide,
  backSide,
  leftToRight,
  bottomToTop,
}: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (duration === undefined || duration === null || duration === 0) {
    duration = 0.5;
  } else {
    duration = duration - 0.4;
  }
  if (leftToRight === undefined || leftToRight === null) {
    leftToRight = false;
  }
  if (bottomToTop === undefined || bottomToTop === null) {
    bottomToTop = false;
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
        <FlipAnimation
          rightToLeft={false}
          leftToRight={leftToRight}
          topToBottom={false}
          bottomToTop={bottomToTop}
          componentFront={frontSide}
          componentBack={backSide}
        />
      </motion.div>
    </>
  );
};

export default SlideupImage;
