import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthToken } from "../../utils/userInfo";
const REACT_APP_FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
function Files() {
  const { classroomName, classroomid } = useParams();
  const [data, setData] = useState({
    fileName: "",
    fileType: "",
    fileDescription: "",
    file: "",
  });
  const navigate = useNavigate();

  async function handleUploadFile() {
    const formData = new FormData();

    formData.append("file", document.getElementById("fileInput").files[0]);
    formData.append("fileName", data.fileName);
    formData.append("fileDescription", data.fileDescription);
    formData.append("fileType", data.fileType);
    formData.append("classroomName", classroomName);
    formData.append("classroomid", classroomid);
    console.log(data);
    try {
      const token = getAuthToken();
      const response = await fetch(
        REACT_APP_FETCH_BASE_URL + "/classroom/uploadFile",
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: formData,
        }
      );
      const res = await response.json();
      console.log(res);
      if (res.tokenError) {
        navigate("/login");
      }
      if (res.success) {
        if (res.warn) {
          alert(res.warn);
        }
        navigate("/done");
      } else {
        alert("SERVER ERROR COULD NOT JOIN CLASS!");
      }
    } catch (e) {
      console.log("ERROR");
    }
  }
  return (
    <div>
      <input
        type="file"
        class="h-9 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
        onChange={(e) => {
          setData({ ...data, file: e.target.value });
        }}
        id="fileInput"
      />
      <input
        type="text"
        class="h-9 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
        onChange={(e) => {
          setData({ ...data, fileName: e.target.value });
        }}
      />
      <input
        type="text"
        class="h-9 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
        onChange={(e) => {
          setData({ ...data, fileType: e.target.value });
        }}
      />
      <input
        type="text"
        class="h-9 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
        onChange={(e) => {
          setData({ ...data, fileDescription: e.target.value });
        }}
      />
      <button onClick={handleUploadFile}>upload</button>
    </div>
  );
}

export default Files;
