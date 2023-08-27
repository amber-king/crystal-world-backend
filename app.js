// Dependicies
const express = require("express");
const cors = require("cors");
// const db = require("../db");
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

// app.get("/crystals/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const crystal = await db.oneOrNone("SELECT * FROM crystals WHERE id = $1", [
//       id,
//     ]);

//     if (!crystal) {
//       return res.status(404).json({ error: "Crystal not found" });
//     }

//     res.json(crystal);
//   } catch (error) {
//     console.error("Error fetching crystal:", error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

// Crystals Routes - mount of controller to keep track of crystal index page changes
app.use("/crystals", crystalsControllers);

module.exports = app;
