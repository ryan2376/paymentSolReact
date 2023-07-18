import React, { useState } from "react";
import App from './App'
import Mains from "./Mains";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bgimg from "./assets/bgimgnobg.png";
import user from './assets/iconsSocial/icons8-user-48.png'
import { Link } from "react-router-dom";

export default function User() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <section>
        <nav className="navbar">
          <p className="brand-name">CHAMA</p>
          <ul className="list-items">
            <li>Home</li>
            <li>
              <Link id="About" to="/AboutUs">About Us</Link>
            </li>
            <li>Services</li>
            <li>
              <div className="dropdown">
                <img
                  id="admin"
                  className="user-avatar"
                  src={user}
                  alt="avatar"
                  onClick={handleDropdownToggle}
                />
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </section>
      <div className="login-form">
        <form>
          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="text" id="username" name="username" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Amount</label>
            <input type="text" id="amount-user" name="password" placeholder="Enter the amount" />
          </div>
          <button type="submit">Make Payment</button>
        </form>
        <img className="bg-image" src={bgimg} alt="Background" />
      </div>
      <Footer />
    </>
  );
}