import React, { useState, useRef, useEffect } from "react";
import "./styles/navbar.css";
import { useNavigate, Link } from "react-router-dom";
import { logoImg } from '../assets/index'

const NavBar = () => {

  const navigate = useNavigate()

  const navLinks = [
    { text: 'Home', link: '/home' },
    { text: 'My Profile', link: '/profile' },
    { text: 'Start Campaign', link: '/start-campaign', className: 'btn custom-btn-campaign' },
    { text: 'Verify KYC', link: '/verify-kyc', className: 'btn custom-btn-campaign' }
  ];

  return (
    <>
      <nav style={{ backgroundColor: '#F1F1F1' }} className="navbar sticky-top navbar-expand-lg navbar-light custom-navbar-bg">

        {/* Why <a> tag? use Link from react-router*/}
        <a className="navbar-brand" href="/home">
          {/* BH */}
          <div
            style={{
              width: "6rem",
              aspectRatio: 16 / 9
            }}>

            <img src={logoImg} style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }} alt="" />

          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={link.link}>
                  {link.text} {link.className && <span className="sr-only">(current)</span>}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <button className="btn btn-danger" onClick={() => navigate('/')}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;




/**

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                My Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/start-campaign">
                <button className="btn custom-btn-campaign" type="submit">
                  Start Campaign
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/verify-kyc">
                <button className="btn custom-btn-campaign" type="submit">
                  Verify KYC
                </button>
              </a>
            </li>
          </ul>
          <div>
            <button className="btn btn-danger" onClick={() => navigate('/')}>
              Logout
            </button>
          </div>
        </div>

 */