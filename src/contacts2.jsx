import { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Snackbar({ message, type, show }) {
  return (
    <div className={`desc snackbar ${type} ${show ? "show" : "hide"}`}>
      {message}
    </div>
  );
}

export default function Contacts() {
  const [email, setEmail] = useState(""); // State to store the email input
  const [isLoading, setIsLoading] = useState(false); // State for loader animation
  const [snackbar, setSnackbar] = useState({ message: "", type: "" }); // Snackbar state

  const handleSubscribe = async () => {
    if (!email) {
      showSnackbar("Please enter a valid email address.", "error");
      return;
    }

    const data = { email };

    try {
      setIsLoading(true); // Start loader
      const response = await fetch("https://remaya-backend.onrender.com/api/save-newsLetter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setIsLoading(false); // Stop loader after success
      showSnackbar(result.message || "Successfully subscribed!", "success");
      setEmail(""); 
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false); // Stop loader on error (including CORS)

      // Handle different types of errors and display snackbar accordingly
      const errorMessage = error.name === "TypeError" && error.message.includes("Failed to fetch")
        ? "Network error. Please check your internet connection or try again later."
        : "An error occurred, or email already exists Please try again.";
      
      setTimeout(() => {
        showSnackbar(errorMessage, "error"); // Show snackbar after loader stops
      }, 300); // Delay to allow loader to finish before showing error
    }
  };

  const showSnackbar = (message, type) => {
    setSnackbar({ message, type, show: true });
  
    // After 4 seconds, hide the snackbar (start the disappear animation)
    setTimeout(() => {
      setSnackbar(prev => ({ ...prev, show: false })); // Set show to false to trigger hide
    }, 4000); // Wait 4 seconds before hiding
  };
  

  const closeSnackbar = () => {
    setSnackbar({ message: "", type: "" }); // Close the snackbar when the button is clicked
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
            type="email" // Use 'email' type for input validation
            placeholder="Your Email Address"
            className="desc"
            id="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates the state on input change
          />
          <br />
          <button
            className="desc subscribe-button flex items-center justify-center"
            onClick={handleSubscribe}
            disabled={isLoading} // Disable button during loading
          >
            {isLoading ? (
              <span className="loader mr-2"></span> // Spinner animation
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
        <div className="flex flex-col items-center">
          <a href="/"><button className="btn">Home</button></a>
          <Link to="/#abd"><button className="btn">About Us</button></Link>
          <Link to="/#projects"><button className="btn">Projects</button></Link>
          <Link to="/#mission"><button className="btn">Mission And Vision</button></Link>
        </div>
      </div>

      {/* Snackbar */}
      {snackbar.message && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          show={snackbar.show} // Pass the show state to the Snackbar
        />
      )}

      {/* Loader and Snackbar Styles */}
      <style>{`
        .loader {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #3498db;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .snackbar {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%) translateY(100px); /* Start off-screen below */
          padding: 10px 20px;
          border-radius: 5px;
          color: #fff;
          font-size: 14px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 9999;
          opacity: 0; /* Start invisible */
          transition: transform 0.5s ease, opacity 0.5s ease; /* Transition for sliding and fading */
        }

        .snackbar.show {
          transform: translateX(-50%) translateY(0); /* Slide into view */
          opacity: 1; /* Fade in */
        }

        .snackbar.hide {
          transform: translateX(-50%) translateY(100px); /* Slide out of view */
          opacity: 0; /* Fade out */
        }

        .snackbar.success {
          background-color: #4caf50;
        }

        .snackbar.error {
          background-color: #f44336;
        }

        .close-btn {
          background: none;
          color: white;
          border: none;
          font-size: 16px;
          cursor: pointer;
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}
