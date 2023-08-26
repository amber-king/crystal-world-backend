// Dependicies
const express = require("express");
const cors = require("cors");
const db = require("./db");
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

// app.get("/luster_options", async (req, res) => {
//   console.log("Received request for luster options");
//   try {
//     const lusterOptions = await db.any(
//       "SELECT DISTINCT luster_name FROM crystals"
//     );
//     res.json({ lusterOptions });
//   } catch (error) {
//     console.error("Error fetching luster options:", error);
//     res.status(500).json({ error: "Error fetching luster options" });
//   }
// });

// app.get("/hardness_options", async (req, res) => {
//   try {
//     const hardnessOptions = await db.any("SELECT rating FROM hardness_options");
//     res.json({ hardnessOptions });
//   } catch (error) {
//     console.error("Error fetching hardness options:", error);
//     res.status(500).json({ error: "Error fetching hardness options" });
//   }
// });

// Crystals Routes - mount of controller to keep track of crystal index page changes
app.use("/crystals", crystalsControllers);

module.exports = app;
