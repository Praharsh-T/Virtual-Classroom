import React from 'react'

function JoinedClassRoomBadge({classDetails}) {
    return (
        <div style={{ border: "1px solid grey", padding: "5px", margin: "2px" }}>
          <span>Name: {classDetails && classDetails.classroomname}</span>
          <div>ID: {classDetails && classDetails.classroomid}</div>
          <h3>Date: {classDetails && classDetails.enr_date}</h3>
        </div>
    );
}

export default JoinedClassRoomBadge