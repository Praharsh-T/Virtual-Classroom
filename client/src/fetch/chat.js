import { getAuthToken } from "../utils/userInfo";

const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;

export const getAllMessage = async (classroomName, classroomid) => {
  const token = getAuthToken();
  try {
    const chat = await fetch(
      `${FETCH_BASE_URL}/classroom/chat/getChatHistoryOfClass`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          classroomName,
          classroomid,
        }),
      }
    );
    const chatList = await chat.json();
    console.log(chatList);
    return chatList.chatHistory;
  } catch (e) {
    console.log(e);
  }
};

export const sendMessage = async (
  classroomName,
  classroomid,
  senderId,
  msgSenderName,
  msgContent
) => {
  const token = getAuthToken();
  try {
    const chat = await fetch(`${FETCH_BASE_URL}/classroom/chat/addNewMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        classroomName,
        classroomid,
        senderId,
        msgSenderName,
        msgContent,
      }),
    });
    const chatList = await chat.json();
    console.log(chatList);
    return chatList;
  } catch (e) {
    return {};
    console.log(e);
  }
};
