import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
const Login = () => {
  const [loginProgress, setLoginProgress] = useState(null);
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (response) => {
      handleUserDetails(response);
    },
    onError: (error) => handleEror(error),
  });

  async function handleUserDetails(user) {
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
      setLoginProgress("Please wait verifying your Information...");
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
        handleLoginSuceess({ ...resJSON, picture: jsonData.picture });
        setLoginProgress("Login Successfull!!");
      } else {
        setLoginProgress("Something went Wrong . PLEASE TRY AGAIN !");
      }
    });
  }
  function handleLoginSuceess({ token, username, picture }) {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userName", username);
    localStorage.setItem("picture", picture);
    navigate("/home");
  }

  const handleEror = async (err) => {
    console.log("ERR" + err);
  };
  return (
    <div>
      {loginProgress && <div>{loginProgress}</div>} {/* login error details */}
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
