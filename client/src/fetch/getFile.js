import { getAuthToken } from "../utils/userInfo";

const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;

export const getFormatedDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
};

export const getFilesOfClass = async (classroomName, classroomid) => {
  const token = getAuthToken();
  try {
    const files = await fetch(`${FETCH_BASE_URL}/classroom/file/getAllFiles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ classroomName, classroomid }),
    });
    const filesList = await files.json();
    const filesArray = filesList.files.map((file) => {
      return { ...file, uploaddate: getFormatedDate(file.uploaddate) };
    });
    return filesArray || [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
