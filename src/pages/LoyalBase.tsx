import LoyalButton from "../components/atoms/LoyalButton";
import LoyalInput from "../components/atoms/LoyalInput";
import callIcon from "../assets/icons/call.svg";
import homeIcon from "../assets/icons/home.svg";
import profileIcon from "../assets/icons/profile.svg";
import mailIcon from "../assets/icons/mail.svg";
import ellipseImg from "../assets/images/ellipse.svg";
import ellipseOneImg from "../assets/images/ellipse-1.svg";
import ellipseTwoImg from "../assets/images/ellipse-2.svg";
import highlightImg from "../assets/images/highlight.svg";
import lineImg from "../assets/images/line.svg";
import starImg from "../assets/images/star.svg";
import logo from "../assets/images/loyal-logo.svg"
import vectorImg from "../assets/images/vector.svg";
import "../assets/style/loyal.scss";

const LoyalBase = () => {
    return (
        <div className="bg-primary-dark-purple max-h-full relative font-satoshi">
            <div className= "container mx-auto text-white"> 
                <div className="flex justify-between z-10 pt-9">
                    <img src={logo} alt="logo"/>
                    <LoyalButton text="Get Priority Access" buttonType="secondary"/>
                </div>
                <img className="image-bg image-bg__ellipse-one z-10 invisible md:visible" src={ellipseImg} alt="ellipse"/>
                <img className="image-bg image-bg__ellise-three z-10 invisible md:visible" src={ellipseTwoImg} alt="ellipse-two"/>

                <div className="text-center min-h-screen flex flex-col relative justify-center">
                    <img className="image-bg image-bg__star-one z-10 invisible md:visible" src={starImg} alt="star-img"/>
                    <h1 className="font-black text-5xl pb-3 z-20 leading-relaxed"> Turn your best customers <br /> into <span className="text-neutral-light-purple"> Loyal Fans </span>  </h1>
                    <img className="image-bg image-bg__star-two z-10 invisible md:visible" src={starImg} alt="star-img"/>
                    
                    <img className="image-bg image-bg__ellipse-two z-10 invisible md:visible" src={ellipseOneImg} alt="ellipse-one"/>
                    
                    <p className="z-20"> 
                    Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.
                    </p>
                    <div className="flex flex-col mx-auto pt-7 w-1/2 gap-y-2 z-20">
                        <img className="image-bg image-bg__vector z-10 invisible md:visible" src={vectorImg} alt="vector-img"/>
                        <LoyalInput inputType="text" placeholder="Tell us your name" icon={profileIcon}/>
                        <LoyalInput inputType="email" placeholder="Enter your email address" icon={mailIcon}/>
                        <LoyalButton text="Get early access" buttonType="primary"/>

                        <div className="flex items-center justify-center gap-10">
                        <div className="relative flex">
                            <div className="z-30 circle bg-blue">G</div>
                            <div className="z-20 circle bg-neutral-light-purple">O</div>
                            <div className="z-10 circle bg-blue">U</div>
                            <div className="z-0 circle bg-neutral-light-purple">M</div>
                        </div>
                            <span> +57 Joined </span>
                        </div>
                    </div>
                    <img className="image-bg image-bg__star-three z-10 w-12 invisible md:visible" src={starImg} alt="star-img"/>
                    <img className="image-bg image-bg__star-four z-10 invisible md:visible" src={starImg} alt="star-img"/>

                </div>

                <div className="text-center my-24 flex flex-col gap-8 items-center justify-between md:flex-row">
                    <img className="image-bg image-bg__ellipse-four z-10 invisible md:visible" src={ellipseImg} alt="ellipse-img"/>
                    <img className="image-bg image-bg__star-five z-10 invisible md:visible" src={starImg} alt="star-img"/>


                    <div className="w-full relative z-20 md:w-1/2">
                        <span className="flex flex-col items-center">
                            <h2 className="text-5xl font-extrabold mb-5 z-20"> Priority Access </h2>
                            <img className="z-10 w-32" src={lineImg} alt="line-img"/>
                        </span>
                        <p>
                        Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available. Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!
                        </p>   
                    </div>
                    
                    <img className="image-bg  image-bg__highlight z-10 invisible md:visible" src={highlightImg} alt="highlight-img"/>
                    <img className="image-bg image-bg__highlight-one z-10 invisible md:visible" src={highlightImg} alt="highlight-img"/>

                    <div className="flex w-full flex-col gap-y-4 p-12 z-20 bg-neutral-blur-purple rounded-3xl md:w-1/2"> 

                        <h2 className="text-xl font-bold text-left"> Book Consultation with us </h2>
                    
                        <LoyalInput inputType="text" placeholder="Enter your full name"/>
                        <LoyalInput inputType="email" placeholder="Enter your work email"/>
                        <LoyalInput inputType="number" placeholder="Mobile number"/>
                        <LoyalInput inputType="text" placeholder="Company Name"/>
                        <select className="bg-transparent border rounded p-1">
                            <option value=""> Select a country </option>
                        </select>
                        <textarea placeholder="Drop a message" className="bg-transparent placeholder:text-white p-1 h-32 border rounded p-1">
                        
                        </textarea>
                        <LoyalButton text="Send Request" buttonType="primary" />
                    </div>

                    <img className="image-bg image-bg__star-six w-12 z-10 invisible md:visible" src={starImg} alt="star-img"/>
                    <img className="image-bg image-bg__star-seven w-12 z-10 invisible md:visible" src={starImg} alt="star-img"/>
                </div> 

                <hr />

                <footer className="my-5 flex flex-col gap-y-4 items-center justify-between md:flex-row">
                    <div className="flex items-center gap-x-3">
                        <img src={homeIcon} alt="home-icon"/>
                        <span> 2nd Floor, The Garnet Building, KM14 <br /> Lekki Epe Expressway, Lagos, Nigeria.</span>
                    </div>
                    <h3>
                        LoyalBaze is almost here.
                    </h3>
                    <div className="flex items-center gap-x-3">
                        <img src={callIcon} alt="call-icon"/>
                        <span>+234 903618 9485</span>
                    </div>
                </footer>
            </div>
        </div>
    )
};

export default LoyalBase;
