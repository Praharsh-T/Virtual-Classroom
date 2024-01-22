import React, { useEffect, useState } from "react";
import { getUserName, getAuthToken } from "../utils/userInfo";
function Profile() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName(getUserName());
  }, []);
  return <div>{userName}</div>;
}

export default Profile;
