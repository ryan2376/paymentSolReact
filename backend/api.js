// backend/api.js
const express = require("express");
const router = express.Router();
const db = require("./db");

// Login route
router.post("/login", (req, res) => {
  const { name, password } = req.body;

  // Query the 'credentials' table for the provided username and password
  const query = `SELECT * FROM credentials WHERE name = ? AND password = ?`;
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

module.exports = router;
