import React, { useEffect, useState } from "react";
import { getAuthToken } from "../utils/userInfo";
import { useNavigate } from "react-router-dom";

import ClassroomBadge from "../Components/ClassroomBadge";
import { getOwnedClasses, setOwnedClasses } from "../utils/classInfo";
import SmallLoader from "../Components/loaders/SmallLoader";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;

function OwnedClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function getAllClasses() {
    const token = getAuthToken();
    if (!token) {
      navigate("/login");
    }

    const ownedClasses = getOwnedClasses();

    if (ownedClasses) {
      setClasses(ownedClasses);
      console.log(JSON.stringify(ownedClasses));
      setLoading(false);
      return;
    }

    const listOfclass = await fetch(
      FETCH_BASE_URL + "/classroom/leader/getclasses",
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
    setOwnedClasses(listOfclassJson.classes);
    setLoading(false);
  }
  useEffect(() => {
    getAllClasses();
  }, []);

  return loading ? (
    <SmallLoader />
  ) : classes && classes.length ? (
    classes.map((classDetails) => {
      return <ClassroomBadge classDetails={classDetails} />;
    })
  ) : (
    <div
      class='flex bg-red-100 justify-center  rounded-lg p-7 mb-4 text-2xl text-red-700'
      role='alert'>
      <svg
        class='w-7 h-7 inline mr-3'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
          clip-rule='evenodd'></path>
      </svg>
      <div>
        <span class='font-medium '>OOPS!</span> You Don't Have Any Classes.
      </div>
    </div>
  );
}

export default OwnedClasses;
