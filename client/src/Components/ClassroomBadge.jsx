import React from "react";

function ClassroomBadge({ classDetails }) {
  return (
    <div className=" flex items-center justify-between w-64 p-4 bg-white hover:bg-sky-200 rounded-2xl text-sm text-black-500 border-2 border-solid border-blue-900 shadow-2xl">
      
      <span>Name: {classDetails && classDetails.classroomname}</span>
      <h3>Leader: {classDetails && classDetails.classroomleaderid}</h3>
      <h5>ID: {classDetails && classDetails.classroomid}</h5>
    </div>
  );
}

export default ClassroomBadge;
