import express from "express";
import { validateToken } from "../../middleware/authToken.js";

import {
  addUserToTheClass,
  checkValidClassRoom,
  createFileTableForClassRoom,
  createMSGTableForClassRoom,
  createNewClassRoom,
  getClassesForLeaders,
  getJoinedClasses,
} from "../scripts/classroomQuery.js";
const router = express.Router();


router.post("/create", validateToken, async (req, res) => {
  const classRoomInfo = await createNewClassRoom(
    req.body.classroomName,
    req.body.userInfo.userid
  );
  if (classRoomInfo) {
    const FILETable = await createFileTableForClassRoom({
      name: classRoomInfo.classroomname,
      id: classRoomInfo.classroomid,
    });
    const MSGTable = await createMSGTableForClassRoom({
      name: classRoomInfo.classroomname,
      id: classRoomInfo.classroomid,
    });

    if (FILETable && MSGTable)
      return res.json({ success: true, classRoomInfo });
  }
  return res.json({ success: false, fetchError: "Server error" });
});

router.get("/leader/getclasses", validateToken, async (req, res) => {
  const classes = await getClassesForLeaders(req.body.userInfo.userid);
  if (classes) {
    return res.json({ success: true, classes });
  } else {
    res.json({ success: false, fetchError: "Server error" });
  }
});

router.post("/join-class", validateToken, async (req, res) => {
  const response = await addUserToTheClass(
    req.body.userInfo.userid,
    req.body.classroomId
  );
  return res.json(response);
});

router.post("/check-valid-class", validateToken, async (req, res) => {
  const response = await checkValidClassRoom(
    parseInt(req.body.classroomid),
    req.body.classroomName
  );
  res.json(response);
});

router.get("/student/getclasses", validateToken, async (req, res) => {
  const classes = await getJoinedClasses(req.body.userInfo.userid);
  if (classes) {
    return res.json({ success: true, classes });
  } else {
    res.json({ success: false, fetchError: "Server error" });
  }
});


export default router;
