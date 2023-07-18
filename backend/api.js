// backend/api.js
const express = require("express");
const router = express.Router();
const db = require("./db");

e.preventDefault();
  console.log("name:", Name);
  console.log("password:", password);
// Login route
router.post("/login", (req, res) => {
  const { name, password } = req.body;

  // Query the 'credentials' table for the provided Name and Password
  const query = "SELECT * FROM credentials WHERE name = ? AND password = ?";
  db.query(query, [name, password], (err, result) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      res.status(500).json({ message: "Server error" });
      return;
    }

    if (result.length > 0) {
      // If user is found, return a success message or the user data
      res.json({ message: "Login successful", user: result[0] });
    } else {
      // If user is not found, return an error message
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

// Registration route
router.post('/register', (req, res) => {
  const { name, phone, password } = req.body;

  // Insert user data into the 'users' table
  const query = 'INSERT INTO credentials (name, phone, password) VALUES (?, ?, ?)';
  db.query(query, [name, phone, password], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ message: 'Server error' });
      return;
    }

    // Registration successful
    res.json({ message: 'Registration successful' });
  });
});


module.exports = router;
