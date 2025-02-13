import React, { useState } from 'react';
import Nav2 from "../nav2";
import "../App.css";
import DN from "../assets/donate.webp";
import Contacts2 from "../contacts2";
import { Link, useNavigate } from "react-router-dom";
import { useAmount } from "./AmountComponent";

export default function Donate() {
  const { amount, setAmount } = useAmount();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false); 

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setAmount(value ? parseInt(value, 10) : "");
    setIsEditing(true); 
  };

  const handleDonateClick = () => {
    navigate("/donateform", { state: { amount } });
  };
  const handleSupportClick = () =>{
    navigate("/support", { state: { amount } });
  }
  const handleHomeClick = () =>{
    navigate("/", { state: { amount } });
  }

  const handlePresetAmountClick = (amount) => {
    setAmount(amount);
    setIsEditing(true); // Set isEditing to true when a preset amount is selected
  };

  return (
    <>
      <Nav2 />
      <div className="h-screen flex flex-row justify-center items-center bg-white p-5" id="donation-container">
        <div className="w-3/6 flex flex-col justify-center items-start doncont">
          <img src={DN} alt="Donate Img" className="w-fit rounded-t-3xl" />
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
            <button className="don-btn desc" onClick={() => handlePresetAmountClick(50)}>$ 50</button>
            <button className="don-btn desc" onClick={() => handlePresetAmountClick(100)}>$ 100</button>
            <button className="don-btn desc" onClick={() => handlePresetAmountClick(500)}>$ 500</button>
            <button className="don-btn desc" onClick={() => handlePresetAmountClick(1000)}>$ 1000</button>

            <input 
              type="text" 
              className="don-input text-center" 
              placeholder={isEditing ? `Amount: $ ${amount}` : "Edit Amount"} 
              value={isEditing ? `Edit Amount: $ ${amount}` : ""} 
              onChange={handleCustomAmountChange} 
            />

            <button className="don-btn2 desc" onClick={handleDonateClick}>Donate</button>
            <button className="don-btn desc" onClick={handleSupportClick}>Support Instead</button>
            <button className="don-btn desc" onClick={handleHomeClick}>Back Home</button>
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