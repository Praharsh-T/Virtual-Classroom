import React from "react";

function InfoTab() {
  return (
    <div class='border mt-11 mx-4   md:mx-auto border-blue-300 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between'>
      <div class='flex items-center'>
        <div class='w-10 h-12 flex-none border border-blue-300 p-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='w-full h-full'
            viewBox='0 0 24 24'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zm0 2H7v14h10V5zm-7 6h2v2H7v-2z' />
          </svg>
        </div>
        <div class='ml-4'>
          <h2 class='text-xl font-semibold'>
            This is where you can talk to your class
          </h2>
          <p class='mt-2'>Description</p>
        </div>
      </div>
      <div class='mt-4 md:mt-0'>
        <a
          href='#'
          class='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:text-white'>
          More Info
        </a>
      </div>
    </div>
  );
}

export default InfoTab;
