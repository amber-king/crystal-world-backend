// Dependicies
const express = require("express");
const cors = require("cors");
const crystalsControllers = require("./controllers/crystalsControllers");

// Configuration
const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// Routes

// home page route
app.get("/", (req, res) => {
  res.json("Crystal World 💎");
});
// Crystals Routes - mount of controller to keep track of crystal index page changes
app.use("/crystals", crystalsControllers);

app.get("*", (req, res) => {
  res.status(404).json("Page not found");
});

module.exports = app;
