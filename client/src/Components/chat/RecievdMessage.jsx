import React from "react";

function RecievdMessage({ msg }) {
  return (
    <div class="flex justify-start mb-4">
      <img
        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
        class="object-cover h-8 w-8 rounded-full"
        alt=""
      />
      <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
        {msg.msgcontent}
      </div>
    </div>
  );
}

export default RecievdMessage;
