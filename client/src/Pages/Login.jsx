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

  const [signUpOrLogin, setSignUpOrLogin] = useState(true);
  //loginThroughPassword
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    phone: "",
  });

  async function handleSubmit(e, route) {
    e.preventDefault();
    if (!data.email || !data.password) {
      alert("Please fill the form");
      return;
    }

    setLoginProgress("Please wait for a moment");
    try {
      const serverRES = await fetch(`${FETCH_BASE_URL}/user/${route}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resJSON = await serverRES.json();
      if (resJSON.success) {
        handleLoginSuceess({
          ...resJSON,
          // username: data.username,
          email: data.email,
        });
        setLoginProgress(false);
      } else {
        alert("Invalid Credentials");
        setLoginProgress(false);
      }
    } catch (e) {
      console.log(e);
      alert("Server Error");
      setLoginProgress(false);
    }
  }
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
      setLoginProgress("Please wait for a moment");
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
        handleLoginSuceess({
          ...resJSON,
          picture: jsonData.picture,
          email: jsonData.email,
        });
        setLoginProgress(false);
      } else {
        setLoginProgress(false);
        alert("Invalid Credentials");
      }
    });
  }
  function handleLoginSuceess({ token, username, picture, email }) {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userName", username);
    localStorage.setItem("picture", picture);
    localStorage.setItem("email", email);
    navigate("/home");
  }

  const handleEror = async (err) => {
    console.log("ERR" + err);
  };
  return (
    <div>
      {loginProgress && (
        <div>
          <div class="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center z-50">
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                {loginProgress}
              </span>
            </div>
          </div>
        </div>
      )}
      {/* login error details */}
      {/* <button>Login</button> */}
      <div
        class="flex items-center justify-center h-screen bg-cover  "
        style={{ backgroundImage: `url('/images/login.jpg')` }}
      >
        <div class="flex flex-col w-full max-w-md px-4 py-8  bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            {signUpOrLogin ? "Create An Account" : "Login To Your Account"}
          </div>
          <button
            onClick={login}
            type="button"
            class="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
            </svg>
            Google
          </button>
          <div class="mt-8">
            <form
              onSubmit={(e) =>
                handleSubmit(
                  e,
                  signUpOrLogin
                    ? "signupThroughPassword"
                    : "loginThroughPassword"
                )
              }
            >
              <div class="flex flex-col mb-2">
                <div class="flex relative ">
                  <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your email"
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <div class="flex relative ">
                  <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <input
                    type="password"
                    class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your password"
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                  />
                </div>
              </div>
              {signUpOrLogin && (
                <>
                  <div class="flex flex-col mb-6">
                    <div class="flex relative ">
                      <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                        </svg>
                      </span>
                      <input
                        type="text"
                        class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Your name"
                        onChange={(e) => {
                          setData({ ...data, username: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div class="flex flex-col mb-6">
                    <div class="flex relative ">
                      <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                        </svg>
                      </span>
                      <input
                        type="number"
                        class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Your Phone"
                        onChange={(e) => {
                          setData({ ...data, phone: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
              <div class="flex items-center mb-6 -mt-4"></div>
              <div class="flex w-full">
                <button
                  type="submit"
                  class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  {signUpOrLogin ? "Sign Up" : "Login"}
                </button>
              </div>
            </form>
          </div>
          <div
            class="flex items-center justify-center mt-6 cursor-pointer"
            onClick={() => setSignUpOrLogin(!signUpOrLogin)}
          >
            <div class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
              <span class="ml-2">
                {signUpOrLogin ? "Already Have An Account?" : "New User?"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
