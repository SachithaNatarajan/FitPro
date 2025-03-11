import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Section.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("userToken", "authenticated"); // Store token
    console.log("User Logged In");
    if (email && password) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back to FitPro!",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate("/dashboard");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter email and password!",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="logo">FitPro</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          New to FitPro?{" "}
          <span
            onClick={() => navigate("/Register")}
            style={{ cursor: "pointer", color: "#007bff", fontWeight: "bold" }}
          >
            Register now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
