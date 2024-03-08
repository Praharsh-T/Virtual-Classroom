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
      className='inline-block mb-4 mr-4 max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
      <div className='bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
        <img
          className='object-cover w-full h-48 rounded-t-lg'
          src='/docs/images/blog/image-4.jpg'
          alt='File Icon'
        />
        <div className='p-4'>
          <h5 className='text-lg font-bold text-gray-800'>{file.filename}</h5>
          <p className='mt-2 text-sm text-gray-600 truncate'>
            {file.filedescription}
          </p>
          <h4 className='mt-2 text-xs text-gray-500'>{file.filetype}</h4>
        </div>
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
