import React from "react";
import {
  ChatIcon,
  UserIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";

function MiniNav() {
  return (
    <nav className='bg-gray-50 dark:bg-gray-700 shadow-md'>
      <div className='max-w-screen-xl px-4 py-3 mx-auto'>
        <ul className='flex items-center justify-center md:justify-start space-x-8 rtl:space-x-reverse text-sm font-medium'>
          <li>
            <a
              href='./chat'
              className='flex items-center text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out'
              aria-current='page'>
              <ChatIcon className='h-5 w-5 mr-1' />
              Chats
            </a>
          </li>
          <li>
            <a
              href='./people'
              className='flex items-center text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out'>
              <UserIcon className='h-5 w-5 mr-1' />
              People
            </a>
          </li>
          <li>
            <a
              href='./notes'
              className='flex items-center text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out'>
              <ClipboardListIcon className='h-5 w-5 mr-1' />
              Notes
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MiniNav;
