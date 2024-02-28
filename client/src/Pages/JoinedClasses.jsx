import React, { useEffect, useState } from 'react'
import ClassroomBadge from '../Components/ClassroomBadge';
import { getAuthToken } from '../utils/userInfo';
import { useNavigate } from 'react-router-dom';
import JoinedClassRoomBadge from '../Components/JoinedClassRoomBadge';
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
function JoinedClasses() {
    const [classes, setClasses] = useState([]);
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
    }
    useEffect(() => {
      getAllClasses();
    }, []);
    return (
      <div>
        {classes.length &&
          classes.map((classDetails) => {
            return <JoinedClassRoomBadge classDetails={classDetails} />;
          })}
      </div>
    );
}

export default JoinedClasses