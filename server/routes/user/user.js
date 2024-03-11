import express from "express";
const router = express.Router();
import { createToken } from "../../utils/token.js";
import {
  getUserByMailAndName,
  addNewUser,
  addUserToDB,
  getUserByMailAndPassword,
} from "../scripts/userQuery.js";

router.post("/login", async (req, res) => {
  const { email, username } = req.body;
  if (!email || !username) {
    return res.json({ success: false, fetchError: "Invalid Credential!!" });
  }

  const fetchedUser = await getUserByMailAndName(email, username);

  if (fetchedUser) {
    const { email, username, userid } = fetchedUser;
    const token = createToken(email, username, userid);
    return res.json({ success: true, token, username });
  }

  const newUser = await addNewUser(email, username);

  if (newUser) {
    const { email, username, userid } = newUser;
    const token = createToken(email, username, userid);

    return res.json({ success: true, token, username });
  }

  return res.json({ success: false, fetchError: "Internal Server ERROR!!" });
});

router.post("/signupThroughPassword", async (req, res) => {
  const { email, username, password, phone } = req.body;
  if (!email || !username || !password || !phone) {
    return res.json({ success: false, fetchError: "Invalid Credential!!" });
  }
  const fetchedUser = await getUserByMailAndName(email, username);

  if (fetchedUser) {
    return res.json({ success: false, warn: "User Already Exists!!" });
  }

  const newUser = await addUserToDB(email, username, password, phone);
  if (newUser) {
    const { email, username, userid } = newUser;
    const token = createToken(email, username, userid);

    return res.json({ success: true, token, username });
  }
  return res.json({ success: false, fetchError: "Internal Server ERROR!!" });
});

router.post("/loginThroughPassword", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ success: false, fetchError: "Invalid Credential!!" });
  }
  const fetchedUser = await getUserByMailAndPassword(email, String(password));

  if (fetchedUser) {
    const { email, username, userid } = fetchedUser;
    const token = createToken(email, username, userid);
    return res.json({ success: true, token, username, email });
  }
  return res.json({ success: false, fetchError: "Internal Server ERROR!!" });
});
export default router;
