import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewFile from "./ViewFile";

function FileIcon({ file }) {
  const { classroomName, classroomid } = useParams();
  const [viewFile, setViewFile] = useState(false);
  function closeView() {
    setViewFile(false);
  }

  return (
    <div
      onClick={() => setViewFile(true)}
      class='relative w-full sm:w-2/5 lg:w-3/5 xl:w-2/5 h-auto p-8 sm:p-10 overflow-hidden border bg-white border-slate-100 rounded-lg mx-2 md:mx-6'>
      <span class='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

      <div class='justify-between sm:flex'>
        <div class='flex-shrink-0 hidden ml-3 sm:block'>
          <svg
            focusable='false'
            width='44'
            height='44'
            viewBox='0 0 24 24'
            class='NMm5M'>
            <path d='M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16z'></path>
          </svg>
        </div>
        <div>
          <h4 class='text-xl font-bold text-slate-900'>{file.filename}</h4>
          <p class='mt-1 text-xs font-medium text-slate-600'>{file.filetype}</p>
        </div>
      </div>

      <div class='mt-4 sm:pr-8'>
        <p class='text-sm text-slate-500'>{file.filedescription}</p>
      </div>

      <dl class='flex mt-6'>
        <div class='flex flex-col-reverse'>
          <dt class='text-sm font-medium text-slate-600'>Published</dt>
          <dd class='text-xs text-slate-500'>{file.uploaddate}</dd>
        </div>
      </dl>

      {viewFile && (
        <div class='fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-transparent backdrop-blur-sm'>
          <div class='relative p-4 pt-2 w-full h-full'>
            <div class='relative rounded-lg shadow w-full h-full'>
              <div class='flex items-center p-4 md:p-5 border border-gray-200 rounded-lg dark:border-gray-600 w-full h-full'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeView();
                  }}
                  class='absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center'>
                  <svg
                    class='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'>
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                  <span class='sr-only'>Close modal</span>
                </button>

                {viewFile && (
                  <ViewFile
                    classroomName={classroomName}
                    classroomid={classroomid}
                    fileid={file.fileid}
                    filename={file.filename}
                    filetype={file.filetype}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileIcon;
