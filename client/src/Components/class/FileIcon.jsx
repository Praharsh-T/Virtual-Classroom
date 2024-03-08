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
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-5"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/docs/images/blog/image-4.jpg"
        alt="some img"
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {file.filename}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {file.filedescription}
        </p>
        <h4>{file.filetype}</h4>
      </div>
      <div
        className={
          viewFile === true
            ? "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen md:inset-0 bg-transparent backdrop-blur-sm"
            : "hidden"
        }
      >
        <div class="relative p-4 pt-2 w-full h-full">
          <div class="relative rounded-lg shadow w-full h-full">
            <div class="flex items-center p-4 md:p-5 border border-gray-200 rounded-lg dark:border-gray-600 w-full h-full">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeView();
                  console.log(setViewFile);
                }}
                class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
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
    </div>
  );
}

export default FileIcon;
