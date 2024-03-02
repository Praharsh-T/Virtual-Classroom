import React from 'react'

export default function Hero() {
  return (
    <div class="container mx-auto my-8 space-y-10">

    <h1 class="text-center font-bold text-3xl my-10 text-gray-800 font-mono">Empty State Components Collection</h1>
    <div class="max-w-4xl mx-auto px-10 py-4 bg-white rounded-lg shadow-lg">
      <div>
        <span
          class="bg-green-100 font-mono text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Blank
          Slate Empty State</span>
      </div>
      <div class="flex flex-col justify-center py-12 items-center">
  
        <div class="flex justify-center items-center">
          <img class="w-64 h-64"
            src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690257804/jjqw2hfv0t6karxdeq1s.svg"
            alt="image empty states"/>
        </div>
        <h1 class="text-gray-700 font-medium text-2xl text-center mb-3">Create a Project and get organized!</h1>
        <p class="text-gray-500 text-center mb-6">Project are the backbones of time entry categorization in your
          workspace.</p>
        <div class="flex flex-col justify-center">
          <button class="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6  mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Create New Project
          </button>
          <a href="#" class="underline mt-4 text-sm font-light mx-auto">Learn more</a>
        </div>
      </div>
    </div>
    </div>
  )
}
