import React from "react";

function ClassroomBadge({ classDetails }) {
  return (
    <div className="border-2 border-rose-500">
      <span>Name: {classDetails && classDetails.classroomname}</span>
      <h3>Leader: {classDetails && classDetails.classroomleaderid}</h3>
      <h5>ID: {classDetails && classDetails.classroomid}</h5>
    </div>
  );
}

export default ClassroomBadge;
