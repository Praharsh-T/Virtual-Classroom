import { configENV } from "./config.js";
configENV();

import express, { json } from "express";
import cors from "cors";
import userRouter from "./routes/user/user.js";
import { connectToPostgress } from "./db/connect.js";
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(json());

app.use("/user", userRouter);

app.get("/", async (req, res) => {
  res.json("HII");
});

app.listen(PORT, async () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
  connectToPostgress();
});
