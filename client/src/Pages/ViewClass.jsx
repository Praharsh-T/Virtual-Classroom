import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MiniNav from "../Components/ClassSideBarComponents/MiniNav";
import ClassFiles from "../Components/class/ClassFiles";
import ViewFile from "../Components/class/ViewFile";

function ViewClass() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div class="sm:ml-64">
        <div className="mt-14">
          <MiniNav />
        </div>
        <div class="p-4 rounded-lg dark:border-gray-700">
          <Routes>
            <Route path="/notes" element={<ClassFiles />} />
            {/* <Route path="/notes/view/:fileid" element={<ViewFile />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default ViewClass;
