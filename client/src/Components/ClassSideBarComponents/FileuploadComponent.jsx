import React, { useState } from "react";

function FileuploadComponent({ classroomName, classroomid }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className='flex justify-center'>
      <h5>CHAT SECTION</h5>
    </div>
  );
}

export default FileuploadComponent;
