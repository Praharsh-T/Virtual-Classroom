import pg from "pg";
const { Pool } = pg;
const POSTGRESS_URL = process.env.POSTGRES_CONNECTION_STRING;

export const pool = new Pool({
  connectionString: POSTGRESS_URL,
});

export const connectToPostgress = async () => {
  try {
    console.log("CONNECTED TO DATABASE");
  } catch (e) {
    console.log("CLIENT CONNECTTION ERROR", e);
  }
};
