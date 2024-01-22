const jwt = require("jsonwebtoken");
const JWT_SECRETE = process.env.JWT_SECRETE;
const getToken = (email, userName, id) => {
  const token = jwt.sign({ email, userName, id }, JWT_SECRETE);
  return token;
};

module.exports = { getToken };
