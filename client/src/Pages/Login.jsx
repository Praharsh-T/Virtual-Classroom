import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
const Login = () => {
  const [user, setUser] = useState([]);
  const login = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) => handleEror(error),
  });

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
      {
        headers: {
          Authorization: `${user.token_type} ${user.access_token}`,
          "Content-Type": "application/json",
        },
      }
    ).then(async (res) => {
      const jsonData = await res.json();
      if (jsonData.error) return;
      const serverRES = await fetch(
        `${FETCH_BASE_URL}/user/login-through-google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: jsonData.email,
            userName: jsonData.name,
          }),
        }
      );
      const resJSON = await serverRES.json();
      if (resJSON.success) {
        alert("SUCCESS");
      } else {
        alert("ERROR:", resJSON.fetchError);
      }
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
