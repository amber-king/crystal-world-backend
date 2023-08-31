// const express = require("express");
// const crystals = express.Router();
// const {
//   getAllCrystals,
//   getOneCrystal,
//   createOneCrystal,
//   updateOneCrystal,
//   deleteOneCrystal,
// } = require("../queries/crystals.js");

// // GET All crystals
// // /crystals
// crystals.get("/", async (req, res) => {
//   try {
//     const allCrystals = await getAllCrystals();
//     if (allCrystals[0]) {
//       res.status(200).json(allCrystals);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // SHOW one crystal
// // /crystals/:id
// crystals.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const soloCrystal = await getOneCrystal(id);
//   if (soloCrystal) {
//     res.status(200).json(soloCrystal);
//   } else {
//     res.status(404).json({ error: "Crystal not found" });
//   }
// });

// // CREATE one crystal
// // /crystals
// crystals.post("/", async (req, res) => {
//   const newCrystal = await createOneCrystal(req.body);
//   if (newCrystal) {
//     res.status(200).json(newCrystal);
//   } else {
//     res.status(404).json({ error: "No crystal added" });
//   }
// });

// // UPDATE one crystal
// // /crystals/:id

// crystals.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const changedCrystal = await updateOneCrystal(id, req.body);
//   if (changedCrystal) {
//     res.status(200).json(changedCrystal);
//   } else {
//     res.status(404).json({ error: "Crystal not modfied" });
//   }
// });

// // DELETE one crystal
// // /crystals/:id
// crystals.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   const deletedCrystal = await deleteOneCrystal(id);
//   if (deletedCrystal) {
//     res.status(200).json(deletedCrystal);
//   } else {
//     res.status(404).json({ error: "No Crystal Here" });
//   }
// });

// module.exports = crystals;
