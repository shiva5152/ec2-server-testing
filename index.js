// Import the Express.js framework
const express = require("express");

// Create an instance of the Express application
const app = express();

// Define a route that responds with "Hello, World!"
app.get("/", (req, res) => {
  res.send("Hello, World! the server is running on ec2");
});

// Set the server to listen on a specific port (e.g., 3000)
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
