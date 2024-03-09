import React, { useEffect, useState } from "react";
import { getAuthToken } from "../utils/userInfo";
import { useNavigate } from "react-router-dom";
import JoinedClassRoomBadge from "../Components/JoinedClassRoomBadge";
import SmallLoader from "../Components/loaders/SmallLoader";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;

function JoinedClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function getAllClasses() {
    const token = getAuthToken();
    if (!token) {
      navigate("/login");
    }
    const listOfclass = await fetch(
      FETCH_BASE_URL + "/classroom/student/getclasses",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const listOfclassJson = await listOfclass.json();
    console.log(listOfclassJson);
    setClasses(listOfclassJson.classes);
    setLoading(false);
  }
  useEffect(() => {
    getAllClasses();
  }, []);
  return loading ? (
    <SmallLoader />
  ) : (
    <div>
      {classes.length &&
        classes.map((classDetails, i) => {
          return <JoinedClassRoomBadge classDetails={classDetails} key={i} />;
        })}
    </div>
  );
}

export default JoinedClasses;
