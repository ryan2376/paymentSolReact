import React, { useState } from "react";
import axios from "axios";
import bgimg from "./assets/bgimgnobg.png";

export default function Mains() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Make a POST request to the backend login route
    axios
      .post("/api/login", { name, password })
      .then((response) => {
        setMessage(response.data.message);
        // You can also handle the successful login here, such as storing the user data in your React app's state or using redirects.
      })
      .catch((error) => {
        setMessage("Login failed. Please check your credentials.");
        console.error(error);
      });
  };

  return (
    <section className="main-content">
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        {/* <img className="bg-image" src={bgimg} alt="Background" /> */}
      </div>
      <div className="topics">
        <h1>About Us</h1>
        {/* Your other content */}
      </div>
      {message && <div>{message}</div>}
    </section>
  );
}
