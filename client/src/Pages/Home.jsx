import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import OwnedClasses from "./OwnedClasses";
import JoinedClasses from "./JoinedClasses";
import ClassNav from "../Components/ClassSideBarComponents/ClassNav";
import Intro from "./Intro";

function Home() {
  function openSideBar() {
    console.log("open");
  }
  return (
    <div>
      <Navbar openSideBar={openSideBar} />
      <Sidebar />
      {/* <div>
      </div> */}
      <div class='p-4  sm:ml-64'>
        <div class='p-4 mt-12  rounded-lg dark:border-gray-700'>
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/leader/my-classes' element={<OwnedClasses />} />
            <Route path='/user/joined-classes' element={<JoinedClasses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
