import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MiniNav from "../Components/ClassSideBarComponents/MiniNav";
import ClassFiles from "../Components/class/ClassFiles";
import ViewFile from "../Components/class/ViewFile";
import FileuploadComponent from "../Components/ClassSideBarComponents/FileuploadComponent";
import People from "../Components/class/People";

function ViewClass() {
  const { classroomName, classroomid } = useParams();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div class="sm:ml-64">
        <div className="mt-14 ">
          <MiniNav />
        </div>
        <div class="p-4 rounded-lg dark:border-gray-700">
          <Routes>
            <Route
              path="/notes"
              element={
                <ClassFiles
                  classroomName={classroomName}
                  classroomid={classroomid}
                />
              }
            />
            <Route
              path="/chat"
              element={
                <FileuploadComponent
                  classroomName={classroomName}
                  classroomid={classroomid}
                />
              }
            />
            <Route
              path="/people"
              element={
                <People
                  classroomName={classroomName}
                  classroomid={classroomid}
                />
              }
            />
            {/* <Route path="/notes/view/:fileid" element={<ViewFile />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default ViewClass;
