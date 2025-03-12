import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
const Nutrition = () => {
  const [activeTab, setActiveTab] = useState("mealPlan");

  return (
    <div
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/dieting-fitness-athletic-bodybuilder-pose-isolated-black-background-man-with-muscular-body-back-sport-workout-coach-sportsman-vest_474717-31918.jpg")`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
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

      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            width: "350px",
            padding: "100px",
            background: "rgba(255, 255, 255, 0.8)", 
            borderRight: "1px solid #ddd",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>🥗 Nutrition</h3>
          <div onClick={() => setActiveTab("mealPlan")} style={{
              padding: "10px",
              cursor: "pointer",
              background: activeTab === "mealPlan" ? "#007bff" : "transparent",
              color: activeTab === "mealPlan" ? "white" : "black",
            }}>
            Meal Plan
          </div>
          <div onClick={() => setActiveTab("waterIntake")} style={{
              padding: "10px",
              cursor: "pointer",
              background: activeTab === "waterIntake" ? "#007bff" : "transparent",
              color: activeTab === "waterIntake" ? "white" : "black",
            }}>
            Water Intake
          </div>
          <div onClick={() => setActiveTab("stepTracker")} style={{
              padding: "10px",
              cursor: "pointer",
              background: activeTab === "stepTracker" ? "#007bff" : "transparent",
              color: activeTab === "stepTracker" ? "white" : "black",
            }}>
            Step Tracker
          </div>
        </div>

        <div style={{ flex: 1, padding: "100px", background: "rgba(255, 255, 255, 0.9)", borderRadius: "10px" }}>
          {activeTab === "mealPlan" && <MealPlan />}
          {activeTab === "waterIntake" && <WaterIntake />}
          {activeTab === "stepTracker" && <StepTracker />}
        </div>
      </div>
      <footer className="footer" style={{position:"relative"}}>
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

const MealPlan = () => {
  const [meals, setMeals] = useState({
    date: "yyyy-mm-dd",
    breakfast: "",
    lunch: "",
    dinner: "",
    snacks: "",
    breakfastGrams: "",
    lunchGrams: "",
    dinnerGrams: "",
    snacksGrams: "",
    totalCalories: 0
  });
  
  const handleChange = (e) => {
    setMeals({ ...meals, [e.target.name]: e.target.value });
  };

  const foodOptions = {
    breakfast: { "Oatmeal": 71, "Scrambled Eggs": 149, "Wheat Bread": 247, "Greek Yogurt": 61, "Peanut Butter": 588, "Banana": 89, "Apple": 52, "Idli": 132 },
    lunch: { "Grilled Chicken": 165, "Brown Rice": 112, "Dal": 116, "Roti (Wheat)": 297, "Paneer": 265, "Fish (grilled)": 208, "Orange": 47 },
    dinner: { "Grilled Fish": 206, "Rice (cooked)": 130, "Chicken Stir-Fry": 175, "Roasted Vegetables": 80, "Mango": 60 },
    snacks: { "Almonds": 579, "Walnuts": 654, "Boiled Eggs": 155, "Popcorn (air-popped)": 387, "Watermelon": 30, "Grapes": 69, "Pineapple": 50 }
  };

  const calculateCalories = () => {
    let total = 0;
    Object.keys(foodOptions).forEach((meal) => {
      if (meals[meal] && meals[`${meal}Grams`]) {
        const caloriesPerGram = foodOptions[meal][meals[meal]] / 100;
        total += caloriesPerGram * parseFloat(meals[`${meal}Grams`] || 0);
      }
    });
    setMeals({ ...meals, totalCalories: total.toFixed(2) });
  };

  return (
    <div>
      <h2>Meal Plan</h2>
      <label>Date</label>
      <input type="date" name="date" value={meals.date} onChange={handleChange} />

      {Object.keys(foodOptions).map((meal) => (
        <div key={meal} className="meal-container">
          <label>{meal.charAt(0).toUpperCase() + meal.slice(1)}</label>
          <select name={meal} value={meals[meal]} onChange={handleChange} style={{marginLeft:"20px"}}>
            <option value="">Select a meal</option>
            {Object.keys(foodOptions[meal]).map((food) => (
              <option key={food} value={food}>{food}</option>
            ))}
          </select>
          <br/>
          <label><br/>Grams Consumed</label>
          <input type="number" name={`${meal}Grams`} value={meals[`${meal}Grams`]} onChange={handleChange} />
        </div>
      ))}

<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
  <button style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer", borderRadius: "5px", marginRight: "10px" }} onClick={calculateCalories}>
    Calculate Calories
  </button>
  <button style={{ padding: "10px", backgroundColor: "limegreen", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}>
    Save
  </button>
  <h3 style={{color: "black", marginLeft:"40px" }}>Total Calories: {meals.totalCalories} kcal</h3>
</div>
    </div>
  );
};

const WaterIntake = () => {
  const [water, setWater] = useState(0);
  const caloriesBurned = (water * 2) * 20;

  return (
    <div>
      <h2>💧 Water Intake</h2>
      <label>Liters of Water Consumed</label>
      <input type="number" placeholder="Enter liters" value={water} onChange={(e) => setWater(parseFloat(e.target.value) || 0)} />
      <p>🔥 Calories Burned: {caloriesBurned.toFixed(1)} kcal</p>
      <button>Save</button>
    </div>
  );
};

const StepTracker = () => {
  const [steps, setSteps] = useState(0);
  const caloriesBurned = (steps * 0.04).toFixed(2);

  return (
    <div>
      <h2>🚶 Step Tracker</h2>
      <label>Number of Steps Walked</label>
      <input type="number" placeholder="Enter steps" value={steps} onChange={(e) => setSteps(parseInt(e.target.value) || 0)} />
      <p>🔥 Calories Burned: {caloriesBurned} kcal</p>
      <button>Save</button>

    </div>
  );
};

export default Nutrition;
