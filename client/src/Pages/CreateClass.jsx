import React, { useState } from "react";
import { getAuthToken } from "../utils/userInfo";
import { useNavigate } from "react-router-dom";
import { clearOwnedClasses } from "../utils/classInfo";
import SmallLoader from "../Components/loaders/SmallLoader";
import Joinclassnav from "../Components/ClassSideBarComponents/Joinclassnav";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
const CURRENT_SITE = process.env.RECT_APP_CURRENT_SITE;
function CreateClass() {
  const [classRoomData, setClassRoomData] = useState({ classroomName: "" });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const token = getAuthToken();
    if (!token) {
      navigate("/login");
    }
    if (!classRoomData.classroomName.length) {
      alert("Fill the form");
      return;
    }
    const createResponse = await fetch(FETCH_BASE_URL + "/classroom/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(classRoomData),
    });
    const createResponseJson = await createResponse.json();
    console.log(createResponseJson);
    if (createResponseJson.success) {
      clearOwnedClasses();
      alert("Done");
      setDone(true);
    } else {
      alert("Could not create class");
    }
    setLoading(false);
  }
  return done ? (
    <div class='w-full max-w-[16rem]'>
      <div class='relative'>
        <label for='npm-install-copy-text' class='sr-only'>
          Label
        </label>
        <input
          value={`${CURRENT_SITE}/join/:classroomName/:classroomid`}
          type='text'
          class='col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          disabled
          readonly
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (
              navigator &&
              navigator.clipboard &&
              navigator.clipboard.writeText
            )
              return navigator.clipboard.writeText(
                `${CURRENT_SITE}/join/:classroomName/:classroomid`
              );
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
          class='absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border'>
          {!copied ? (
            <span id='default-message' class='inline-flex items-center'>
              <svg
                class='w-3 h-3 me-1.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 18 20'>
                <path d='M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z' />
              </svg>
              <span class='text-xs font-semibold'>copy</span>
            </span>
          ) : (
            <span id='success-message' class='hidden inline-flex items-center'>
              <svg
                class='w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 16 12'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5.917 5.724 10.5 15 1.5'
                />
              </svg>
              <span class='text-xs font-semibold text-blue-700 dark:text-blue-500'>
                Copied
              </span>
            </span>
          )}
        </button>
      </div>
    </div>
  ) : (
    <section class='grid h-screen place-content-center bg-blue-300 text-slate-300 '>
      {loading && <SmallLoader />}
      <div class=' gap-8 flex items-center h-screen'>
        <div class='mb-10 text-center text-blue-950'>
          <h1 class='text-5xl font-bold tracking-widest '>CREATE CLASS →</h1>
          <p>
            <span class='font-bold'>__________________________________</span>
          </p>
        </div>
        <form>
          <div class='flex flex-col items-center justify-center space-y-6'>
            <input
              class='w-80 appearance-none rounded-full border-0 bg-slate-800 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500'
              placeholder='Class Name'
              type='text'
              onChange={(e) => {
                setClassRoomData({
                  ...classRoomData,
                  classroomName: e.target.value,
                });
              }}
            />
            <button
              onClick={handleSubmit}
              class='rounded-full bg-blue-500 p-2 px-4 text-white hover:bg-orange-500'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateClass;
