import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import back from "./bg.jpg";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const navigate = useNavigate();

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2);
      setBMI(bmiValue);

      if (bmiValue < 18.5) {
        setCategory("Underweight");
        setSuggestion("Increase your calorie intake with nutritious foods. Include protein, healthy fats, and carbs. Strength training can help build muscle mass.");
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setCategory("Normalweight");
        setSuggestion("Great job! Maintain a balanced diet and stay active with regular exercise to keep your body healthy.");
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setCategory("Overweight");
        setSuggestion("Consider a balanced diet with portion control and regular physical activity like walking, jogging, or strength training.");
      } else {
        setCategory("Obese");
        setSuggestion("It's important to focus on a healthier lifestyle.");
      }
    }
  };

  const resetFields = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setCategory("");
    setSuggestion("");
  };

  return (
    <div>
      <header className="header">
      <div>
          <img
            src="https://files.logomakr.com/4aazEx-LogoMakr.png"
            alt="FitPro Logo"
            className="logo-image"
          />
        </div>
        <nav>
          <ul>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/bmicalculator">BMI</Link></li>
            <li><Link to="/trainer">Diet</Link></li>
            <li><Link to="/exercise">Workout Database</Link></li>
            <li><Link to="/nutrition">Nutrition Checker</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", width: "300px", textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
          <h2>🔢 BMI Calculator</h2>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight (kg)"
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Height (cm)"
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button 
            onClick={calculateBMI} 
            style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer", borderRadius: "4px", marginBottom: "10px" }}>
            Calculate BMI
          </button>
          <button 
            onClick={resetFields} 
            style={{ width: "100%", padding: "10px", backgroundColor: "#dc3545", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}>
            Reset
          </button>
          {bmi && (
            <div style={{ marginTop: "15px" }}>
              <h3>Your BMI: {bmi}</h3>
              <p style={{ fontWeight: "bold", color: "#007bff" }}>{category}</p>
              <p style={{ fontSize: "14px", color: "#333", marginTop: "10px" }}>{suggestion}</p>
              
              <button 
                onClick={() => navigate("/trainer", { state: { category } })} 
                style={{ width: "100%", padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer", borderRadius: "4px", marginTop: "10px" }}>
                View Diet Plan
              </button>
            </div>
          )}
        </div>
      </div>
      <br/>
      <footer className="footer" style={{position:"fixed"}}>
        <div className="footer-content">
          <div className="social-icons">
            
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" style={{marginLeft:"10px"}}>
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{marginLeft:"10px"}}>
              <FaLinkedin />
            </a>
          </div>
         
        <h4 className="footer-copy">&copy; {new Date().getFullYear()} FitPro. All rights reserved.</h4>
        </div>
      </footer>
    </div>
  );
};

export default BMICalculator;
