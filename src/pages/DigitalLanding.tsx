import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    ArrowRightIcon,
    SaasMenuIcon,
    CheckIcon,
    InstaIcon,
    LinkedinIcon,
    PinIcon,
    XIcon,
    YoutubeIcon
} from "../assets/icons"
import { 
    logosaas,
    cogImg,
    cylinderImg,
    noodleImg,
    acmeLogo,
    apexLogo,
    celestialLogo,
    echoLogo,
    pulseLogo,
    quantumLogo,
    productImg,
    pyramidImg,
    tubeImg,
    avatar1Img,
    avatar2Img,
    avatar3Img,
    avatar4Img,
    avatar5Img,
    avatar6Img,
    avatar7Img,
    avatar8Img,
    avatar9Img,
    starDigitalImg,
    springImg
} from "../assets/images"

const Header = () => {
    return (
        <header className="z-20 sticky top-0 backdrop-blur-sm">
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
    const heroRef = useRef(null);
    const { scrollYProgress  } = useScroll({
        target: heroRef,
        offset: ['start end', 'end start']
    })
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
    return (
        <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
            <div className="container">
            <div className="md:flex items-center">
                <div className="md:w-[478px]">
                    <div className="section-text"> Version 2.0 is here </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                        Pathway to productivity
                    </h1>
                    <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                        Celebrate the joy of accomplishment with an app desgined to track your progress, motivate your efforts, and celebrate your success
                    </p>
                    <div className="flex gap-1 items-center mt-[30px]">
                        <button className="btn btn-primary"> Get for Free </button>
                        <button className="btn btn-text gap-1"> 
                            <span>
                                Learn more
                            </span>
                            <ArrowRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                    <motion.img src={cogImg} alt="cog Image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                    animate={{
                        translateY: [-30, 30]
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 2,
                        ease: "easeInOut"
                    }}
                    />
                    <motion.img src={cylinderImg} alt="cylinder image" width={220} height={220} className="hidden md:block -top-8 -left-32 md:absolute"
                    style={{
                        translateY: translateY
                    }}
                    />
                    <motion.img src={noodleImg} width={220} className="hidden lg:block md:absolute top-[524px] left-[448px] rotate-[30deg]"
                    style={{
                        rotate: 30,
                        translateY: translateY
                    }}
                    />
                </div>
            </div>
            </div>

        </section>
    )
}
const LogoTicker = () => {
    return (
        <section className="py-8 md:py-12 bg-white ">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <div className="flex gap-14 flex-none">
                        <img src={acmeLogo} alt="acme Logo" className="logo-ticker-img" />
                        <img src={apexLogo} alt="apex Logo" className="logo-ticker-img" />
                        <img src={celestialLogo} alt="celestial Logo" className="logo-ticker-img" />
                        <img src={echoLogo} alt="echo Logo" className="logo-ticker-img" />
                        <img src={pulseLogo} alt="pulse Logo" className="logo-ticker-img" />
                        <img src={quantumLogo} alt="pulse Logo" className="logo-ticker-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
const ProductShowcase = () => {
    return (
        <section className="bg-gradient-to-b from-[#FFFFFF] overflow-x-clip to-[#D2DCFF] py-24">
            <div className="container">
                <div className="section-header">
                    <div className="flex justify-center">
                        <div className="section-text"> Boost your productivity </div>
                    </div>
                    <h2 className="section-title mt-5"> A more effective way to track progress </h2>
                    <p className="section-description mt-5">
                        Effortlessly turn your ideas into a fully functional, responsive, Saas website in just minutes with this template.
                    </p>
                </div>
                <div className="relative">
                    <img src={productImg} alt="product image" className="mt-10" />
                    <img src={pyramidImg} alt="pyramid image" className="hidden md:block absolute -right-36 -top-32" width={262} height={262}/>
                    <img src={tubeImg} alt="tube image" className="hidden md:block absolute bottom-24 -left-36" height={248}/>
                </div>

            </div>
        </section>
    )
}
const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integration",
            "Basic Support",
        ]
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integration",
            "Priority Support",
        ]
    },
    {
        title: "Buisness",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integration",
            "Dedicated amount manager",
            "Custom Fields",
            "Advanced analytics",
            "Export capabilities",
            "Api access",
            "Advanced Security features"
        ]
    }
]
const Pricing = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title"> Pricing </h2>
                    <p className="section-description"> Free forever. Upgrade for unlimited tasks, better security and exclusive features </p>
                </div>
                <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
                    {
                        pricingTiers.map(({
                            title,
                            monthlyPrice,
                            buttonText,
                            popular,
                            inverse,
                            features
                        }) => (
                            <div className={`card
                                ${inverse === true && 'border-black bg-black text-white'} 
                            `}>
                                <div className="flex justify-between">
                                    <h3 className={`text-lg font-bold ${inverse === true ? 'text-white/60': ' text-black/50'}
                                        `}> {title} </h3>
                                    { popular && (
                                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 "> 
                                        <span className="bg-[linear-gradient(to_right,#DD7DDf,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium"> Popular </span>
                                    </div>
                                    )} 
                                </div>
                                <div className="flex items-baseline gap-1 mt-[30px]">
                                    <span className="text-4xl font-bold tracking-tight leading-none"> $ {monthlyPrice} </span>
                                    <span className="tracking-tight font-bold text-black/50"> /month</span>    
                                </div>
                                <button className={`btn btn-primary w-full mt-[30px] ${inverse && 'bg-white text-black'}`}> {buttonText} </button>
                                <ul className="flex flex-col gap-5 mt-8">
                                    {
                                        features.map((feature) => ((
                                            <li className="text-sm flex items-center gap-4">
                                                <CheckIcon className="h-6 w-6"/>
                                                <span>{feature}</span>
                                            </li>
                                        )))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
const testimonials = [
    {
      text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      imageSrc: avatar1Img,
      name: "Jamie Rivera",
      username: "@jamietechguru00",
    },
    {
      text: "Our team's productivity has skyrocketed since we started using this tool. ",
      imageSrc: avatar2Img,
      name: "Josh Smith",
      username: "@jjsmith",
    },
    {
      text: "This app has completely transformed how I manage my projects and deadlines.",
      imageSrc: avatar3Img,
      name: "Morgan Lee",
      username: "@morganleewhiz",
    },
    {
      text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
      imageSrc: avatar4Img,
      name: "Casey Jordan",
      username: "@caseyj",
    },
    {
      text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      imageSrc: avatar5Img,
      name: "Taylor Kim",
      username: "@taylorkimm",
    },
    {
      text: "The customizability and integration capabilities of this app are top-notch.",
      imageSrc: avatar6Img,
      name: "Riley Smith",
      username: "@rileysmith1",
    },
    {
      text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      imageSrc: avatar7Img,
      name: "Jordan Patels",
      username: "@jpatelsdesign",
    },
    {
      text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      imageSrc: avatar8Img,
      name: "Sam Dawson",
      username: "@dawsontechtips",
    },
    {
      text: "Its user-friendly interface and robust features support our diverse needs.",
      imageSrc: avatar9Img,
      name: "Casey Harper",
      username: "@casey09",
    },
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const TestimonialColumn = ({className, testimonials}: {className?: string, testimonials: {
    text: string,
    imageSrc: string,
    name: string,
    username: string
}[]})=> {
return (
    <div className={`flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] ${className}`}>
        {
            testimonials.map(({ text, imageSrc, name, username}) => (
                <div className="card">                            
                    <div>{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                        <div>
                            <img src={imageSrc} className="h-10 w-10 rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-medium tracking-tight leading-5"> {name} </div>
                            <div className="leading-5 tracking-tight"> {username} </div>
                        </div>
                    </div>
                </div>
            )) 
        }
    </div>
    )
}
const Testimonial = () => {
    return (
        <section className="bg-white ">
            <div className="container">
                <div className="section-header">
                    <div className="flex justify-center">
                        <div className="section-text"> Testimonials </div>
                    </div>
                    <h2 className="section-title"> What our users say </h2>
                    <p className="section-description">
                        From intuitive design to powerful features, our app has become an essential tool for users around the world.
                    </p>
                </div>
                <div className="flex justify-center gap-6">
                  <TestimonialColumn testimonials={firstColumn} />
                  <TestimonialColumn className="hidden md:flex" testimonials={secondColumn} />
                  <TestimonialColumn className="hidden lg:flex" testimonials={thirdColumn} />
                </div>
            </div>
            
        </section>
    )
}
const CallToAction = () => {
    return (
        <section className="bg-gradient-to-b from-white to-[#D2DCF2] py-24 overflow-x-clip">
            <div className="container">
                <div className="section-header relative">
                    <h2 className="section-title"> Sign up for free today </h2>
                    <p className="section-description mt-5">
                        Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts
                    </p>
                    <img src={starDigitalImg} alt="Star Image" width={360} className="absolute -left-[350px] -top-[137px]" />
                    <img src={springImg} alt="Spring Image" width={360} className="absolute -right-[331px] -top-[19px]" />
                </div>
                <div>
                    <div className="flex gap-2 mt-10 justify-center">
                        <button className="btn btn-primary"> Get for free </button>
                        <button className="btn btn-text gap-1">
                            <span> Learn more </span>
                            <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
         
        </section>
    )
}
const Footer = () => {
    return (
        <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
            <div className="container">
                <div className="inline-flex relative before:content-[''] before:blur before:w-full before:top-2 before:bottom-0 before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]  before:absolute">
                    <img src={logosaas} alt="Saas logo" height={40} width={40} className="relative"/>
                </div>
                <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
                    <a href="#"> About </a>
                    <a href="#"> Features </a>
                    <a href="#"> Customers </a>
                    <a href="#"> Pricing </a>
                    <a href="#"> Help </a>
                    <a href="#"> Careers </a>
                </nav>
                <div className="flex justify-center gap-6 mt-6">
                    <XIcon />
                    <InstaIcon />
                    <LinkedinIcon />
                    <PinIcon />
                    <YoutubeIcon />
                </div>
                <p className="mt-6">&copy; 2024 Your Company Inc. All Right Reserved.</p>
            </div>
        </footer>
    )
}
const DigitalLanding = () => {
    return (
    <div className="font-sans antialiased bg-[#EAEEFE]">
        <Header />
        <Hero />
        <LogoTicker />[]
        <ProductShowcase />
        <Pricing />
        <Testimonial />
        <CallToAction />
        <Footer />
    </div>)
}

export default DigitalLanding;