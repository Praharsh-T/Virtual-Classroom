import React, { useState } from "react";
import MiniBanner from "./MiniBanner";

function FileuploadComponent({ classroomName, classroomid }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      <MiniBanner />
    </div>
  );
}

export default FileuploadComponent;
