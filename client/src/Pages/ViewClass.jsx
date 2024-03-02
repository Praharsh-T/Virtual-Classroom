import React from "react";
import { ClassSidebar } from "../Components/ClassSidebar";
import { Route, Routes } from "react-router-dom";
import Files from "../Components/class/Files";

function ViewClass() {
  return (
    <div>
      <ClassSidebar />
      <Routes>
        <Route path="/Notes" element={<Files />} />
      </Routes>
    </div>
  );
}

export default ViewClass;
