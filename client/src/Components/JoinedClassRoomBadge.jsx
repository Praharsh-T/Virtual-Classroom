import React from "react";
import { Link } from "react-router-dom";
import ClassNav from "./ClassSideBarComponents/ClassNav";

function JoinedClassRoomBadge({ classDetails }) {
  return (
    <Link
      to={`/class/${classDetails.classroomname}/${classDetails.classroomid}/`}
      className='inline-block w-1/3 md:w-1/4 p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-2 border-blue-500 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105 m-2'>
      <div className='text-center mb-4'>
        <h2 className='text-lg lg:text-xl font-bold tracking-tight text-gray-800'>
          <span>Name: {classDetails && classDetails.classroomname}</span>
        </h2>
        <div className='text-sm text-gray-600 '>
          ID: {classDetails && classDetails.classroomid}
        </div>
        <h3 className='text-sm text-gray-600 '>
          Date: {classDetails && classDetails.enr_date}
        </h3>
      </div>
    </Link>
  );
}

export default JoinedClassRoomBadge;
