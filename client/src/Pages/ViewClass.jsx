import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MiniNav from "../Components/ClassSideBarComponents/MiniNav";
import ClassFiles from "../Components/class/ClassFiles";
import FileuploadComponent from "../Components/ClassSideBarComponents/FileuploadComponent";
import People from "../Components/class/People";
import CopyClipBoard from "../Components/CopyClipBoard";
import MiniBanner from "../Components/ClassSideBarComponents/MiniBanner";
import InfoTab from "../Components/ClassSideBarComponents/InfoTab";

const CURRENT_SITE = process.env.REACT_APP_CURRENT_SITE;

function ViewClass() {
  const { classroomName, classroomid } = useParams();
  const [closeSidebar, setCloseSidbar] = useState(true);
  function toggleSidebar() {
    setCloseSidbar(!closeSidebar);
  }
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar sidebarState={closeSidebar} />
      <div class='sm:ml-64'>
        <div className='mt-14 '>
          <MiniNav classroomName={classroomName} />
          <div className='flex gap-9 ml-6 mt-10'>
            <CopyClipBoard
              url={`${CURRENT_SITE}/join/${classroomName}/${classroomid}/`}
            />
            <MiniBanner />
          </div>
          <InfoTab />
        </div>
        <div class='p-4 rounded-lg dark:border-gray-700'>
          <Routes>
            <Route
              path='/notes'
              element={
                <ClassFiles
                  classroomName={classroomName}
                  classroomid={classroomid}
                />
              }
            />
            <Route
              path='/chat'
              element={
                <FileuploadComponent
                  classroomName={classroomName}
                  classroomid={classroomid}
                />
              }
            />
            <Route
              path='/people'
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
