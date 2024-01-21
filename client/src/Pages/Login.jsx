import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
const Login = () => {
  const [user, setUser] = useState([]);
  const login = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) => handleEror(error),
  });

  useEffect(() => {
    console.log(user);
    fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
      {
        headers: {
          Authorization: `${user.token_type} ${user.access_token}`,
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }, [user]);
  const handleEror = async (err) => {
    console.log("ERR" + err);
  };
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
