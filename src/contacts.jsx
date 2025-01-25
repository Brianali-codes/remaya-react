import { useState } from "react";

export default function Contacts() {
  const [email, setEmail] = useState(""); // State to store the email input
  const [responseMessage, setResponseMessage] = useState(""); // State to store the response message

  const handleSubscribe = async () => {
    if (!email) {
      setResponseMessage("Please enter a valid email address.");
      return;
    }

    const data = { email };

    try {
      const response = await fetch('https://remaya-backend.onrender.com/api/save-newsLetter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setResponseMessage(result.message || "Successfully subscribed!");
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="contacts p-5" id="contact">
        <div>
          <p className="desc font-bold text-center">Remaya Organization</p>
          <p className="desc font-bold text-center">+254-774-545-775</p>
          <br />
          <p className="desc font-bold text-center">PO BOX : 8545-00200</p>
          <p className="desc font-bold text-center">Nairobi, Kenya</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="desc font-bold text-lg text-center">Subscribe to our Newsletter</p>
          <p className="desc text-center">
            Be the first to hear important updates, see brand new resources, and find new ways to connect from the team at Remaya organization.
          </p>
          <input
            type="text"
            placeholder="Your Email Address"
            className="desc"
            id="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates the state on input change
          />
          <br />
          <button className="desc subscribe-button" onClick={handleSubscribe}>
            Subscribe
          </button>
          {responseMessage && <p className="response-message">{responseMessage}</p>} {/* Display response */}
        </div>
        <div className="flex flex-col items-center">
          <a href="#MAIN1">
            <button className="btn">Home</button>
          </a>
          <a href="#abd">
            <button className="btn">About us</button>
          </a>
          <a href="#projects">
            <button className="btn">Projects</button>
          </a>
          <a href="#mission">
            <button className="btn">Mission And Vision</button>
          </a>
          <a href="#contact">
            <button className="btn">Contact Us</button>
          </a>
        </div>
      </div>
    </>
  );
}
