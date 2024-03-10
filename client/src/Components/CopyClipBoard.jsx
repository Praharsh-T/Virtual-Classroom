import React, { useState } from "react";

function CopyClipBoard({ url }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1300);
    }
  };

  return (
    <div className=' bg-white border border-blue-300 rounded-lg shadow-md p-4 w-52 mt-11 ml-11'>
      <h1 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
        Class Code
      </h1>
      <div className='mb-2'>
        <input
          value={url}
          type='text'
          className='bg-white border border-blue-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          disabled
          readOnly
        />
      </div>
      <button
        onClick={copyToClipboard}
        className='bg-white border border-blue-200 rounded-lg px-4 py-2 text-sm text-gray-900 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700'>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default CopyClipBoard;
