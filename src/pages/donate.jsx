import Nav2 from "../nav2"
import '../App.css'
import DN from '../assets/donate.jpg'
import Contacts2 from "../contacts2";
import { Link } from "react-router-dom";
import { useAmount } from "./amountComponent";
import { AmountComponent } from "./amountComponent";

export default function Donate() {
    const { amount, setAmount } = useAmount(); // ✅ Extract amount separately

    return (
        <>
            <Nav2 />
            <div className="h-screen flex flex-row justify-center items-center bg-white p-5" id="donation-container">
                <div className="w-3/6 flex flex-col justify-center items-start doncont">
                    <img src={DN} alt="Donate Img" className="w-fit rounded-t-3xl"/>
                    <br />
                    <p className="text-3xl font-bold desc">Make A Donation.</p>
                    <p className="font-bold desc">You can make a difference.</p>
                    <p className="text-md desc">
                        <span className="text-blue-500 font-bold desc">Why Donate to REMAYA Organization?</span> 
                        Your donations support education, gender equality, and outreach projects, empowering underprivileged communities. 
                        REMAYA provides comprehensive assistance to children, advocates for equal opportunities, and engages with vulnerable populations. 
                        Join us in fostering dignity, hope, and positive change locally and globally.
                    </p>
                    <p className="font-bold desc">We make a life by what we give.</p>
                </div>

                <div className="w-3/6 flex flex-col justify-center items-center p-3 doncont">
                    <div className="donation-box">
                        <button className="don-btn desc" onClick={() => setAmount(10)}>10$</button>
                        <button className="don-btn desc" onClick={() => setAmount(50)}>50$</button>
                        <button className="don-btn desc" onClick={() => setAmount(500)}>500$</button>
                        <button className="don-btn desc" onClick={() => setAmount(1000)}>1000$</button>

                        {/* ✅ Correctly display amount in input */}
                        <input type="text" className="don-input" value={`Amount: $${amount}`} readOnly />

                        <input type="text" className="don-input" placeholder="Custom Amount." />
                        <Link to="/donateform"><button className="don-btn desc">Donate</button></Link>
                        <Link to="/donateform"><button className="don-btn desc">Support Instead</button></Link>
                    </div>

                    <p>If you can donate a higher amount, consider supporting us instead <Link to="/support"><span className="text-blue-500 cursor-pointer">Here</span></Link></p>
                    
                    <p className="desc text-center">
                        "Giving is more than just a donation; it's a powerful act of kindness that transforms lives and uplifts communities. 
                        Your generosity can bring hope, education, and empowerment to those in need, creating a ripple effect of positive change. 
                        Together, we can make a lasting difference."
                    </p>
                    
                    <p className="text-2xl font-bold desc text-center">Gifts Make an Impact.</p>
                </div>
            </div>

            <Contacts2 />
        </>
    );
}
