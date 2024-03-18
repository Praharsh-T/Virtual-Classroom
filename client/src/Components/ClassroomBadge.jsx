import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUserName } from "../utils/userInfo";

function ClassroomBadge({ classDetails }) {
  const [openSetting, setOpenSetting] = useState(false);
  return (
    <div class='inline-block w-full md:w-1/3 lg:w-1/4 p-6 bg-white bg-opacity-10 backdrop-filter border-2 border-blue-500 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 m-2'>
      <div class='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div class='flex flex-col items-center pb-10 relative'>
          <div class='absolute w-full top-0 right-0 flex flex-col'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenSetting(!openSetting);
              }}
              class='self-end inline-block text-black dark:text-black focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm mr-2 mt-1'
              type='button'>
              <span class='sr-only'>Open dropdown</span>
              <svg
                class='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 16 3'>
                <path d='M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z' />
              </svg>
            </button>
            <div
              class={
                openSetting
                  ? "z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  : "hidden"
              }>
              <ul class='py-2'>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Link
            to={{
              pathname: `/class/${classDetails.classroomname}/${classDetails.classroomid}/`,
            }}
            className='text-center'>
            <img
              class='w-full'
              src='/Images/bckimg.jpg'
              alt='Sunset in the mountains'></img>
            <h5 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
              {classDetails && classDetails.classroomname}
            </h5>
            <div class='text-sm text-gray-500 dark:text-gray-400'>
              Class Leader : {classDetails && getUserName()}
            </div>
            <span class='text-sm text-gray-500 dark:text-gray-400'>
              ClassRoom ID : {classDetails && classDetails.classroomid}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClassroomBadge;
