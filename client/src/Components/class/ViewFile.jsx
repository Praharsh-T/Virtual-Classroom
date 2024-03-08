import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFileFromDb } from "../../fetch/file";

function ViewFile() {
  const { classroomName, classroomid } = useParams();
  const [url, setUrl] = useState();
  async function getFile() {
    const url = await fetchFileFromDb(7, classroomName, classroomid);
    setUrl(url);
  }
  useEffect(() => {
    getFile();
  }, []);
  return (
    <div>
      <iframe
        src={url}
        frameborder="0"
        class="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px]"
      ></iframe>
    </div>
  );
}

export default ViewFile;
