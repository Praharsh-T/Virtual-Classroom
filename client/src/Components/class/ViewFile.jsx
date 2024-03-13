import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFileFromDb } from "../../fetch/file";

function ViewFile({ classroomName, classroomid, fileid, filename, filetype }) {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(true);
  async function getFile() {
    const url = await fetchFileFromDb(fileid, classroomName, classroomid);
    setLoading(false);
    if (url) {
      setUrl(url);
    }
  }
  useEffect(() => {
    getFile();
  }, []);
  return loading ? (
    <div class='fixed top-0 left-0 w-full h-full bg-grey-600 bg-opacity-50 flex justify-center items-center z-50'>
      <div
        class='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'>
        <span class='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
    </div>
  ) : (
    <div className='w-full h-full pt-4'>
      <a
        class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
        href={url}
        download={filename}
        target='_blank'>
        <svg
          class='fill-current w-4 h-4 mr-2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'>
          <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
        </svg>
        <span>Download</span>
      </a>
      <iframe src={url} frameborder='0' class='w-full h-full'></iframe>
    </div>
  );
}

export default ViewFile;
