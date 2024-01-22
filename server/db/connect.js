const { Pool } = require("pg");
const POSTGRESS_URL = process.env.POSTGRESS_CONNECTION_STRING;
const pool = new Pool({
  connectionString: POSTGRESS_URL,
});
const connectToPostgress = async () => {
  try {
    console.log("CONNECTED TO DATABASE");
  } catch (e) {
    console.log("CLIENT CONNECTTION ERROR", e);
  }
};
module.exports = { connectToPostgress, pool };
