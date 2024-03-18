import React, { useState } from "react";
import {
  ChatIcon,
  UserIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const styleOfLink =
  "flex items-center dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out no-underline";
const styleOfActiveLink =
  "flex items-center dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out no-underline text-blue-500 font-semibold ";
function MiniNav({ classroomName }) {
  const [selected, setSeelected] = useState("");
  return (
    <nav className='bg-white dark:bg-gray-700 shadow-md'>
      <div className='max-w-screen-xl md:max-w-screen-xl  px-4 py-3 mx-auto'>
        <h1 class='text-2xl md:text-3xl pl-2 my-2 border-l-4 mb-4 font-sans font-bold border-blue-500 dark:text-gray-200'>
          {classroomName}
        </h1>
        <ul className='flex flex-row md:flex-row items-start md:items-center justify-center md:justify-start space-x-8 rtl:space-x-reverse text-sm font-medium'>
          <li className='px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:border-blue-500 transition-colors duration-300 ease-in-out last:border-r-0'>
            <Link
              to='./chat'
              className={selected === "CHATS" ? styleOfActiveLink : styleOfLink}
              onClick={() => setSeelected("CHATS")}>
              <ChatIcon className='h-5 w-5 mr-1' />
              Chats
            </Link>
          </li>
          <li className='px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:border-blue-500 transition-colors duration-300 ease-in-out last:border-r-0'>
            <Link
              to='./people'
              className={
                selected === "PEOPLE" ? styleOfActiveLink : styleOfLink
              }
              onClick={() => setSeelected("PEOPLE")}>
              <UserIcon className='h-5 w-5 mr-1' />
              People
            </Link>
          </li>
          <li className='px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:border-blue-500 transition-colors duration-300 ease-in-out'>
            <Link
              to='./notes'
              className={selected === "NOTES" ? styleOfActiveLink : styleOfLink}
              onClick={() => setSeelected("NOTES")}>
              <ClipboardListIcon className='h-5 w-5 mr-1' />
              Notes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MiniNav;
