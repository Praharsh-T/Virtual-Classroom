import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import InputError from "../Components/Messages/InputError";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
const Login = () => {
  const [loginProgress, setLoginProgress] = useState(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    if (
      !data.email ||
      !data.password ||
      (signUpOrLogin && (!data.phone || !data.username))
    ) {
      alert("Please fill the form");
      return;
    }

    if (signUpOrLogin && String(data.phone).length < 10) {
      alert("Phone Number must have 10 digits");
      return;
    }

    if (
      signUpOrLogin &&
      !validator.isStrongPassword(data.password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Not Strong Password");
      return;
    } else {
      setErrorMessage("");
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
  function handleLoginSuceess({ token, username, picture, email, userid }) {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userid", userid);
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
          <div class='fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center z-50'>
            <div
              class='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
              role='status'>
              <span class='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                {loginProgress}
              </span>
            </div>
          </div>
        </div>
      )}
      {/* login error details */}
      {/* <button>Login</button> */}
      <div
        class='flex items-center justify-center h-screen bg-cover'
        style={{ backgroundImage: `url('/images/login.jpg')` }}>
        <div class='flex flex-col w-full max-w-md px-4 py-8 bg-white border-2 border-blue-500 rounded-lg shadow md:px-8 lg:px-10'>
          <h1 class='text-center text-blue-500 border-b-2 border-blue-100 p-3 font-semibold text-2xl font-serif'>
            VIRTUAL CLASSROOM
          </h1>
          <div class='self-center mt-4 mb-6 text-xl font-light text-gray-600 sm:text-2xl'>
            {signUpOrLogin ? "Create An Account" : "Login To Your Account"}
          </div>
          <button
            onClick={login}
            type='button'
            class='py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white w-full transition duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg'>
            <svg
              width='20'
              height='20'
              fill='currentColor'
              class='mr-2'
              viewBox='0 0 1792 1792'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z'></path>
            </svg>
            Google
          </button>
          <div class='mt-8'>
            <form
              onSubmit={(e) =>
                handleSubmit(
                  e,
                  signUpOrLogin
                    ? "signupThroughPassword"
                    : "loginThroughPassword"
                )
              }>
              <div class='flex flex-col mb-4'>
                <div class='flex relative'>
                  <span class='rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm'>
                    <svg
                      width='15'
                      height='15'
                      fill='currentColor'
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
                    </svg>
                  </span>
                  <input
                    type='text'
                    class='rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Your email'
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div class='flex flex-col mb-6'>
                <div class='flex relative '>
                  <span class='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                    <svg
                      width='15'
                      height='15'
                      fill='currentColor'
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
                    </svg>
                  </span>
                  {/* <input id="hs-toggle-password" type="password" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter password" value="12345qwerty"> */}

                  <input
                    type={showPassword ? "text" : "password"}
                    class=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Your password'
                    onChange={(e) => {
                      if (
                        signUpOrLogin &&
                        !validator.isStrongPassword(data.password, {
                          minLength: 8,
                          minLowercase: 1,
                          minUppercase: 1,
                          minNumbers: 1,
                          minSymbols: 1,
                        })
                      ) {
                        setErrorMessage("Is not a strong Password");
                      } else {
                        setErrorMessage("");
                      }
                      setData({ ...data, password: e.target.value });
                    }}
                  />
                  <button
                    type='button'
                    class='absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    onClick={() => setShowPassword(!showPassword)}>
                    <svg
                      class='flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'>
                      <path
                        class='hs-password-active:hidden'
                        d='M9.88 9.88a3 3 0 1 0 4.24 4.24'
                      />
                      <path
                        class='hs-password-active:hidden'
                        d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'
                      />
                      <path
                        class='hs-password-active:hidden'
                        d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'
                      />
                      <line
                        class='hs-password-active:hidden'
                        x1='2'
                        x2='22'
                        y1='2'
                        y2='22'
                      />
                      <path
                        class='hidden hs-password-active:block'
                        d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'
                      />
                      <circle
                        class='hidden hs-password-active:block'
                        cx='12'
                        cy='12'
                        r='3'
                      />
                    </svg>
                  </button>
                </div>
                {errorMessage && <InputError errorMessage={errorMessage} />}
              </div>
              {signUpOrLogin && (
                <>
                  <div class='flex flex-col mb-6'>
                    <div class='flex relative '>
                      <span class='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                        <svg
                          width='15'
                          height='15'
                          fill='currentColor'
                          viewBox='0 0 1792 1792'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
                        </svg>
                      </span>
                      <input
                        type='text'
                        class=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                        placeholder='Your name'
                        onChange={(e) => {
                          setData({ ...data, username: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div class='flex flex-col mb-6'>
                    <div class='flex relative '>
                      <span class='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                        <svg
                          width='15'
                          height='15'
                          fill='currentColor'
                          viewBox='0 0 1792 1792'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
                        </svg>
                      </span>
                      <input
                        type='number'
                        class=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                        placeholder='Your Phone'
                        onChange={(e) => {
                          setData({ ...data, phone: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
              <div class='flex items-center mb-6 -mt-4'></div>
              <div class='flex w-full'>
                <button
                  type='submit'
                  class='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
                  {signUpOrLogin ? "Sign Up" : "Login"}
                </button>
              </div>
            </form>
          </div>
          <div
            class='flex items-center justify-center mt-6 cursor-pointer'
            onClick={() => setSignUpOrLogin(!signUpOrLogin)}>
            <div class='inline-flex items-center text-xs font-thin text-gray-500 hover:text-gray-700'>
              <span class='ml-2'>
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
