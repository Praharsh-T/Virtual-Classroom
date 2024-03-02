import React from "react";
import { Link } from "react-router-dom";

function ClassroomBadge({ classDetails }) {
  return (
    <Link
      to={`/${classDetails.classroomname}/${classDetails.classroomleaderid}`}
      className=" block mr-4 ml-4 mb-2 max-w-l p-8 bg-white border  border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-sky-300 shadow-blue-500/50 dark:border-blue-900 dark:hover:bg-blue-400 "
    >
      <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
        <span>Name: {classDetails && classDetails.classroomname}</span>
        <h3>Leader: {classDetails && classDetails.classroomleaderid}</h3>
        <h5>ID: {classDetails && classDetails.classroomid}</h5>
      </div>
    </Link>
  );
}

export default ClassroomBadge;
