import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
function Home() {
  return (
    <div>
      <div>Home</div>
      WELCOME
      <Navbar />
      <div>
        <Link to="/create-class">Create Class</Link>
      </div>
      <div>
        <Link to="/join-class">Join Class</Link>
      </div>
    </div>

    
  );
}

export default Home;
