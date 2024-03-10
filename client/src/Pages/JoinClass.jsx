import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthToken } from "../utils/userInfo";
import SmallLoader from "../Components/loaders/SmallLoader";
const REACT_APP_FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
function JoinClass() {
  const params = useParams();
  const [validUrl, setValidUrl] = useState(null);
  const navigate = useNavigate();

  async function handleJoinClass() {
    try {
      const token = getAuthToken();
      const response = await fetch(
        REACT_APP_FETCH_BASE_URL + "/classroom/join-class",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            classroomId: params.classroomid,
          }),
        }
      );
      const res = await response.json();
      if (res.tokenError) {
        navigate("/login");
      }
      if (res.success) {
        if (res.warn) {
          alert(res.warn);
        }
        navigate(`/class/${params.classroomName}/${params.classroomid}/`);
      } else {
        alert("SERVER ERROR COULD NOT JOIN CLASS!");
      }
    } catch (e) {
      console.log("ERROR");
    }
  }

  useEffect(() => {
    const token = getAuthToken();
    fetch(REACT_APP_FETCH_BASE_URL + "/classroom/check-valid-class", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(params),
    })
      .then(async (response) => {
        const res = await response.json();
        if (res.tokenError) {
          navigate("/login");
        }
        if (res.valid) {
          setValidUrl(true);
        } else {
          setValidUrl(false);
        }
      })
      .catch((e) => {
        setValidUrl(false);
        console.log(e);
      });
  }, []);
  return (
    <div>
      {validUrl ? (
        <div>
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleJoinClass}
          >
            Join Class
          </button>
        </div>
      ) : (
        <div>
          {validUrl === null ? (
            <div>
              "Please Verifying URL..." <SmallLoader />
            </div>
          ) : (
            "Invalid URL!"
          )}
        </div>
      )}
    </div>
  );
}

export default JoinClass;
