import LoyalButton from "../components/atoms/LoyalButton";
import LoyalInput from "../components/atoms/LoyalInput";
import callIcon from "../assets/icons/call.svg";
import homeIcon from "../assets/icons/home.svg";
import profileIcon from "../assets/icons/profile.svg";
import mailIcon from "../assets/icons/mail.svg"

const LoyalBase = () => {
    return (
        <div className="bg-primary-dark-purple max-h-full font-satoshi">
            <div className= "container mx-auto text-white"> 
                <div className="flex justify-between pt-9">
                    <div>
                        Loyal Base 
                    </div>
                    <LoyalButton text="Request a call" buttonType="secondary"/>
                </div>

                <div className="text-center min-h-screen flex flex-col justify-center">
                    <h1 className="font-black text-5xl pb-3"> Turn your best customers <br /> into <span className="text-neutral-light-purple"> Loyal Fans </span>  </h1>
                    <p>
                        Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Join the waiting
                        list now to be among the first to experience the future of customer loyalty.
                    </p>
                    <div className="flex flex-col mx-auto pt-7 w-1/2 gap-y-2">
                        <LoyalInput inputType="text" placeholder="Tell us your name" icon={profileIcon}/>
                        <LoyalInput inputType="email" placeholder="Enter your email address" icon={mailIcon}/>
                        <LoyalButton text="Get early access" buttonType="primary"/>

                        <div>
                            <span> +57 Joined </span>
                        </div>
                    </div>
                </div>

                <div className="text-center my-24 flex flex-col gap-8 items-center justify-between md:flex-row">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl mb-5"> What we do </h2>
                        Loyalbaze, empowers businesses to offer digital mobile-first loyalty programs to their cutomers. With our AI Powered platform, you can easily create and
                        manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business.    
                    </div>

                    <div className="flex w-full flex-col gap-y-4 p-12 bg-neutral-blur-purple rounded-3xl md:w-1/2"> 
                        <h2 className="text-xl text-left"> Book Consultation with us </h2>
                    
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
