import LoyalButton from "../components/atoms/LoyalButton";

const LoyalBase = () => {
    return (
        <div className="bg-primary-dark-purple h-max">
        <div className= "container mx-auto text-white"> 
            <div className="flex justify-between pt-9">
                <div>
                    Loyal Base 
                </div>
                <LoyalButton text="Request a call" buttonType="secondary"/>
            </div>

            <div className="text-center h-screen flex flex-col justify-center">
                <h1 className="font-black text-5xl pb-3"> Turn your best customers into Loyal Fans </h1>
                <p>
                    Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Join the waiting
                    list now to be among the first to experience the future of customer loyalty.
                </p>
                <div className="flex flex-col mx-auto pt-7 w-1/2 gap-y-2">
                    <input type="text" placeholder="Tell us your name"/>
                    <input type="email" placeholder="Enter your email address"/>
                    <LoyalButton text="Get early access" buttonType="primary"/>

                    <div>
                        <span> +57 Joined </span>
                    </div>
                </div>
            </div>

            <div className="text-center h-screen flex items-center justify-between">
                <div className="w-1/2">
                    <h2 className="text-3xl mb-5"> What we do </h2>
                    Loyalbaze, empowers businesses to offer digital mobile-first loyalty programs to their cutomers. With our AI Powered platform, you can easily create and
                    manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business.    
                </div>

                <div className="flex flex-col gap-y-2 p-6 bg-primary-dark-purple from-primary-dark-purple-200"> 
                    <h2 className="text-xl"> Book Consultation with us </h2>
                    <input type="text" placeholder="Enter your full name"/>
                    <input type="email" placeholder="Enter your work email"/>
                    <input type="number" placeholder="Mobile number"/>
                    <input type="text" placeholder="Company Name"/>
                    <select>
                        Select you country 
                        <option value=""> Nigeria </option>
                    </select>
                    <textarea>
                        Drop a message  
                    </textarea>
                    <LoyalButton text="Send Request" buttonType="primary" />
                </div>
            </div> 

            <hr />

            <footer className="flex justify-between">
                <div>
                    <p> 2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria.</p>
                </div>
                <h3>
                    LoyalBaze is almost here.
                </h3>
                <div>
                    <p>+234 903618 9485</p>
                </div>
            </footer>
            </div>
        </div>
    )
};

export default LoyalBase;
