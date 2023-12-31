const db = require("../db/dbConfig.js");

// All Crystals
const getAllCrystals = async () => {
  try {
    const allCrystals = await db.any("SELECT * FROM crystals");
    // console.log("SQL Query Result:", allCrystals);
    return allCrystals;
  } catch (error) {
    // console.error("Query Error:", error);
    return { error };
  }
};

// One Crystal
const getOneCrystal = async (id) => {
  try {
    const oneCrystal = await db.oneOrNone(
      "SELECT * FROM crystals WHERE id=$1",
      id
    );
    return oneCrystal;
  } catch (error) {
    return { error: error };
  }
};

// Create One Crystal
const createOneCrystal = async (crystal) => {
  try {
    const createdCrystal = await db.one(
      "INSERT INTO crystals(name, transparency, luster_name, hardness, color, healing_features) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *;",
      [
        crystal.name,
        crystal.transparency,
        crystal.luster_name,
        crystal.hardness,
        crystal.color,
        crystal.healing_features
      ]
    );
    return createdCrystal;
  } catch (error) {
    return { error: error };
  }
};

// Update One Crystal
const updateOneCrystal = async (id, crystal) => {
  try {
    const updatedCrystal = await db.one(
      "UPDATE crystals SET name=$1, transparency=$2, luster_name=$3, hardness=$4, color=$5,healing_features=$6 WHERE id=$7 RETURNING *;",
      [
        crystal.name,
        crystal.transparency,
        crystal.luster_name,
        crystal.hardness,
        crystal.color,
        crystal.healing_features,
        id,
      ]
    );
    return updatedCrystal;
  } catch (error) {
    return error;
  }
};

// Delete One Crystal
const deleteOneCrystal = async (id) => {
  try {
    const deletedCrystal = await db.one(
      "DELETE FROM crystals WHERE id=$1 RETURNING *;",
      id
    );
    return deletedCrystal;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCrystals,
  getOneCrystal,
  createOneCrystal,
  updateOneCrystal,
  deleteOneCrystal,
};
