import { getAuthToken } from "../utils/userInfo";

const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
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
      const d = new Date(file.uploaddate);

      return { ...file, uploaddate: d.toLocaleDateString() };
    });
    return filesArray || [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
