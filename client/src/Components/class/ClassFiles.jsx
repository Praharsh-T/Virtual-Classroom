import React, { useEffect, useState } from "react";
import FileIcon from "./FileIcon";
import { getFilesOfClass } from "../../fetch/getFile";
import { useParams } from "react-router-dom";

function ClassFiles() {
  const [files, setFiles] = useState(null);
  const { classroomName, classroomid } = useParams();
  useEffect(() => {
    getFilesOfClass(classroomName, classroomid).then((response) => {
      setFiles(response.files);
    });
  }, [classroomName, classroomid]);
  return files === null ? (
    <div>Loading</div>
  ) : (
    <>
      {files.map((file, i) => {
        return <FileIcon file={file} key={i} />;
      })}
    </>
  );
}

export default ClassFiles;
