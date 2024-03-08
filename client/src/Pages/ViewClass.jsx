import React from "react";
import { Route, Routes } from "react-router-dom";
import ViewFile from "../Components/class/ViewFile";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MiniNav from "../Components/ClassSideBarComponents/MiniNav";

function ViewClass() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div class="p-4  sm:ml-64">
        <div class="p-4 mt-12  rounded-lg dark:border-gray-700">
          <MiniNav />
          <Routes>
            <Route path="/notes" element={<ViewFile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default ViewClass;
