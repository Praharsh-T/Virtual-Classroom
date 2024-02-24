import express from "express";
const router = express.Router();
import { createToken } from "../../utils/token.js";
import { getUserByMailAndName, addNewUser } from "../scripts/userQuery.js";

router.post("/login", async (req, res) => {
  const { email, username } = req.body;
  if (!email || !username) {
    return res.json({ success: false, fetchError: "Invalid Credential!!" });
  }

  const fetchedUser = await getUserByMailAndName(email, username);

  if (fetchedUser) {
    const { email, username, id } = fetchedUser;
    const token = createToken(email, username, id);
    return res.json({ success: true, token, username });
  }

  const newUser = await addNewUser(email, username);

  if (newUser) {
    const { email, username, id } = newUser;
    const token = createToken(email, username, id);

    return res.json({ success: true, token, username });
  }

  return res.json({ success: false, fetchError: "Internal Server ERROR!!" });
});

export default router;
