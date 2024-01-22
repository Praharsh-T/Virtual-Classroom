require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
const userRouter = require("./routes/user/user");
app.use(express.json());
const { connectToPostgress } = require("./db/connect");
connectToPostgress();
app.use("/user", userRouter);
app.get("/", async (req, res) => {
  res.json("HII");
});
app.listen(5000, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
