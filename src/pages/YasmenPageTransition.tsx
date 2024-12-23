import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
    yasmenImg
} from "../assets/images"


const transistion = {
    duration: .6,
    // ease: [.6, .01, -.05, .9]
    ease: [ 0.43, 0.13, 0.23, 0.96 ]
}

const YasmenPageTransistion = () => {
    return (
        <motion.main className="bg-[#e8dbcd]">
            <section className="mx-auto  container">
                <div className="w-full min-h-screen relative">
                    <div className="flex uppercase justify-between items-center pt-10">
                        <span> Jon freeman </span>
                        <span className="border border-black w-[60px] h-[60px] justify-center rounded-full inline-flex items-center text-center">
                            Menu
                        </span>
                    </div>
                    <div className="absolute translate-y-[-50%] top-[50%] w-[35ch] h-[50vh] translate-x-[-50%] left-[50%] space-y-5">
                        <div className="h-[45vh] w=[35vh] overflow-clip ">
                            <Link to="/about-yasmen">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={transistion}
                                    src={yasmenImg} />
                            </Link>
                        </div>
                        <motion.div 
                        exit={{opacity: 0}}
                         transition={transistion} className=" flex justify-between text-black">
                            <p> Jon freemnan </p>
                            <span>
                                20.10.3040
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.main>
    )
}

export default YasmenPageTransistion