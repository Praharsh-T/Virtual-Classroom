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
    </div>
    
  );
}
            
export default Home;
