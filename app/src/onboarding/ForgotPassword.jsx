import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate,Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./styles/App.css"; // You'll need to create this CSS file
// import handleRequest from './../common_helpers/handel_http_axios_request';
import Logo from "../assets/balancehumanitylogo.svg"

const ForgotPassword = () => {
  const navigate = useNavigate();

    const { useForgetPassword} = useAuth()

    const {mutate, isLoading} = useForgetPassword()

  function navigateFrontPage() {
    navigate("/");
  }

  // const togglePasswordVisibility = () => {
  //   setShowPassword(prevState => !prevState);
  // };

  // handleRequest(baseUrl, endpoint, method, requestBody);
 
  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: "",
    customerPin: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  return (
    <div className="container-fluid main-wrapper">
      <div className="content">
        {/* <div className="logo"> Balance Humanity
        
        </div> */}
        <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
        <div className="image"></div>

        <div className="text">
          Start for free & get regret
          <br />
        </div>
      </div>

      <form id="form">
        <div className="title">Forgot password </div>

        {/* User Name input */}
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

                <div className="">
          <label htmlFor="customerPin">Customer Pin</label>
          <i className="far fa-envelope"></i>
          <FaUser size={20} className="userIconClass"></FaUser>
          <input
            type="text"
            name="customerPin"
            value={formData.customerPin}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <FaLock className="userIconClass" size={20} />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password here"
            value={formData.password}
            onChange={handleChange}
          />

          <i className="fas fa-exclamation-circle failure-icon"></i>
          <i className="far fa-check-circle successx-icon"></i>

          <div className="error"></div>
        </div>

        <button onClick={() => mutate(formData)} disabled={isLoading} >Change password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
