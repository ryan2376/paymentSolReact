const mysql = require("mysql");

// Replace <your-mysql-config> with your MySQL connection configuration
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "paymentmethods",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL.");
});

module.exports = connection;
