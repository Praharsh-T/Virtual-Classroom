const { googleLoginQuerry } = require("../query/loginQuery");
const router = require("express").Router();
const { pool } = require("../db/connect");

router.post("/login-through-google", async (req, res) => {
  const { email, userName } = req.body;
  try {
    await pool.query(googleLoginQuerry, [email, userName]);
    return res.json({ success: true });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
