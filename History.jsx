import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
const History = ({ exercises }) => {

  return (
    <div
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/gym-equipment-empty-room_756748-50326.jpg?semt=ais_hybrid")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color:"white",
      }}
    >
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

      <div style={{ textAlign: "center", padding: "100px"}}>
        <h1 style={{fontSize:"25px"}}>Exercise History</h1>
        {exercises.length === 0 ? (
          <h4>No exercises added yet.</h4>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {exercises.map((exercise, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  padding: "20px",
                  borderRadius: "10px",
                  margin: "10px",
                  width: "250px",
                  textAlign: "left",
                  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
                }}
              >
                <p><strong>Date:</strong> {exercise.date}</p>
                <p><strong>Name:</strong> {exercise.name}</p>
                <p><strong>Duration:</strong> {exercise.minutes} minutes</p>
                <p><strong>Reps:</strong> {exercise.repetitions}</p>
                <p><strong>Weight:</strong> {exercise.weight} kg</p>
                <p style={{ color: "#7BC243" }}><strong>Calories Burned:</strong> {exercise.caloriesBurned} kcal</p>
              </div>
            ))}
          </div>
        )}
      </div>
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

export default History;
