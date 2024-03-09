import React, { useEffect, useState } from "react";
import FileIcon from "./FileIcon";
import { getFilesOfClass } from "../../fetch/getFile";
import SmallLoader from "../loaders/SmallLoader";

function ClassFiles({ classroomName, classroomid }) {
  const [files, setFiles] = useState(null);

  useEffect(() => {
    getFilesOfClass(classroomName, classroomid).then((response) => {
      setFiles(response.files);
    });
  }, [classroomName, classroomid]);
  return files === null ? (
    <SmallLoader />
  ) : (
    <>
      {files.map((file, i) => {
        return <FileIcon file={file} key={i} />;
      })}
    </>
  );
}

export default ClassFiles;
