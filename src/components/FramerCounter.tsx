import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const FramerCounter = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
      const animation = animate(count, 100, { duration: 10 });

      return animation.stop;
    }, []);

    return <motion.h1>{rounded}</motion.h1>;
}

export default FramerCounter;