import {
    ArrowRightIcon,
    SaasMenuIcon
} from "../assets/icons"
import { logosaas } from "../assets/images"

const Header = () => {
    return (
        <header className="sticky top-0">
            <div className="flex justify-center items-center py-3 bg-black text-white gap-3">
                <p className="hidden md:block text-white/60 "> Streamline your workflow and boost your productivity </p>
                <div className="inline-flex gap-1 items-center">
                    <p> Get Started for free</p>
                    <ArrowRightIcon className="w-4 h-4 inline-flex justify-center items-center" />
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <img src={logosaas} alt="Saas logo" height={40} width={40}/>
                        <SaasMenuIcon className="h-5 w-5 md:hidden"/>
                        <nav className="hidden md:flex gap-6 text-black/60 items-center">
                            <a href="#"> About </a>
                            <a href="#"> Features </a>
                            <a href="#"> Customers </a>
                            <a href="#"> Updates </a>
                            <a href="#"> Help </a>
                            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tighter">
                                Get For Free
                            </button>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
const Hero = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight"> Version 2.0 is here </div>
                    <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                        Pathway to productivity
                    </h1>
                    <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                        Celebrate the joy of accomplishment with an app desgined to track your progress, motivate your efforts, and celebrate your success
                    </p>
                    <div className="flex gap-1 items-center mt-[30px]">
                        <button> Get for Free </button>
                        <button> Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
const DigitalLanding = () => {
    return (
    <div className="font-sans antialiased bg-[#EAEEFE]">
        <Header />
        <Hero />
    </div>)
}

export default DigitalLanding;