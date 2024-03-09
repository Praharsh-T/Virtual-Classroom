import React, { useEffect, useState } from "react";
import SmallLoader from "../loaders/SmallLoader";
import { getFilesOfClass } from "../../fetch/getPeople";
import Student from "./Student";

function People({ classroomName, classroomid }) {
  const [people, setPeople] = useState(null);
  useEffect(() => {
    getFilesOfClass(classroomName, classroomid).then((response) => {
      console.log(response);
      setPeople(response.people);
    });
  }, []);
  return people ? (
    <div>
      {people.map((user, i) => {
        return <Student user={user} key={i} />;
      })}
    </div>
  ) : (
    <SmallLoader />
  );
}

export default People;
