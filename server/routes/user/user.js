const router = require("express").Router();
const { getUserByMailAndName, addNewUser } = require("../scripts/userQuery");
const { getToken } = require("../../utils/token");

router.post("/login", async (req, res) => {
  const { email, username } = req.body;
  if (!email || !username) {
    return res.json({ success: false, fetchError: "Invalid Credential!!" });
  }

  const fetchedUser = await getUserByMailAndName(email, username);

  if (fetchedUser) {
    const { email, username, id } = fetchedUser;
    const token = getToken(email, username, id);
    return res.json({ success: true, token, username });
  }

  const newUser = await addNewUser(email, username);

  if (newUser) {
    const { email, username, id } = newUser;
    const token = getToken(email, username, id);

    return res.json({ success: true, token, username });
  }

  return res.json({ success: false, fetchError: "Internal Server ERROR!!" });
});

module.exports = router;
