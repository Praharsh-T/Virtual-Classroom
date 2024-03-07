import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Profile from "./Profile";
export function ClassSidebar() {
  return (
    <div>
      <Navbar />
      <Profile/>
      <Sidebar/>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <section>
    <div class="py-16">
        <div class="mx-auto px-6 max-w-6xl text-gray-500">
           
            <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div aria-hidden="true" class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                    <div class="relative">
                        <div class="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                            <svg class="text-[#000014] dark:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
                                <defs>
                                    <linearGradient id="deviconAstro0" x1="882.997" x2="638.955" y1="27.113" y2="866.902" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stop-color="currentColor"></stop>
                                        <stop offset="1" stop-color="currentColor"></stop>
                                    </linearGradient>
                                    <linearGradient id="deviconAstro1" x1="1001.68" x2="790.326" y1="652.45" y2="1094.91" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stop-color="#ff1639"></stop>
                                        <stop offset="1" stop-color="#ff1639" stop-opacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                            <p class="text-gray-700 dark:text-gray-300">TEXT HERE</p>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
          
        </div>
      </div>

    </div>
  );
}
