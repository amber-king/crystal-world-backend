// Depndencies
const pgp = require("pg-promise")();

// Configurations
require("dotenv").config();

// connection object - will pass an object with the necessary information to connect the server with the database, using the variable name in the .env file
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

// const cn = {
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// };
const db = pgp(cn);

// Export
module.exports = db;
