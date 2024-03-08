import React from 'react'

function MiniNav() {
  return (
    <div>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="./chat"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Chats
                </a>
              </li>
              <li>
                <a
                  href="./people"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  People
                </a>
              </li>
              <li>
                <a
                  href="./notes"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Notes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MiniNav