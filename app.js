// Dependicies
const express = require("express");
const crystalsControllers = require("./controllers/crystalsControllers");

// Configuration
const app = express();

// Middleware
app.use(express.json());

// Routes 
app.get("/", (req, res) => {
  res.json("Crystal World 💎");
});

// mount of controller to keep track of crystal index page changes
app.use("/crystals", crystalsControllers)


module.exports = app;
