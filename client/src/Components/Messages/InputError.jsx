import React from "react";

function InputError({ errorMessage }) {
  return errorMessage ? (
    <div class='relative bg-red-50 dark:bg-gray-800 border border-red-300 rounded-lg shadow-md p-6'>
      <div class='flex items-start'>
        <div class='flex-shrink-0'>
          <svg
            class='h-6 w-6 text-red-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 6v6m0 0v6m0-6h.01m-6.938-2h13.856a2 2 0 0 1 1.789 2.894l-7 14a2 2 0 0 1-3.578 0l-7-14A2 2 0 0 1 5.937 6Z'
            />
          </svg>
        </div>
        <div class='ml-4'>
          <p class='text-sm font-medium text-red-800 dark:text-red-400'>
            Error:
          </p>
          <p class='text-sm text-red-700 dark:text-red-300'>{errorMessage}</p>
        </div>
      </div>
      <button
        class='absolute top-0 right-0 p-1 focus:outline-none text-red-500 hover:text-red-700'
        aria-label='Close'>
        <svg
          class='h-4 w-4 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'>
          <path d='M6 6L18 18M6 18l12-12' />
        </svg>
      </button>
    </div>
  ) : (
    <div></div>
  );
}

export default InputError;
