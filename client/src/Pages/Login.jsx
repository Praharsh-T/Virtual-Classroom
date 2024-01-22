import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
const Login = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) => handleEror(error),
  });

  const handleLoginSuceess = ({ token, username }) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userName", username);
    navigate("/home");
  };
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
      console.log(jsonData);
      if (jsonData.error) return;
      const serverRES = await fetch(`${FETCH_BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: jsonData.email,
          username: jsonData.name,
        }),
      });
      const resJSON = await serverRES.json();
      if (resJSON.success) {
        handleLoginSuceess(resJSON);
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
