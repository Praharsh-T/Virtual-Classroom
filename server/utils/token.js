import Jwt from "jsonwebtoken";
const JWT_SECRETE = process.env.JWT_SECRETE;

export const createToken = (email, userName, userid) => {
  const token = Jwt.sign({ email, userName, userid }, JWT_SECRETE);
  return token;
};

export const verifyToken = (token) => {
  if (!token) return null;
  const decodedInfo = Jwt.verify(token, JWT_SECRETE);
  return decodedInfo;
};