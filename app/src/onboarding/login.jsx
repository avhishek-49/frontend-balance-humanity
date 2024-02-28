import React, { useState } from "react";
import axios from "axios";
import "./styles/App.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CircularProgress } from "@material-ui/core";
import Logo from "../assets/balancehumanitylogo.svg"
const App = () => {
  const navigate = useNavigate();
  const { useLogin } = useAuth();
  const { mutate, isLoading } = useLogin();

  function navigateToHome() {
    navigate("submit");
  }

  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid main-wrapper">
      <div className="content">
        <div className="logo">
    <img src={Logo} alt="" />
        </div>
        <div className="image"></div>
        <div className="text">We Are In A Mission To Help The HelpLess Join Our Action!</div>
      </div>
      <form id="form">
        <div className="title">Login</div>

        {/* Mobile Number input */}
        <div className="">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <i className="far fa-envelope"></i>
          <FaUser size={20} className="userIconClass"></FaUser>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>

        {/* Password input */}
        <div>
          <label htmlFor="password">Password</label>
          <FaLock className="userIconClass" size={20} />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password here"
            value={formData.password}
            onChange={handleChange}
            style={{ paddingRight: '40px' }} // Adjust the padding as needed
          />
          <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
          <i className="fas fa-exclamation-circle failure-icon"></i>
          <i className="far fa-check-circle successx-icon"></i>
          <div className="error"></div>
        </div>

        <button type="button" onClick={() => mutate(formData)} id="btn" disabled={isLoading}>
          {isLoading ? <CircularProgress /> : "Login"}
        </button>
        <div  class="need-account">
        <div>
        Need an account? <a href="/submit">Signup here!</a>
        </div>
        <div>
          <a href="/forget-password">Forget Password?</a>
        </div>
        </div>
        
      </form>
    </div>
  );
};

export default App;
