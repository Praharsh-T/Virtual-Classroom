import React from "react";
import { Link } from "react-router-dom";

function ClassroomBadge({ classDetails }) {
  return (
    <Link
      to={`/class/${classDetails.classroomname}/${classDetails.classroomid}/`}
      className='inline-block w-1/3 md:w-1/4 p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-105 m-2'>
      <div className='text-center mb-4'>
        <h2 className='text-lg lg:text-xl font-bold tracking-tight text-gray-800'>
          {classDetails && classDetails.classroomname}
        </h2>
        <span className='text-sm text-gray-600 block'>
          Leader: {classDetails && classDetails.classroomleaderid}
        </span>
        <span className='text-sm text-gray-600 block'>
          ID: {classDetails && classDetails.classroomid}
        </span>
      </div>
    </Link>
  );
}

export default ClassroomBadge;
