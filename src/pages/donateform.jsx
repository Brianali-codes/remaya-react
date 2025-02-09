import React from "react";
import Nav2 from "../nav2";
import "../App.css";
import Contacts from "../contacts";
import { useAmount } from "./amountComponent"; // Import useAmount hook to access amount


export default function DonateForm() {
  const { amount, setAmount } = useAmount(); // ✅ Extract amount separately

  return (
    <>
      <Nav2 />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <div
        className="desc"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "90%",
            maxWidth: "400px", // Constrain width for larger screens
            boxSizing: "border-box",
          }}
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
                backgroundColor: "#007bff",
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
                (e.target.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#007bff")
              }
            >
              Submit.
            </button>
          </div>
        </div>
      </div>
      <Contacts />
    </>
  );
}
