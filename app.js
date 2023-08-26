// Dependicies
const express = require("express");
const cors = require("cors");
const db = require("./db")
const crystalsControllers = require("./controllers/crystalsControllers");

// Configuration
const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json("Crystal World 💎");
});

app.get("/luster_options", async (req, res) => {
  try {
    const lusterOptions = await db.any("SELECT * FROM luster_options");
    res.json({ lusterOptions });
  } catch (error) {
    console.error("Error fetching luster options:", error);
    res.status(500).json({ error: "Error fetching luster options" });
  }
});

// Crystals Routes - mount of controller to keep track of crystal index page changes
app.use("/crystals", crystalsControllers);

module.exports = app;
