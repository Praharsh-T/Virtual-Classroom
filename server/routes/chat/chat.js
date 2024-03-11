import express from "express";
import { validateToken } from "../../middleware/authToken.js";
import { addMessageToChat, getChatHistory } from "../scripts/chat.js";
const router = express.Router();

router.post("/getChatHistoryOfClass", validateToken, async (req, res) => {
  const tableName = "MSG" + req.body.classroomName + req.body.classroomid;
  const chatHistory = await getChatHistory(tableName);
  return res.json({ success: true, chatHistory });
});

router.post("/addNewMessage", validateToken, async (req, res) => {
  const tableName = "MSG" + req.body.classroomName + req.body.classroomid;
  const newMsg = await addMessageToChat(
    tableName,
    req.body.senderId,
    req.body.msgSenderName,
    req.body.msgContent
  );
  if (newMsg) {
    return res.json({ success: true, newMsg });
  } else {
    return res.json({ success: false });
  }
});
export default router;
