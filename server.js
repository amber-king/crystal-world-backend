// Dependencies
const app = require("./app.js");

// Configuration
require("dotenv").config();
const PORT = process.env.PORT;

// Listen
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
