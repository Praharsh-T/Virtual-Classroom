import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

function Home() {
  function openSideBar() {
    console.log("open");
  }
  return (
    <div>
      <Navbar openSideBar={openSideBar} />
      <Sidebar />
    </div>
  );
}
            
export default Home;
