import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import CreateClass from "./Pages/CreateClass";
import JoinClass from "./Pages/JoinClass";
import ViewClass from "./Pages/ViewClass";
import "./index.css";
import { ThemeProvider } from "./utils/themecontext";
import JoinClassFromFill from "./Pages/JoinClassFromFill";
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home/*' element={<Home />} />
          <Route path='/create-class' element={<CreateClass />} />
          <Route path='/join-class' element={<JoinClassFromFill />} />
          <Route
            path='/join/:classroomName/:classroomid'
            element={<JoinClass />}
          />
          <Route
            path='/class/:classroomName/:classroomid/*'
            element={<ViewClass />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
