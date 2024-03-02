import React from "react";

function ClassroomBadge({ classDetails }) {
  return (
    <div className=" block mr-4 ml-4 mb-2 max-w-l p-8 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-blue-600  shadow-blue-500/50 dark:border-blue-900 dark:hover:bg-blue-800">
      <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <span>Name: {classDetails && classDetails.classroomname}</span>
        <h3>Leader: {classDetails && classDetails.classroomleaderid}</h3>
        <h5>ID: {classDetails && classDetails.classroomid}</h5>
      </div>
    </div>
  );
}

export default ClassroomBadge;
