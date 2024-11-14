import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";


const TARGET_TEXT = "Encrypt data";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";


const EncryptButton = () => {
    const intervalRef = useRef<number>(0)

    const [text, setText] = useState(TARGET_TEXT);
    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setText(TARGET_TEXT);
    };
    const scramble = () => {
        let position = 0;
        intervalRef.current = setInterval(() => {
        const scrambled = TARGET_TEXT.split("").map((char, index) => {
            if (position / CYCLES_PER_LETTER > index) {
                return char;
            }
            const randomCharIndex = Math.floor(Math.random() * CHARS.length);
            const randomChar = CHARS[randomCharIndex];
            return randomChar
        }).join("")
        setText(scrambled)
        position++;
        if (position >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
            stopScramble();
        }

        }, SHUFFLE_TIME)
    }

    return (
        <motion.button
            whileHover={{
                scale: 1.025
            }}
            whileTap={{
                scale: 0.975
            }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-medium-brown bg-neutral-blur-purple px-4 py-2 font-mono font-medium uppercase text-neutral-medium-brown transition-colors hover:text-neutral-light-purple"
        >
            <div className="relative z-10 flex items-center gap-2">
                <FiLock />
                <span> {text} </span>
            </div>
            <motion.span

initial={{

  y: "100%",

}}

animate={{

  y: "-100%",

}}

transition={{

  repeat: Infinity,

  repeatType: "mirror",

  duration: 1,

  ease: "linear",

}}

className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"

/>
        </motion.button>
    )
}

export default EncryptButton;