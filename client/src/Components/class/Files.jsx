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
        REACT_APP_FETCH_BASE_URL + "/classroom/file/uploadFile",
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
    <div className='flex'>
      <div className='flex-auto bg-gray-100 p-8'>{/* CHatarea */}</div>
      <div className='fixed top-0 right-0 h-full w-90 bg-gray-200 p-9'>
        <div class='flex flex-col min-h-screen items-center justify-center bg-gray-100 '>
          <h1 class='font-bold text-2xl'>UPLOAD YOUR FILES HERE</h1>

          <div class='flex item-center border border-black p-9  flex-col gap-9 w-max '>
            <div class='relative w-full min-w-[200px] h-10'>
              <input
                type='text'
                class='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500'
                placeholder=' '
                onChange={(e) => {
                  setData({ ...data, fileName: e.target.value });
                }}
              />
              <label class="flex font-semibold w-full h-full select-none pointer-events-none absolute left-0  !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                FILE NAME
              </label>
            </div>

            <div class='relative w-full min-w-[200px] h-10'>
              <input
                type='text'
                class='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500'
                placeholder=' '
                onChange={(e) => {
                  setData({ ...data, fileType: e.target.value });
                }}
              />
              <label class="flex w-full font-semibold  h-full select-none pointer-events-none absolute left-0  !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                FILE TYPE
              </label>
            </div>

            <div class='relative  w-full min-w-[200px] h-10 '>
              <input
                type='textarea'
                class='peer  w-full h-24 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500'
                placeholder=' '
                onChange={(e) => {
                  setData({ ...data, fileDescription: e.target.value });
                }}
              />
              <label class="flex w-full h-full font-semibold  select-none pointer-events-none absolute left-0 !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                FILE DESCRIPTION
              </label>
            </div>

            <input
              type='file'
              class='w-full mt-7 text-black text-lg bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded'
              onChange={(e) => {
                setData({ ...data, file: e.target.value });
              }}
              id='fileInput'
            />
            <button
              onClick={handleUploadFile}
              class='align-middle select-none font-sans font-bold text-center justify-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3'
              type='button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='2'
                stroke='currentColor'
                class='w-5 h-5'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'></path>
              </svg>
              Upload Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Files;
