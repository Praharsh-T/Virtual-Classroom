import { getAuthToken } from "../utils/userInfo";

const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
export const getFilesOfClass = async (classroomName, classroomid) => {
  const token = getAuthToken();
  try {
    const people = await fetch(
      `${FETCH_BASE_URL}/classroom/people/getAllPeople`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ classroomName, classroomid }),
      }
    );
    const peopleJson = await people.json();
    return peopleJson;
  } catch (e) {
    console.log(e);
    return [];
  }
};
