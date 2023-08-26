// Dependicies
const express = require("express");
const cors = require("cors");
// const db = require("./db");
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

// Assuming your route for fetching crystal details is defined like this
app.get('/crystals/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const crystal = await db.query(
      'SELECT c.id, c.name, c.transparency, c.luster_name, c.hardness, c.color, l.option_name AS luster_option_name FROM crystals c JOIN luster_options l ON c.luster_name = l.id WHERE c.id = $1',
      [id]
    );

    if (crystal.rows.length === 0) {
      return res.status(404).json({ error: 'Crystal not found' });
    }

    res.json(crystal.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});



// Crystals Routes - mount of controller to keep track of crystal index page changes
app.use("/crystals", crystalsControllers);

module.exports = app;
