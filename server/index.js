require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json());
const { connectToPostgress, client } = require("./db/connect");
connectToPostgress();

app.get("/", async (req, res) => {
  const data = await client.query("SELECT *FROM USERS");
  res.json(data.rows);
});
app.listen(5000, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
