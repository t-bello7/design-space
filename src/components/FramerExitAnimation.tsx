// This a framer motion example of using useAnimate and UserPresence to create an Exit Animation
import { useEffect, useState } from "react";
import { AnimatePresence, useAnimate, usePresence } from "framer-motion";

const FramerExitAnimation = () => {
    const [ show, setShow ] = useState<boolean>(false)
    const [ isPresent, safeToRemove ] = usePresence()
    const [ scope, animate ] = useAnimate() // returns a scope and animate function

    console.log(isPresent)
    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(scope.current, { opacity: 1 }, { duration: 5, type: "decay"})
                await animate("li", { opacity: 1, x: 0 })
                console.log('i entered')
            }
            enterAnimation()
        } else {
            const exitAnimation = async () => {
                await animate("li", { opacity: 0, x: -100 })
                console.log('I exited')
                await animate(scope.current, { opacity: 0 })
                safeToRemove()
            }
            exitAnimation()
        }
    }, [isPresent])
    
    return (
        <AnimatePresence>
            <button onClick={() => {setShow(!show)}}> click on me to test exit animation </button>
            {
                show && (
                <ul ref={scope}>
                    <li> Testing declarative animate </li>
                    <li> Improving animation skills with framer motion</li>
                    <li> useAnimate vs {'<motion.div/>'} </li>
                </ul> )
            }
          
        </AnimatePresence>
    )
}

export default FramerExitAnimation; 