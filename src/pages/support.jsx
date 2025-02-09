import Contacts from "../contacts";
import Nav2 from "../nav2";

export default function Support() {
  return (
    <>
      <Nav2 />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "120vh",
          backgroundColor: "#f7f9fc",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "90%",
            maxWidth: "500px",
            boxSizing: "border-box",
          }}
        >
          <h2
          className="desc"
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Support Us.
          </h2>

          {/* Name */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Name</label>
            <input
            className="desc"
              type="text"
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "1rem" }}>
        
            <label className="desc">Email</label>
            <input
            className="desc"
              type="email"
              placeholder="Your Email"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
              required
            />
          </div>

          {/* Support Type */}
          <div style={{ marginBottom: "1rem" }}>
          
            <label className="desc">How Would You Like to Support Us?</label>
            <select
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            >
              <option value="donation" className="desc">Monetary Donation</option>
              <option value="volunteer" className="desc">Volunteering</option>
              <option value="sponsorship" className="desc">Sponsorship</option>
              <option value="other" className="desc">Other</option>
            </select>
          </div>

          {/* Donation Amount */}
          <div style={{ marginBottom: "1rem" }}>
            
            <label className="desc">Donation Amount (Optional)</label>
            <input
            className="desc"
              type="number"
              placeholder="Amount in USD"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "1rem" }}>
            <label className="desc">Message/Notes</label>
            <textarea
            className="desc"
              placeholder="Your message..."
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
                resize: "none",
              }}
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
            className="desc"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "blue",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(40, 167, 69, 0.4)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "black")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "blue")
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Contacts/>
    </>
  );
}
