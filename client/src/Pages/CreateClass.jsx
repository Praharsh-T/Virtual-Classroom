import React, { useState } from "react";
import { getAuthToken } from "../utils/userInfo";
import { Link, useNavigate } from "react-router-dom";
import { clearOwnedClasses } from "../utils/classInfo";
import SmallLoader from "../Components/loaders/SmallLoader";
import CopyClipBoard from "../Components/CopyClipBoard";
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
  });
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
    <div class="w-full max-w-[16rem]">
      <CopyClipBoard
        url={`${CURRENT_SITE}/join/${urlInfo.classroomName}/${urlInfo.classroomid}`}
      />
      <Link
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        to={`/class/${urlInfo.classroomName}/${urlInfo.classroomid}/`}
      >
        View Class
      </Link>
    </div>
  ) : (
    <section class="grid h-screen place-content-center bg-blue-300 text-slate-300 ">
      {loading && <SmallLoader />}
      <div class=" gap-8 flex items-center h-screen">
        <div class="mb-10 text-center text-blue-950">
          <h1 class="text-5xl font-bold tracking-widest ">CREATE CLASS →</h1>
          <p>
            <span class="font-bold">__________________________________</span>
          </p>
        </div>
        <form>
          <div class="flex flex-col items-center justify-center space-y-6">
            <input
              class="w-80 appearance-none rounded-full border-0 bg-slate-800 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
              placeholder="Class Name"
              type="text"
              onChange={(e) => {
                setClassRoomData({
                  ...classRoomData,
                  classroomName: e.target.value,
                });
              }}
            />
            <button
              onClick={handleSubmit}
              class="rounded-full bg-blue-500 p-2 px-4 text-white hover:bg-orange-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateClass;
