import React from "react";
import Nav2 from "../nav2";
import "../App.css";
import Contacts from "../contacts";
import { useAmount } from "./AmountComponent"; // Import useAmount hook to access amount
import DonateButton from "../donateButton";


export default function DonateForm() {
  const { amount, setAmount } = useAmount(); // ✅ Extract amount separately

  return (
    <>
      <Nav2 />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap:"10%",
          justifyContent: "center",
          alignItems: "center",
          height: "fit-content",
          margin:'180px',
          backgroundColor: "white",
          padding: "20px",
        }}
        id="main-donate"
      >
        <div
        className="desc"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "400px", // Constrain width for larger screens
            boxSizing: "border-box",
            height:'fit-content',
          }}
          id="donation-container2"
        >
          <h2
          className="desc"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Donation Form
          </h2>
          <p>Keep in mind that donation amounts may change depending on the donors locations.</p>

          {/* Form Inputs */}
          <div style={{ marginBottom: "1rem" }}>
            <input
            className="desc"
              type="text"
              placeholder="Name"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
            className="desc"
              type="number"
              placeholder="Year of Birth"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <input
            className="desc"
              type="email"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            {/* Update "Amount to Donate" input to show the current amount */}
            <input
            className="desc"
              type="text"
              placeholder="Amount to Donate"
              value={`Amount : $${amount}`} // Display the current amount
              readOnly
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
            className="desc"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "green",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 123, 255, 0.4)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "dark-green")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "green")
              }
            >
              Pay with Mpesa
            </button>
            <br />
            <br />
            
          </div>

        </div>

        <div>
            <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  maxWidth: "400px", // Constrain width for larger screens
                  boxSizing: "border-box",
                  height:'fit-content',
                }}
                id="container2"
            >
              <p className="desc">Prefer using paypal for donations? : N/B paypal functionality is undergoing tests at the moment, therefore use other options instead, thanks for your patience.</p>
              <DonateButton/>
            </div>

        </div>
      </div>
      
      <Contacts />
    </>
  );
}
