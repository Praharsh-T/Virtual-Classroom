import React from "react";

function Intro() {
  return (
    <div class='max-w-4xl mx-auto px-10 py-4 bg-white rounded-lg shadow-lg'>
      <div>
        <span class='bg-green-100 font-mono text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
          New User
        </span>
      </div>
      <div class='flex flex-col items-center justify-center py-12'>
        <img
          src='https://cdn-icons-png.flaticon.com/128/907/907717.png'
          alt='Welcome Icon'
          class='w-24 h-24 mb-4'></img>
        <h2 class='text-3xl font-semibold mb-2'>
          Welcome to Our Virtual Classroom!
        </h2>
        <p class='text-gray-600 text-center text-lg leading-relaxed'>
          Embark on your educational journey with us and discover a world of
          possibilities through our innovative features tailored to enhance your
          learning experience
        </p>
        <ul class='mt-4 text-gray-600 text-center text-base leading-relaxed'>
          <li class='mb-2'>
            <span class='text-green-500'>✔</span> Seamlessly Create and Share
            Educational Resources
          </li>
          <li class='mb-2'>
            <span class='text-green-500'>✔</span> Connect and Collaborate with
            Fellow Educators and Students
          </li>
          <li class='mb-2'>
            <span class='text-green-500'>✔</span> Discover Engaging Content and
            Inspiring Ideas
          </li>
          <li class='mb-2'>
            <span class='text-green-500'>✔</span> Personalize Your Learning
            Environment
          </li>
        </ul>
        {/* <button class='mt-6 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600'>
          Get Started
        </button> */}
      </div>
    </div>
  );
}

export default Intro;
