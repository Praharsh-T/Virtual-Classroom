const { Client, Pool } = require("pg");
const POSTGRESS_URL = process.env.POSTGRESS_CONNECTION_STRING;
const client = new Client({
  connectionString: POSTGRESS_URL,
});

const connectToPostgress = async () => {
  try {
    await client.connect();
    console.log("CONNECTED TO DATABASE");
  } catch (e) {
    console.log("CLIENT CONNECTTION ERROR", e);
  }
};
module.exports = { connectToPostgress, client };
