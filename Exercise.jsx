import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./Section.css";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2"; 
import upper1 from "./up3.jpg";
import upper2 from "./up1.jpg";
import upper3 from "./up1.png";
import upper4 from "./up2.avif";
import upper5 from "./up4.webp";
import Leg1 from "./lg1.webp";
import Leg2 from "./lg2.webp";
import Leg3 from "./lg3.jpeg";
import Leg4 from "./lg4.jpeg";
import Leg5 from "./lg5.jpeg";
import chest1 from "./ch1.jpg";
import chest2 from "./ch2.jpg";
import chest3 from "./ch3.jpg";
import chest4 from "./ch4.jpeg";
import chest5 from "./ch5.webp";
import background from "./bgg.webp";

// Exercise List with MET values
const exercises = [
  { name: "Arm", image: upper1, category: "Upper Arms", MET: 3.5 },
  { name: "Triceps Extension", image: upper2, category: "Upper Arms", MET: 4 },
  { name: "Seated Dumbbell", image: upper3, category: "Upper Arms", MET: 5 },
  { name: "Arm Circle", image: upper5, category: "Upper Arms", MET: 3 },
  { name: "Shoulder Stretch", image: upper4, category: "Upper Arms", MET: 2.5 },
  { name: "Inner Thigh", image: Leg1, category: "Legs", MET: 4.5 },
  { name: "Fire Hydrant", image: Leg2, category: "Legs", MET: 3.8 },
  { name: "Lunge", image: Leg3, category: "Legs", MET: 6 },
  { name: "Squats", image: Leg4, category: "Legs", MET: 5.5 },
  { name: "Side Leg Lift", image: Leg5, category: "Legs", MET: 3.2 },
  { name: "Pectoral Muscle", image: chest1, category: "Chest", MET: 4 },
  { name: "Donkey Kick", image: chest2, category: "Chest", MET: 3.6 },
  { name: "Pushup", image: chest3, category: "Chest", MET: 7 },
  { name: "Decline Push-ups", image: chest4, category: "Chest", MET: 8 },
  { name: "Wall Push-ups", image: chest5, category: "Chest", MET: 4.2 },
];

const FitnessSearch = ({ onAddExercise = () => {} }) => {
  
  const [selectedCategory, setSelectedCategory] = useState("Upper Arms");
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [date, setDate] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [weight, setWeight] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setMinutes((prev) => prev + 1);
      }, 60000); // Increment minutes every 60 seconds
    }
    
    return () => clearInterval(timer); // Cleanup on unmount
  }, [isRunning]); 

  const filteredExercises = exercises.filter((ex) => ex.category === selectedCategory);

  const handleAddExercise = () => {
    if (!selectedExercise || !date || weight <= 0) {
      alert("Please fill all fields correctly!");
      return;
    }
   

    let caloriesBurned = 0;
    if (minutes > 0) {
      caloriesBurned = (selectedExercise.MET * weight * minutes) / 60;
    } else if (repetitions > 0) {
      caloriesBurned = (selectedExercise.MET * weight * repetitions * 0.1) / 60;
    }

    const newExercise = {
      name: selectedExercise.name,
      date,
      minutes,
      repetitions,
      weight,
      caloriesBurned: caloriesBurned.toFixed(2),
    };

    onAddExercise(newExercise);
    Swal.fire({
      icon: "success",
      title: "Exercise Added!",
      text: `${selectedExercise.name} was added successfully.`,
      showConfirmButton: false,
      timer: 2000,
    });
    setSelectedExercise(null);
    setDate("");
    setMinutes();
    setRepetitions();
    setWeight();
    setIsRunning(false);
  };
  
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
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

      <div style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(0,0,0,0.2)", borderRadius: "10px", display: "inline-block", marginLeft:"200px" }}>
  <h2 style={{ fontSize: "24px", color: "white", marginTop:"80px" }}>Search For A Perfect Exercise 🏃‍♂️</h2>
  <h2 style={{ fontSize: "24px", color: "white", marginTop:"30px" }}>Choose a Category 🏋️‍♂️</h2>
  <select 
    onChange={(e) => setSelectedCategory(e.target.value)} 
    value={selectedCategory} 
    style={{ padding: "15px", fontSize: "16px", backgroundColor: "white", borderRadius: "5px", border: "1px solid black", marginTop:"20px" }}>
    <option value="Upper Arms">Upper Arms</option>
    <option value="Legs">Legs</option>
    <option value="Chest">Chest</option>
  </select>


        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
          {filteredExercises.map((exercise, index) => (
            <div
              key={index}
              style={{
                margin: "10px",
                padding: "10px",
                border: "1px solid gray",
                width: "200px",
                height: "250px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: "white",
                transition: "transform 0.3s ease",
              }}
              onClick={() => setSelectedExercise(exercise)}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={exercise.image} alt={exercise.name} style={{ width: "100%", height: "auto" }} />
              <h4 style={{color:"black"}}><br/>{exercise.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {selectedExercise && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.8)",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
            zIndex: 1000,
            width: "300px",
            textAlign: "center",
          }}
        >
          <h3>Add :{selectedExercise.name}</h3>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <label>Weight:</label>
          <input type="number" placeholder="Kg" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />

          <label>Minutes:</label>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          
            <input
              type="number"
              placeholder="min"
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value) || 0)}
              style={{ textAlign: "center", width: "50px" }}
            />
            
          </div>

          <button
            onClick={() => setIsRunning((prev) => !prev)}
            style={{ backgroundColor: isRunning ? "red" : "green", color: "white", padding: "10px", marginTop: "10px" }}
          >
            {isRunning ? "Pause Timer" : "Start Timer"}
          </button>
          <br/><br/>
          <label>Repetitions:</label>
          <input
            type="number"
            placeholder="times"
            value={repetitions}
            onChange={(e) => setRepetitions(Number(e.target.value) || 0)}
          />

          <button onClick={handleAddExercise}>Add</button>
          <button onClick={() => setSelectedExercise(null)}>Cancel</button>
        </div>
      
      )}
      <br/><br/><h2 style={{color:"white",align:"center", marginLeft:"580px"}}><strong>Add Exercise by clicking the image</strong></h2>
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
export default FitnessSearch;
