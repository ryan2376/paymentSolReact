import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    // Make a POST request to the backend register route
    axios
      .post("/api/register", { name: name, phone: phone, password: password })
      .then((response) => {
        setMessage(response.data.message);
        // You can handle the successful registration here, such as showing a success message, clearing form fields, or redirecting to a login page.
      })
      .catch((error) => {
        setMessage("Registration failed. Please try again.");
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <section>
        <p>Fill to create your account for request to admin</p>
        <div className="registration-form">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="number"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />

            <button type="submit">Register</button>
          </form>
          {message && <div>{message}</div>}
        </div>
      </section>
      <Footer />
    </div>
  );
}
