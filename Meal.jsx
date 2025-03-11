import React from "react";
import './Section.css'

const MealPlan = () => {
  const meals = {
    Breakfast: [
      { name: "Scrambled Eggs", image: "https://images.pexels.com/photos/13334757/pexels-photo-13334757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Avocado Toast", image: "https://images.pexels.com/photos/2067423/pexels-photo-2067423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Oatmeal with Berries", image: "https://images.pexels.com/photos/566564/pexels-photo-566564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Greek Yogurt & Nuts", image: "breakfast4.jpg" },
      { name: "Banana Pancakes", image: "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Smoothie Bowl", image: "breakfast6.jpg" },
    ],
    Lunch: [
      { name: "Grilled Chicken & Quinoa", image: "lunch.jpg" },
    ],
    Snacks: [
      { name: "Mixed Nuts & Greek Yogurt", image: "snacks.jpg" },
    ],
    Dinner: [
      { name: "Salmon with Brown Rice", image: "dinner.jpg" },
    ],
  };

  return (
    <div className="meal-plan">
      <h2>Daily Meal Plan</h2>
      {Object.entries(meals).map(([mealType, items]) => (
        <div key={mealType} className="meal-section">
          <h3>{mealType}</h3>
          <div className="meal-images">
            {items.map((meal, index) => (
              <div key={index} className="meal-item">
                <img src={meal.image} alt={meal.name} className="meal-image" />
                <p>{meal.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealPlan;
