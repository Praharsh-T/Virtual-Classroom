import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import CreateClass from "./Pages/CreateClass";
import OwnedClasses from "./Pages/OwnedClasses";
import JoinClass from "./Pages/JoinClass";
import JoinedClasses from './Pages/JoinedClasses';
import "./index.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-class" element={<CreateClass />} />
        <Route path="/leader/my-classes" element={<OwnedClasses />} />
        <Route path="/user/joined-classes" element={<JoinedClasses />} />
        <Route path="/:classroomName/:classroomid" element={<JoinClass />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App