import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px",
      backgroundColor: "#333",
      color: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      color: "#7BC243",
      textDecoration: "none",
      fontSize: "22px",
      fontWeight: "bold",
    },
    logoImage: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    nav: {
      display: "flex",
    },
    navList: {
      listStyle: "none",
      display: "flex",
      gap: "20px",
      margin: "0",
      padding: "0",
    },
    navItem: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "18px",
      transition: "color 0.3s",
    },
    navItemHover: {
      color: "#7BC243",
    },
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    heading: {
      fontSize: "36px",
      color: "#007bff",
    },
    subheading: {
      fontSize: "24px",
      color: "#333",
      marginTop: "20px",
    },
    image: {
      width: "100%",
      maxWidth: "800px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: "1.6",
    },
    highlight: {
      fontWeight: "bold",
      color: "#007bff",
    },
    list: {
      textAlign: "left",
      margin: "20px auto",
      display: "inline-block",
      fontSize: "18px",
    },
    listItem: {
      marginBottom: "10px",
    },
    ctaText: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#28a745",
      marginTop: "20px",
    },
  };

  return (
    <>
      {/* Header */}
      <header style={styles.header}>
        <div onClick={() => navigate("/")} style={styles.logo}>
          <img
            src="https://media.istockphoto.com/id/1397734203/vector/couple-fitness-logo-vector.jpg?s=612x612&w=0&k=20&c=o-MflGLdwx7Z5R2ZUyOwggGNCsMabFxCkODsRg4iMY0="
            alt="FitPro Logo"
            style={styles.logoImage}
          />
          <span>FitPro</span>
        </div>

        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li>
              <Link to="/" style={styles.navItem}>Home</Link>
            </li>
            <li>
              <Link to="/bmicalculator" style={styles.navItem}>BMI</Link>
            </li>
            <li>
              <Link to="/trainer" style={styles.navItem}>Diet</Link>
            </li>
            <li>
              <Link to="/exercise" style={styles.navItem}>Workout Database</Link>
            </li>
            <li>
              <Link to="/nutrition" style={styles.navItem}>Nutrition Checker</Link>
            </li>
            <li>
              <Link to="/history" style={styles.navItem}>History</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* About Us Section */}
      <div style={styles.container}>
        <h1 style={styles.heading}>About Us</h1>
        <img
          src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Fitness Tracker"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          Welcome to <span style={styles.highlight}>FitPro</span>, your all-in-one fitness companion designed to help you achieve your health and wellness goals. Whether you're tracking workouts, monitoring nutrition, or staying hydrated, our platform makes it simple to stay on top of your fitness journey.
        </p>

        <h2 style={styles.subheading}>Our Mission</h2>
        <p style={styles.paragraph}>
          At FitPro, we believe that fitness should be accessible, motivating, and personalized. Our goal is to provide users with an intuitive, data-driven experience that helps them stay accountable and reach their fitness milestones.
        </p>

        <h2 style={styles.subheading}>What We Offer</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Step Tracking:</strong> Monitor your daily movement and calories burned.</li>
          <li style={styles.listItem}><strong>Exercise Search:</strong> Find exercises and calculate calorie expenditure.</li>
          <li style={styles.listItem}><strong>Nutrition & Hydration:</strong> Log your meals and water intake.</li>
          <li style={styles.listItem}><strong>BMI Calculator:</strong> Understand your body composition.</li>
          <li style={styles.listItem}><strong>History Tracking:</strong> Keep a record of your fitness journey.</li>
        </ul>

        <p style={styles.ctaText}>Join us and take control of your fitness today!</p>
      </div>
    </>
  );
};

export default Header;
