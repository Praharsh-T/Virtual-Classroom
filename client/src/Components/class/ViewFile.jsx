import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFileFromDb } from "../../fetch/file";

function ViewFile({ classroomName, classroomid, fileid }) {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(true);
  async function getFile() {
    const url = await fetchFileFromDb(fileid, classroomName, classroomid);
    setLoading(false);
    setUrl(url);
  }
  useEffect(() => {
    getFile();
  }, []);
  return loading ? (
    <div class="fixed top-0 left-0 w-full h-full bg-grey-600 bg-opacity-50 flex justify-center items-center z-50">
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  ) : (
    <div className="w-full h-full pt-4">
      <iframe src={url} frameborder="0" class="w-full h-full"></iframe>
    </div>
  );
}

export default ViewFile;
