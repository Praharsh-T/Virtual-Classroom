import { pool } from "../../db/connect.js";
import {
  addMessageToChatClassRoomQuery,
  getChatHistoryFromClassRoomQuery,
} from "../../query/chatQuery.js";

export const getChatHistory = async (tableName) => {
  try {
    const chatHIstory = await pool.query(
      getChatHistoryFromClassRoomQuery(tableName)
    );
    return chatHIstory.rows;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const addMessageToChat = async (
  tableName,
  senderId,
  msgSenderName,
  msgContent
) => {
  try {
    const newMsg = await pool.query(addMessageToChatClassRoomQuery(tableName), [
      senderId,
      msgSenderName,
      msgContent,
    ]);

    return newMsg.rows[0];
  } catch (e) {
    console.log(e);
    return null;
  }
};
