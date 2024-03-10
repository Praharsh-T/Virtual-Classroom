import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joinclassnav from "../Components/ClassSideBarComponents/Joinclassnav";

function JoinClassFromFill() {
  const [url, setUrl] = useState("/");

  return (
    <div>
      <Joinclassnav />

      <div className='flex justify-center items-center h-screen '>
        <div className='w-full max-w-md p-8 bg-white  shadow-md rounded-lg mt-1'>
          <h2 className='text-2xl font-bold mb-4'>Join class</h2>

          <div className='my-4'>
            <label
              htmlFor='classCode'
              className='block text-sm font-medium text-gray-700'>
              Class code
            </label>
            <input
              onChange={(e) => setUrl(e.target.value)}
              type='text'
              name='classCode'
              id='classCode'
              className='block w-full appearance-none bg-gray-100 border border-blue-200 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              placeholder='Ask your teacher for the class code, then enter it here.'
            />
          </div>

          <Link
            className='block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center'
            to={url}>
            Join
          </Link>

          <div className='mt-4'>
            <p>To sign in with a class code</p>
            <ul className='list-disc list-inside'>
              <li>Use an authorized account</li>
              <li>
                Use a class code with 5-7 letters or numbers, and no spaces or
                symbols
              </li>
            </ul>
          </div>

          <p className='mt-4'>
            If you have trouble joining the class,{" "}
            <a href='/help-center' className='text-blue-500 underline'>
              go to the Help Center article
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default JoinClassFromFill;
