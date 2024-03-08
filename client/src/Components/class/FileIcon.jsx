import React, { useState } from "react";
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
      className='flex flex-wrap md:flex-nowrap md:space-x-5 items-start bg-white border border-gray-200 rounded-lg shadow hover:shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-5 cursor-pointer'>
      <img
        className='object-cover w-full md:w-48 rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-t-lg'
        src='/docs/images/blog/image-4.jpg'
        alt='some img'
      />
      <div className='p-4 flex flex-col justify-between w-full md:flex-grow'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white hover:text-blue-500'>
          {file.filename}
        </h5>
        <p className='mb-3 font-normal text-center text-gray-700 dark:text-gray-400 hover:text-blue-500'>
          {file.filedescription}
        </p>
        <h4 className='mb-2 text-center text-xs text-gray-500 hover:text-blue-500'>
          {file.filetype}
        </h4>
      </div>
      {viewFile && (
        <div className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen md:inset-0 bg-transparent backdrop-blur-sm'>
          <div className='relative p-4 pt-2 w-full h-full'>
            <div className='relative rounded-lg shadow w-full h-full'>
              <div className='flex items-center p-4 md:p-5 border border-gray-200 rounded-lg dark:border-gray-600 w-full h-full'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeView();
                  }}
                  className='absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center'>
                  <svg
                    className='w-3 h-3'
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
                  <span className='sr-only'>Close modal</span>
                </button>
                {viewFile && (
                  <ViewFile
                    classroomName={classroomName}
                    classroomid={classroomid}
                    fileid={file.fileid}
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
