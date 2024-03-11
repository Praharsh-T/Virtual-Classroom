import React, { useEffect, useState } from "react";
import FileIcon from "./FileIcon";
import { getFilesOfClass } from "../../fetch/getFile";
import SmallLoader from "../loaders/SmallLoader";
import UploadFile from "./UploadFile";

function ClassFiles({ classroomName, classroomid }) {
  const [files, setFiles] = useState(null);

  useEffect(() => {
    getFilesOfClass(classroomName, classroomid).then((files) => {
      setFiles(files);
    });
  }, [classroomName, classroomid]);
  return files === null ? (
    <SmallLoader />
  ) : (
    <div>
      <UploadFile classroomName={classroomName} classroomid={classroomid} />
      <div className='flex flex-wrap gap-4'>
        {files.map((file, i) => {
          return <FileIcon file={file} key={i} />;
        })}
      </div>
    </div>
  );
}

export default ClassFiles;
