import React, { useEffect, useState } from "react";
import FileIcon from "./FileIcon";

function ClassFiles() {
  const [files, setFiles] = useState(null);
  useEffect(() => {
    getFilesOfClass().then((files) => {
      setFiles(files);
    });
  }, []);
  return files === null ? (
    <div>Loading</div>
  ) : (
    <>
      {files.map((file) => {
        return <FileIcon file={file} />;
      })}
    </>
  );
}

export default ClassFiles;
