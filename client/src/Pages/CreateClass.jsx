import React, { useState } from "react";
import { getAuthToken } from "../utils/userInfo";
import { useNavigate } from "react-router-dom";
import { clearOwnedClasses } from "../utils/classInfo";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;

function CreateClass() {
  const [classRoomData, setClassRoomData] = useState({ classroomName: "" });
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
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
      navigate("/done");
    } else {
      alert("Could not create class");
    }
  }
  return (   
    <section class="grid h-screen place-content-center bg-blue-300 text-slate-300 ">
     
    <div class=" gap-8 flex items-center h-screen">
        <div class="mb-10 text-center text-blue-950">
    <h1 class="text-5xl font-bold tracking-widest ">CREATE CLASS →</h1>
    <p><span class="font-bold">__________________________________</span></p>
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
     
)};

 
   
   
   

export default CreateClass;
