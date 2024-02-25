import React from "react";

function ClassroomBadge({ classDetails }) {
  return (
    <div style={{ border: "1px solid grey", padding: "5px", margin: "2px" }}>
      <span>Name: {classDetails && classDetails.classroomname}</span>
      <h3>Leader: {classDetails && classDetails.classroomleaderid}</h3>
      <h5>ID: {classDetails && classDetails.classroomid}</h5>
    </div>
  );
}

export default ClassroomBadge;
