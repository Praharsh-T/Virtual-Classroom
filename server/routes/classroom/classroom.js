import express from "express";
import { validateToken } from "../../middleware/authToken.js";
import {
  createNewClassRoom,
  getClassesForLeaders,
} from "../scripts/classroomQuery.js";
const router = express.Router();

router.post("/create", validateToken, async (req, res) => {
  const classRoomInfo = await createNewClassRoom(
    req.body.classroomName,
    req.body.userInfo.email
  );
  if (classRoomInfo) {
    return res.json({ success: true, classRoomInfo });
  } else res.json({ success: false, fetchError: "Server error" });
});

router.get("/leader/getclasses", validateToken, async (req, res) => {
  const classes = await getClassesForLeaders(req.body.userInfo.email);
  if (classes) {
    return res.json({ success: true, classes });
  } else {
    res.json({ success: false, fetchError: "Server error" });
  }
});

router.get("/student/getclasses", validateToken, async (req, res) => {
  //   const classes = await getClassesForLeaders(req.body.userInfo.email);
  //   if (classes) {
  //     return res.json({ success: true, classes });
  //   } else {
  //     res.json({ success: false, fetchError: "Server error" });
  //   }
});

export default router;
