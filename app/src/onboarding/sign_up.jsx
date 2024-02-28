import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./styles/sign_up.css";
import Logo from "../assets/balancehumanitylogo.svg"

import useAuth from "../hooks/useAuth";
import useKYC from "../hooks/useKYC";


const SignUpApplication = () => {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }

  const {formik} = useAuth()

  const {useFetchDistricts} = useKYC()

  const {data} = useFetchDistricts()

  const {values, errors, isSubmitting, handleChange, setFieldValue, handleSubmit} = formik

  return (
    <div className="container-fluid main-wrapper">
      <div className="content">
      <div className="logo">
    <img src={Logo} alt="" />
        </div>

        <div className="image"></div>

        <div className="text">
          Start for free & get regret
          <br />
        </div>
      </div>

      <form id="form">
        <div className="title">Register</div>

        <div className="">
          <label htmlFor="firstName">First Name</label>
          <i className="far fa-envelope"></i>
          <FaUser size={20} className="userIconClass"></FaUser>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
                                                  {errors?.firstName && <text style={{color: 'red', marginTop: 2}}>{errors?.firstName}</text>}

        </div>
        <div className="">
          <label htmlFor="lastName">Last Name</label>
          <i className="far fa-envelope"></i>
          <FaUser size={20} className="userIconClass"></FaUser>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
                                                  {errors?.lastName && <text style={{color: 'red', marginTop: 2}}>{errors?.lastName}</text>}

        </div>

        <div className="">
          <label htmlFor="email">email</label>
          <i className="far fa-envelope"></i>
          <FaUser size={20} className="userIconClass"></FaUser>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
                                                  {errors?.email && <text style={{color: 'red', marginTop: 2}}>{errors?.email}</text>}

        </div>

        <div className="">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <i className="far fa-envelope"></i>
          <FaUser size={20} className="userIconClass"></FaUser>
          <input
            type="text"
            name="mobileNumber"
            value={values.mobileNumber}
            onChange={handleChange}
          />
                                                  {errors?.mobileNumber && <text style={{color: 'red', marginTop: 2}}>{errors?.mobileNumber}</text>}

        </div>

        <div className="">
          <label htmlFor="password">Password</label>
          <i className="far fa-envelope"></i>
          <FaUser size={20} className="userIconClass"></FaUser>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
                                                  {errors?.password && <text style={{color: 'red', marginTop: 2}}>{errors?.password}</text>}

        </div>

        <div className="">
          <label htmlFor="customerPin">Customer Pin</label>
          <i className="far fa-envelope"></i>
          <FaUser size={20} className="userIconClass"></FaUser>
          <input
           
            name="customerPin"
            value={values.customerPin}
            onChange={handleChange}
          />
                                                  {errors?.customerPin && <text style={{color: 'red', marginTop: 2}}>{errors?.customerPin}</text>}

        </div>

                    <div className="">
              <label htmlFor="districtId">District</label>
              <select value={values.districtId} style={{width: '100%'}} onChange={(e) => setFieldValue('districtId', e.target.value)}>
                <option value=''>Select district</option>
                {data?.data?.data?.map(item => <option key={item?.id} value={item?.id}>{item?.name}</option>)}
              </select>
                              {errors?.districtId && <text style={{color: 'red', marginTop: 2}}>{errors?.districtId}</text>}

            </div>

        {isSubmitting ? (
          <div className="loading-container">
            <CircularProgress style={{ color: "#ff5278" }} />
          </div>
        ) : (
          <button type="button" onClick={handleSubmit} id="btn">
            Submit
          </button>
        )}
        <button type="button" onClick={navigateToHome}>
          Already Have Account
        </button>
      </form>
    </div>
  );
};

export default SignUpApplication;
