import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
function Home() {
  return (
    <div>
      <div>Home</div>
      WELCOME
      <Navbar />
      <Sidebar />
      {/* <div>
        <Link to="/create-class">Create Class</Link>
      </div>
      <div>
        <Link to="/join-class">Join Class</Link>
      </div> */}
    </div>
  );
}

export default Home;
