import express from "express";
import { validateToken } from "../../middleware/authToken.js";
import { createNewClassRoom } from "../scripts/classroomQuery.js";
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
export default router;
