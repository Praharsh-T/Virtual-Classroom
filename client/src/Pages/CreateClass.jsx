import React, { useState } from "react";
import { getAuthToken } from "../utils/userInfo";
import { useNavigate } from "react-router-dom";
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
      navigate("/done");
    } else {
      alert("Could not create class");
    }
  }
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setClassRoomData({
              ...classRoomData,
              classroomName: e.target.value,
            });
          }}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}

export default CreateClass;
