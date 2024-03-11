import React from "react";

function SentMessage({ msg }) {
  return (
    <div class="flex justify-end mb-4">
      <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
        {msg.msgcontent}
      </div>
      <img
        src="/Images/profile.svg"
        class="object-cover h-8 w-8 rounded-full"
        alt=""
      />
    </div>
  );
}

export default SentMessage;
