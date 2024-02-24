import Jwt from "jsonwebtoken";
const JWT_SECRETE = process.env.JWT_SECRETE;

export const createToken = (email, userName, id) => {
  const token = Jwt.sign({ email, userName, id }, JWT_SECRETE);
  return token;
};
