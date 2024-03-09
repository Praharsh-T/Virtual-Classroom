import express from "express";
import { validateToken } from "../../middleware/authToken.js";
import { getPeopleFromClass } from "../scripts/people.js";

const router = express.Router();

router.post("/getAllPeople", validateToken, async (req, res) => {
  const people = await getPeopleFromClass(req.body.classroomid);
  return res.json({ success: true, people });
});

export default router;
