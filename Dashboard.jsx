import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./Section.css";

export default function Dashboard() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  const images = [
    "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/163351/girl-boxer-ring-boxing-pear-163351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/50597/man-male-boy-a-person-50597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const features = [
    {
      title: "Personalized Workouts",
      description: "Get customized workouts tailored to your goals.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Meal Plans",
      description: "Healthy and delicious meal plans for fitness.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Water Intake",
      description: "Monitor your Water Intake.",
      image: "https://images.pexels.com/photos/1385184/pexels-photo-1385184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Calorie Tracker",
      description: "Track your daily calories and stay on top of your diet.",
      image: "https://images.pexels.com/photos/669585/pexels-photo-669585.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Step Counter",
      description: "Monitor your steps and stay active daily.",
      image: "https://images.pexels.com/photos/5069216/pexels-photo-5069216.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "BMI Calculator",
      description: "Calculate and understand your BMI.",
      image: "https://images.pexels.com/photos/8296970/pexels-photo-8296970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Trainer Guidance",
      description: "Get expert guidance from professional trainers.",
      image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
    },
    {
      title: "Doctor Consultation",
      description: "Consult with doctors for better health insights.",
      image: "https://images.pexels.com/photos/8312841/pexels-photo-8312841.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Nutrition Tracker",
      description: "Track your daily nutrient intake and stay healthy.",
      image: "https://images.pexels.com/photos/1578241/pexels-photo-1578241.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Progress Tracker",
      description: "Monitor your fitness progress over time.",
      image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=600",
    }
  ];


  return (
    <div className="dashboard-container">
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bmicalculator">BMI</Link></li>
            <li><Link to="/trainer">Diet</Link></li>
            <li><Link to="/exercise">Workout Database</Link></li>
            <li><Link to="/nutrition">Nutrition Checker</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <Slider {...sliderSettings} className="slider">
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image} alt={`slide-${index}`} className="slider-image" />
              <div className="overlay" style={{ marginTop: "25px" }}>
                <h1><i>"Push Limits. Break Barriers. Achieve Greatness!"</i></h1><br/>
                <h2 style={{color:"white"}}><i>We are here to help you achieve your fitness dreams.</i></h2>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="features-section">
        <h2>Our Features</h2><br/>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.image} alt={feature.title} className="feature-image" />
              <h3><br/>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* About Us Section */}
<section className="aboutus-section" >
  <h2>About Us</h2><br/><br/>
  <div className="aboutus-content">
    <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
         alt="About Us" className="aboutus-image" />
    <p>Welcome to <strong>FitPro</strong>, your all-in-one fitness companion designed to help you achieve your health goals. 
       We provide tools for tracking workouts, monitoring nutrition, staying hydrated, and much more.</p>
  </div>
</section>
<section className="contactus-section">
  <h2>Contact Us</h2><br/><br/>
  <div className="contactus-container">
    <div className="contactus-form-wrapper">
      <div className="contactus-form-container">
        <h2>Send a mail</h2><br/>

        <form className="contactus-form" onSubmit={(event) => {
          event.preventDefault(); // Prevent page refresh

          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out. We'll get back to you soon.",
            icon: "success",
            confirmButtonText: "OK",
            toast: true, // Enables non-blocking toast style
            position: "bottom-front", // Positions the alert in the bottom-right corner
            showConfirmButton: false, // Removes OK button for a cleaner look
            timer: 3000, // Auto-dismiss after 3 seconds
            timerProgressBar: true,
          });

          event.target.reset(); // Reset form fields after submission
        }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required defaultValue={"support@fitpro.com"}readOnly/>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="2" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>

    <div className="contactus-image-container">
      <img 
        src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="Contact Us" 
        className="contactus-image" 
      />
    </div>
  </div>
</section>

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
}
