// Buffer -> Unit8 -> Blob -> Url -> iframe
import { getAuthToken } from "../utils/userInfo";

const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;

const getUint8Array = (Buffer) => {
  return new Uint8Array(Buffer);
};

const getBlob = (unitAr, type) => {
  const blob = new Blob([unitAr], { type });
  return blob;
};

const getUrl = (blob) => {
  const url = URL.createObjectURL(blob);
  return url;
};

const handleFile = (fileDetails, fileid, classroomName, classroomid) => {
  switch (fileDetails.filetype) {
    case "txt": {
      const unit8Arr = getUint8Array(fileDetails.filecontent.data);
      const blob = getBlob(unit8Arr, "text/plain");
      // localStorage.setItem(
      //   `/${classroomName}/${classroomid}/${fileid}/`,
      //   JSON.stringify(blob)
      // );
      const url = getUrl(blob);
      console.log(url);
      return url;
    }
    case "pdf": {
      const unit8Arr = getUint8Array(fileDetails.filecontent.data);
      const blob = getBlob(unit8Arr, "application/pdf");
      const url = getUrl(blob);
      // localStorage.setItem(
      //   `/${classroomName}/${classroomid}/${fileid}/`,
      //   JSON.stringify(url)
      // );
      return url;
    }
    case "jpg": {
      const unit8Arr = getUint8Array(fileDetails.filecontent.data);
      const blob = getBlob(unit8Arr, "image/jpg");
      return getUrl(blob);
    }
    case "png": {
      const unit8Arr = getUint8Array(fileDetails.filecontent.data);
      const blob = getBlob(unit8Arr, "image/png");
      return getUrl(blob);
    }
    default: {
      return null;
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
    return handleFile(fileData.fileDetails, fileid, classroomName, classroomid);
  } catch (e) {
    console.log(e);
  }
};
