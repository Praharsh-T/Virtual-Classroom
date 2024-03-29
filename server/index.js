import { configENV } from "./config.js";
configENV();

import express, { json } from "express";
import cors from "cors";
import { connectToPostgress } from "./db/connect.js";
const PORT = process.env.PORT || 5000;

import userRouter from "./routes/user/user.js";
import classroomRouter from "./routes/classroom/classroom.js";
import fileRouter from "./routes/file/file.js";
import peopleRouter from "./routes/people/people.js";
import chatRouter from "./routes/chat/chat.js";
const app = express();
app.use(cors());
app.use(json());

app.use("/user", userRouter);
app.use("/classroom", classroomRouter);
app.use("/classroom/file", fileRouter);
app.use("/classroom/people", peopleRouter);
app.use("/classroom/chat", chatRouter);

app.get("/", async (req, res) => {
  res.json("HII");
});

app.listen(PORT, async () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
  connectToPostgress();
});
