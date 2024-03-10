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
    <div className='bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4'>
      <h1 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
        Class Code
      </h1>
      <div className='flex'>
        <input
          value={url}
          type='text'
          className='flex-grow bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          disabled
          readOnly
        />
        <button
          onClick={copyToClipboard}
          className='ml-2 flex-shrink-0 inline-flex items-center justify-center bg-white border border-gray-200 rounded-lg px-2 py-1 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700'>
          <span className='text-xs font-semibold text-gray-900 dark:text-gray-400'>
            {copied ? "Copied" : "Copy"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default CopyClipBoard;
