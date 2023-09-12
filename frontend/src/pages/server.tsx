// Import required dependencies
const express = require("express");

// Create an Express application
const app = express();
const port = 3000; // Define the port you want the server to listen on

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route for the root URL
app.get("/", (req:any, res:any) => {
  res.send("Hello, Express!",req);
});

// Define another route
app.get("/about", (req:any, res:any) => {
  res.json({req});
});

// Define a route that accepts URL parameters
app.get("/user/:id", (req:any, res:any) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Define a route to handle POST requests
app.post("/api/data", (req:any, res:any) => {
  const data = req.body;
  res.json(data);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
