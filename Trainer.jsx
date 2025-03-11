import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Trainer = () => {
  const location = useLocation();
  const { category } = location.state || {}; 
  const navigate = useNavigate();

  const dietPlans = {
    Underweight: {
      image: "https://mylittleeater.com/wp-content/uploads/2019/10/New-Blog-Post-Image-Size-6-1.png",
      description: "A balanced diet including oatmeal, grilled chicken, salmon, and Greek yogurt to help gain weight healthily.",
      trainer: {
        image: "https://media.istockphoto.com/id/1072395722/photo/fitness-trainer-at-gym.jpg?s=612x612&w=0&k=20&c=3VBLCgbxG3bGNRp9Sc3tN_7G-g_DxXhGk9rhuZo-jkE=",
        name: "John Doe",
        expertise: "Strength and Muscle Gain Specialist",
        email: "john.doe@fitpro.com",
        contact:"+123 456 7890",
      },
      doctor: {
        image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
        name: "Dr. Sarah Lee",
        specialization: "Nutritionist",
        email: "dr.sarah@healthcare.com",
        contact:"+987 654 3210",
      }
    },
    Normalweight: {
      image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/7_days_Balanced_Diet_Chart_9cd5d5befc.jpg",
      description: "A well-balanced diet with eggs, whole grains, lean proteins, and healthy fats to maintain your weight.",
      trainer: {
        image: "https://img.freepik.com/premium-photo/portrait-personal-trainer-sportswear-fitness-center-gym_109710-1637.jpg",
        name: "Jane Smith",
        expertise: "General Fitness Coach",
        email: "jane.smith@fitpro.com",
        contact:"+321 654 0987",
      },
      doctor: {
        image: "https://www.shutterstock.com/image-photo/man-portrait-doctor-white-coat-600nw-2280796707.jpg",
        name: "Dr. Michael Brown",
        specialization: "General Practitioner",
        email: "dr.michael@healthcare.com",
        contact:"+456 789 1230",
      }
    },
    Overweight: {
      image: "https://i.pinimg.com/736x/32/72/1c/32721c4f9f43c42bcf6771149d4a9976.jpg",
      description: "A nutrient-rich diet including omelets, quinoa, tofu, and hummus to support healthy weight loss.",
      trainer: {
        image: "https://t3.ftcdn.net/jpg/05/62/09/28/360_F_562092860_mWJBNRqTg4rarfoJaSdkaLlfy1dkrP33.jpg",
        name: "Emma Davis",
        expertise: "Weight Loss Coach",
        email: "emma.davis@fitpro.com",
        contact:"+741 852 9630",
      },
      doctor: {
        image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
        name: "Dr. Robert White",
        specialization: "Endocrinologist",
        email: "dr.robert@healthcare.com",
        contact:"+852 369 7410",
      }
    },
    Obese: {
      image: "https://blog-live.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2024/05/23165727/7-day-diet-plan-for-weight-loss-1-scaled.jpg",
      description: "A weight-loss-focused meal plan featuring scrambled eggs, grilled salmon, and vegetable stir-fries.",
      trainer: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhihskE8ROpB7Mw7oEUnMXyBoohb1Dm3IIug&s",
        name: "David Johnson",
        expertise: "Obesity Management Trainer",
        email: "david.johnson@fitpro.com",
        contact:"+159 753 4862",
      },
      doctor: {
        image: "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
        name: "Dr. Emily Carter",
        specialization: "Bariatric Specialist",
        email: "dr.emily@healthcare.com",
        contact:"+369 147 2580",
      }
    }
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
      <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto", textAlign: "center", marginTop: "100px", color: "black" }}>
        <h2>🍽️ Personalized Meal Plan</h2><br/>
        {category ? (
          <>
            <h3 style={{ marginTop: "20px" }}>Your BMI Category: {category}</h3>

            <div style={{ display: "flex", alignItems: "center", textAlign: "left", marginTop: "50px" }}>
              <img src={dietPlans[category]?.doctor?.image} alt="Doctor" style={{ width: "400px", borderRadius: "10px", marginRight: "20px" }} />
              <div>
                <h2>Doctor</h2>
                <p><strong>{dietPlans[category]?.doctor?.name}</strong></p>
                <p>{dietPlans[category]?.doctor?.specialization}</p>
                <p >Email: {dietPlans[category]?.doctor?.email}</p>
                <p>Contact: {dietPlans[category]?.doctor?.contact}</p>
              </div>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", textAlign: "left", marginTop: "50px", flexDirection: "row-reverse" }}>
              <img src={dietPlans[category]?.trainer?.image} alt="Trainer" style={{ width: "400px", borderRadius: "10px", marginLeft: "20px" }} />
              <div>
                <h2>Trainer</h2>
                <p><strong>{dietPlans[category]?.trainer?.name}</strong></p>
                <p>{dietPlans[category]?.trainer?.expertise}</p>
                <p>Email: {dietPlans[category]?.trainer?.email}</p>
                <p>Contact: {dietPlans[category]?.trainer?.contact}</p>
              </div>
            </div>
            <br/><br/><br/><br/><br/>
            <p style={{align:"center",fontSize:"30px"}}><strong>Diet Plan</strong></p>
            <img
              src={dietPlans[category]?.image}
              alt="Meal Plan"
              style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
            />
            <p>{dietPlans[category]?.description}</p>
          </>
        ) : (
          <h3>No meal plan available. Please calculate your BMI first.</h3>
        )}
        <button
          onClick={() => navigate("/bmicalculator")}
          style={{
            padding: "10px",
            marginTop: "20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px"
          }}
        >
          Back to BMI Calculator
        </button>
      </div>
    </div>
  );
};

export default Trainer;
