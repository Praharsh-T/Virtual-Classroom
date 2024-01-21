require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { client, pool } = require("pg");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get("/", (req, res) => {
  res.json("Hii");
});
app.listen(5000, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
