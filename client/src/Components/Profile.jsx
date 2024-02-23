import React, { useEffect, useState } from "react";
import { getUserName, getAuthToken, getUserProfile } from "../utils/userInfo";
function Profile() {
  const [userName, setUserName] = useState();
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    setUserName(getUserName());
    setUserProfile(getUserProfile());
  }, []);
  return (
    <div>
      {userProfile && <img src={userProfile} alt="Profile" />}
      {userName}
    </div>
  );
}

export default Profile;
