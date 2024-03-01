import React, { useEffect, useState } from "react";
import {
  getUserName,
  getEmail,
  getUserProfile,
  logOut,
} from "../utils/userInfo";
import { Link, useNavigate } from "react-router-dom";
function Profile() {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    profile: "",
  });
  const [showDropDown, setShowDropDown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setUserInfo({
      userName: getUserName(),
      email: getEmail(),
      profile: getUserProfile(),
    });
  }, []);
  return (
    <div>
      <div className="flex items-center">
        <div className="relative flex items-center ms-3">
          <div>
            <button
              type="button"
              className={`flex text-sm bg-gray-800 rounded-full ${
                showDropDown
                  ? "focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  : ""
              }`}
              onClick={() => setShowDropDown(!showDropDown)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={userInfo.profile}
                alt="user photo"
              />
            </button>
          </div>
          <div
            className={`absolute ${
              showDropDown ? "" : "hidden"
            } top-4 right-5 w-max z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
          >
            <div className="px-4 py-3" role="none">
              <p className="text-sm text-gray-900 dark:text-white" role="none">
                {userInfo.userName}
              </p>
              <p
                className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                role="none"
              >
                {userInfo.email}
              </p>
            </div>
            <ul className="py-1" role="none">
              <li>
                <Link
                  to="/home"
                  className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <button
                  className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    logOut();
                    navigate("/login");
                  }}
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
