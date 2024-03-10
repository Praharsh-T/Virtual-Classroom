import express from "express";
import { validateToken } from "../../middleware/authToken.js";
import {
  getLeaderFromClassroom,
  getPeopleFromClass,
} from "../scripts/people.js";

const router = express.Router();

router.post("/getAllPeople", validateToken, async (req, res) => {
  const people = await getPeopleFromClass(req.body.classroomid);
  return res.json({ success: true, people });
});

router.post("/getLeader", validateToken, async (req, res) => {
  const Leader = await getLeaderFromClassroom(req.body.classroomleaderid);
  return res.json({ success: true, Leader });
});
export default router;
