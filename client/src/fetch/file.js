import { getAuthToken } from "../utils/userInfo";

const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;

const getBlob = (unitAr) => {
  const blob = new Blob([unitAr], { type: "application/pdf" });
  return blob;
};

const getUrl = (blob) => {
  const url = URL.createObjectURL(blob);
  return url;
};
const handleFile = (fileDetails) => {
  switch (fileDetails.filetype) {
    case "txt": {
      const unit8Arr = new Uint8Array(fileDetails.filecontent.data);
      const a = document.createElement("a");
      return getUrl(getBlob(unit8Arr));
    }
    case "pdf": {
      const unit8Arr = new Uint8Array(fileDetails.filecontent.data);
      const a = document.createElement("a");
      return getUrl(getBlob(unit8Arr));
    }
    case "jpg": {
      const a = document.createElement("a");
      return "/";
    }
    case "png": {
      const a = document.createElement("a");
      return "/";
    }
    default: {
      const a = document.createElement("a");
      return "/";
    }
  }
};
export const fetchFileFromDb = async (fileid, classroomName, classroomid) => {
  const token = getAuthToken();
  try {
    const file = await fetch(`${FETCH_BASE_URL}/classroom/file/getFile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        fileid: fileid,
        classroomName,
        classroomid,
      }),
    });
    const fileData = await file.json();
    console.log(fileData.fileDetails);
    return handleFile(fileData.fileDetails);
  } catch (e) {
    console.log(e);
  }
};
