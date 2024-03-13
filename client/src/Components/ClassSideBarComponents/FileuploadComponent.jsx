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
    <div>
      <h1 className='text-center text-2xl font-bold text-blue-700 border-b-2 p-4 border-blue-700  mt-4'>
        CHATS
      </h1>
      <div className='flex justify-center'>
        <div class='w-full px-5 flex flex-col justify-between'>
          {chat && (
            <div class='flex flex-col mt-5'>
              {chat.length == 0 ? (
                <div></div>
              ) : (
                chat.map((msg) => {
                  return curId == msg.msgsenderid ? (
                    <SentMessage msg={msg} />
                  ) : (
                    <RecievdMessage msg={msg} />
                  );
                })
              )}
            </div>
          )}
          <div class='py-5 flex'>
            <input
              class='w-full bg-blue-100  placeholder-black py-5 px-3 rounded-xl'
              type='text'
              placeholder='type your message here...'
              onChange={(e) => {
                setNewMsg(e.target.value);
              }}
              value={newMsg}
            />
            <button
              className='p-1 m-1 border-2 rounded-lg hover:bg-blue-100 border-blue-300'
              onClick={() => {
                HandleSend();
              }}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileuploadComponent;
