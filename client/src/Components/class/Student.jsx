import React from "react";

function Student({ user }) {
  const { email, enr_date, post_access, userid, username } = user;
  return <div>{username}</div>;
}

export default Student;
