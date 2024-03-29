import React from 'react'
import { Link } from 'react-router-dom'



function Dashboard() {
  return (
 <div>
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen ">
    
  <div class="bg-gradient-to-b  from-violet-600/[.15] via-transparent">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
     
      <div class="flex justify-center">
        <Link to="/Login" class="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md" >
          <p class="me-2 inline-block text-black text-sm">
           JOIN CLASSES NOW
          </p>
          <span class="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
            <svg class="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </span>
        </Link>
      </div>
   
      <div class="max-w-3xl text-center  mx-auto animate-pulse">
        <h1 class="block font-medium font-serif text-2xl text-blue-950  sm:text-5xl md:text-6xl lg:text-9xl ">
          VIRTUAL CLASSROOM
        </h1>
      </div>
      

      <div class="max-w-3xl text-center mx-auto">
        <p class="text-3xl font-semibold font-serif text-blue-950">Organize, Collaborate and Learn Together on Virtual Classroom</p>
      </div>

   
      <div class="text-center">
        <Link to="/home" class="inline-flex font-semibold justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-400 to-violet-400 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-black text-sm  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800">
          Get started
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </Link>
      </div>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default Dashboard
