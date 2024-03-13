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
    <div className='text-center '>
      <h2 className='text-2xl text-blue-700 font-bold mt-6 mb-4'>People</h2>
      <div className='grid grid-cols-1  gap-4'>
        {people.map((user, i) => {
          return (
            <div
              key={i}
              className='bg-white border  border-blue-200 rounded-lg shadow-md p-6'>
              <Student user={user} />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <SmallLoader />
  );
}

export default People;
