import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

const VARIANTS = {
    top: { 
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
  
  };
const AnimatedBurger = () => {
    const [active, setActive] = useState(false)
    return (
        <MotionConfig
        transition={{
            duration: 0.5,
            ease: "easeInOut"
        }}
        >
            <motion.button
                initial={false}
                animate={active ? "open": "closed"}
                onClick={() => setActive((pv) => !pv)}
                className="relative h-20 w-20 rounded-full bg-neutral-blur-purple transition-colors hover:bg-purple-to"
            >
                <motion.span 
                    variants={VARIANTS.top}
                    className="absolute "
                />
            </motion.button>
        </MotionConfig>
    )

}

export default AnimatedBurger