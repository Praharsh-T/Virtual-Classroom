import React, { useState } from "react";
import { getAuthToken } from "../utils/userInfo";
import { Link, useNavigate } from "react-router-dom";
import { clearOwnedClasses } from "../utils/classInfo";
import SmallLoader from "../Components/loaders/SmallLoader";
import CopyClipBoard from "../Components/CopyClipBoard";
import Joinclassnav from "../Components/ClassSideBarComponents/Joinclassnav";
import validator from "validator";
import InputError from "../Components/Messages/InputError";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
const CURRENT_SITE = process.env.REACT_APP_CURRENT_SITE;

function CreateClass() {
  const [classRoomData, setClassRoomData] = useState({
    classroomName: "",
    classroomid: "",
  });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [urlInfo, setUrlInfo] = useState({
    classroomName: "",
    classroomid: "",
    description: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if (!classRoomData.classroomName || error || !classRoomData.description) {
      alert("Invalid details");
      return;
    }
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
      setDone(true);
      setUrlInfo({
        classroomName: createResponseJson.classRoomInfo.classroomname,
        classroomid: createResponseJson.classRoomInfo.classroomid,
      });
    } else {
      alert("Could not create class");
    }
    setLoading(false);
  }
  return done ? (
    <div>
      <Joinclassnav />
      <div class='flex items-center justify-center h-screen'>
        <div class='w-full max-w-md bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500'>
          <h2 class='text-lg font-semibold mb-4 text-center'>
            Class Created Successfully!!
          </h2>
          <div class='w-full max-w-[16rem] mx-auto flex flex-col items-center'>
            <CopyClipBoard
              url={`${CURRENT_SITE}/join/${urlInfo.classroomName}/${urlInfo.classroomid}`}
            />
            <Link
              className='inline-block mt-5 py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              to={`/class/${urlInfo.classroomName}/${urlInfo.classroomid}/`}>
              View Class
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Joinclassnav />
      <section class='h-screen flex items-center justify-center bg-white'>
        <div class='max-w-md bg-white p-8 rounded-lg shadow-lg border border-blue-300'>
          <div class='mb-5 text-center text-black'>
            <h1 class='text-2xl font-semibold font-serif p-2 tracking-widest  border-b-2  border-blue-300'>
              CREATE CLASS{" "}
            </h1>
          </div>
          {loading && <SmallLoader />}
          <form>
            <div class='flex flex-col items-center justify-center space-y-6'>
              <span>
                <input
                  class='w-80 appearance-none rounded-full border-2 border-blue-400 placeholder-blue-800 bg-blue-50 p-2 px-4 focus:bg-blue-100 '
                  placeholder=' Enter the Class Name'
                  type='text'
                  onChange={(e) => {
                    if (!validator.isAlpha(e.target.value)) {
                      setError("Only Alphabets are allowed");
                    } else {
                      setError("");
                    }
                    setClassRoomData({
                      ...classRoomData,
                      classroomName: e.target.value,
                    });
                  }}
                />
                {error && <InputError errorMessage={error} />}
              </span>
              <textarea
                class='w-80 appearance-none rounded-md border-2 border-blue-400 placeholder-blue-800 bg-blue-50 p-2 px-4 focus:bg-blue-100 '
                placeholder=' Enter the Class Description'
                type='text'
                onChange={(e) => {
                  setClassRoomData({
                    ...classRoomData,
                    description: e.target.value,
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
    </div>
  );
}

export default CreateClass;
