import React from "react";
import { Link } from "react-router-dom";

function Joinclassnav() {
  return (
    <div>
      <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-gray-800 border-b-2 border-blue-300 fixed">
        <nav
          class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
          aria-label="Global"
        >
          <a class="sm:order-1 flex-none text-xl font-semibold dark:text-white font-serif">
            VIRTUAL CLASSROOM
          </a>
          <div class="sm:order-3 flex items-center gap-x-2">
            <Link
              to="/home"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-200 bg-white text-gray-800 shadow-sm hover:bg-blue-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <a href="/home">Back</a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Joinclassnav;
