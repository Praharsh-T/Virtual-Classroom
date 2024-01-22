const router = require("express").Router();
const { getUserByMailAndName, addNewUser } = require("../scripts/userQuery");
const { getToken } = require("../../utils/token");

router.post("/login-through-google", async (req, res) => {
  const { email, userName } = req.body;
  if (!email || !userName) {
    return res.json({ success: false, fetchError: "Invalid Credential!!" });
  }

  const fetchedUser = await getUserByMailAndName(email, userName);

  if (fetchedUser) {
    const { email, username, id } = fetchedUser;
    const token = getToken(email, username, id);
    return res.json({ success: true, token, userName });
  }

  const newUser = await addNewUser(email, userName);

  if (newUser) {
    const { email, username, id } = newUser;
    const token = getToken(email, username, id);

    return res.json({ success: true, token, userName });
  }

  return res.json({ success: false, fetchError: "Internal Server ERROR!!" });
});

module.exports = router;
