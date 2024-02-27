import { verifyToken } from "../utils/token.js";

export function validateToken(req, res, next) {
  const decodedInfo = verifyToken(req.headers.authorization);
  if (decodedInfo) {
    req.body.userInfo = decodedInfo;
    next();
  } else {
    res
      .status(498)
      .send({
        success: false,
        fetchError: "Invalid Token!!",
        tokenError: true,
      });
  }
}
