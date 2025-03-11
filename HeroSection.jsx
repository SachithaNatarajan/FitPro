import React from "react";
import { useNavigate } from "react-router-dom";
import "./Section.css";
import background from "./bg.jpg";

const HeroSection = () => {
  const navigate = useNavigate(); 

  return (
    <div className="hero" style={{ backgroundImage: `url(${background})` }}>
      <div className="overlay"></div>
      <div className="content">
        <h1>Your Daily Workout Partner</h1>
        <h5>Track your daily exercises and stay fit with us.</h5>
        <button className="t-button" onClick={() => navigate("/dashboard")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
