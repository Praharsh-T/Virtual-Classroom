import React from "react";

function Student({ user }) {
  const { email, enr_date, post_access, userid, username, profile } = user;
  return (
    <div className='flex '>
      <img
        className='w-8 h-8 rounded-full mr-5'
        src={profile ? profile : "/Images/profile.svg"}
        onError={(e) => {
          e.target.src = "/Images/profile.svg";
          e.onError = null;
        }}
        alt='user photo'
      />
      <h3>{username}</h3>
    </div>
  );
}

export default Student;
