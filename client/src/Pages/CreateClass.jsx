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
    <div class="flex items-center justify-center h-screen">
      <form>
        <div class="flex gap-4">
          <input
            class="h-9 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
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
            class="h-9 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
          >
            Submit
          </button>
        </div>
      </form>
      
    </div>
  );
}

 
   
   
   

export default CreateClass;
