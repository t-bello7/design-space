import { useState } from "react";
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

const FramerToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
    )
}

export default FramerToggleButton