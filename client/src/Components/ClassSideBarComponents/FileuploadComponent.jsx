import React, { useEffect, useState } from "react";
import { getAllMessage, sendMessage } from "../../fetch/chat";
import SentMessage from "../chat/SentMessage";
import RecievdMessage from "../chat/RecievdMessage";
import { getUserId, getUserName } from "../../utils/userInfo";
const curId = getUserId();
function FileuploadComponent({ classroomName, classroomid }) {
  const [chat, setChat] = useState(null);
  const [newMsg, setNewMsg] = useState(null);
  async function HandleSend() {
    if (!newMsg) return;
    const res = await sendMessage(
      classroomName,
      classroomid,
      getUserId(),
      getUserName(),
      newMsg
    );
    if (res.newMsg) {
      setChat([...chat, res.newMsg]);
    }
    setNewMsg("");
  }
  useEffect(() => {
    getAllMessage(classroomName, classroomid).then((history) => {
      setChat(history);
    });
  }, []);
  return (
    <div className="flex justify-center">
      <div class="w-full px-5 flex flex-col justify-between">
        <div class="flex flex-col mt-5">
          {chat &&
            chat.length &&
            chat.map((msg) => {
              return curId == msg.msgsenderid ? (
                <SentMessage msg={msg} />
              ) : (
                <RecievdMessage msg={msg} />
              );
            })}
        </div>
        <div class="py-5 flex">
          <input
            class="w-full bg-gray-300 py-5 px-3 rounded-xl"
            type="text"
            placeholder="type your message here..."
            onChange={(e) => {
              setNewMsg(e.target.value);
            }}
            value={newMsg}
          />
          <button
            className="p-1 m-1"
            onClick={() => {
              HandleSend();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default FileuploadComponent;
