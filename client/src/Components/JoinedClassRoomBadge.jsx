import React from 'react'
import { Link } from "react-router-dom";

function JoinedClassRoomBadge({ classDetails }) {
  return (
    <Link
      to={`/class/${classDetails.classroomname}/${classDetails.classroomid}/`}
      className="inline-block w-1/3 md:w-1/4 p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105 m-2"
    >
      <span>Name: {classDetails && classDetails.classroomname}</span>
      <div>ID: {classDetails && classDetails.classroomid}</div>
      <h3>Date: {classDetails && classDetails.enr_date}</h3>
    </Link>
  );
}

export default JoinedClassRoomBadge