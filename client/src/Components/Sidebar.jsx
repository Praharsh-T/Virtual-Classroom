import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useTheme } from "../utils/themecontext";

const Sidebar = () => {
  // const { isDarkTheme } = useTheme();
  const [selected, setSelected] = useState("");
  const styleOfLink =
    "flex items-center p-6 hover:bg-blue-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out";
  const styleOfActiveLink =
    "flex items-center p-6 hover:bg-blue-200 border rounded-lg outline-none ring-2 ring-offset-2 ring-blue-500 transition duration-300 ease-in-out";
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r-2 border-blue-200 sm:translate-x-0 dark:bg-gray-900 dark:border-gray-700">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-900">
        <ul className="space-y-3 font-medium">
          <li
            className={`border rounded-lg transition duration-300 ease-in-out ${"bg-gradient-to-r from-skyblue to-teal-900"}`}
          >
            <Link
              to="/"
              className={selected === "HOME" ? styleOfActiveLink : styleOfLink}
              onClick={() => setSelected("HOME")}
            >
              <svg
                className="w-6 h-6 text-gray-500  dark:text-gray-100  transition duration-75 animate__animated animate__pulse infinite"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                fill="currentColor"
                width="24"
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
              <span className="ms-4 text-xl font-medium tracking-tight  dark:text-gray-100">
                Home
              </span>
            </Link>
          </li>
          <li
            className={`border rounded-lg transition duration-300 ease-in-out ${"bg-gradient-to-r from-skyblue to-teal-900"}`}
          >
            <Link
              to="/home/leader/my-classes"
              className={
                selected === "MY_CLASSES" ? styleOfActiveLink : styleOfLink
              }
              onClick={() => setSelected("MY_CLASSES")}
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500  dark:text-gray-100 transition duration-75 animate__animated animate__pulse infinite"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              <span className="ms-4 text-xl font-medium tracking-tight  dark:text-gray-100">
                My Classes
              </span>
            </Link>
          </li>
          <li
            className={`border rounded-lg transition duration-300 ease-in-out ${"bg-gradient-to-r from-skyblue to-teal-900"}`}
          >
            <Link
              to="/home/user/joined-classes"
              className={
                selected === "ENROLLED_CLASSES"
                  ? styleOfActiveLink
                  : styleOfLink
              }
              onClick={() => setSelected("ENROLLED_CLASSES")}
            >
              <svg
                className="w-6 h-6 text-gray-500 transition duration-75 animate__animated animate__pulse infinite  dark:text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                fill="currentColor"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
              </svg>
              <span className="ms-4 text-xl font-medium tracking-tight  dark:text-gray-100">
                Enrolled Classes
              </span>
            </Link>
          </li>

          <li className="border-b border-gray-200 dark:border-gray-700">
            <Link
              to="/create-class"
              className={
                selected === "CREATE_CLASS" ? styleOfActiveLink : styleOfLink
              }
              onClick={() => setSelected("CREATE_CLASS")}
            >
              <svg
                className="w-6 h-6 text-gray-500 transition duration-75  dark:text-gray-100
                animate__animated animate__pulse infinite"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                fill="currentColor"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
              <span className="ms-4 text-xl font-medium tracking-tight  dark:text-gray-100">
                Create Class
              </span>
            </Link>
          </li>

          <li className="border-b border-gray-200 dark:border-gray-700">
            <Link
              to="/join-class"
              className={
                selected === "JOIN_CLASS" ? styleOfActiveLink : styleOfLink
              }
              onClick={() => setSelected("JOIN_CLASS")}
            >
              <svg
                className="w-6 h-6 text-gray-500 transition duration-75 animate__animated animate__pulse infinite  dark:text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                fill="currentColor"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-480-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Zm320-400q33 0 56.5-23.5T400-640q0-33-23.5-56.5T320-720q-33 0-56.5 23.5T240-640q0 33 23.5 56.5T320-560ZM80-240h480v-32q0-11-5.5-20T540-306q-54-27-109-40.5T320-360q-56 0-111 13.5T100-306q-9 5-14.5 14T80-272v32Zm240-400Zm0 400Z" />
              </svg>
              <span className="ms-4 text-xl font-medium tracking-tight  dark:text-gray-100">
                Join Class
              </span>
            </Link>
          </li>
          <li className="border-b border-gray-200 dark:border-gray-700">
            <Link
              to="/login"
              className="flex items-center p-6 hover:bg-blue-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-100 transition duration-75 animate__animated animate__pulse infinite"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span className="ms-3 text-xl font-medium tracking-tight text-gray-900 dark:text-gray-100">
                Sign In
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
