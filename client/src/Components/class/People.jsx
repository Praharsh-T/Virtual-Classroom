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
<<<<<<< HEAD
    <div>
      <h2 className="text-2xl font-bold mt-6 mb-4">People</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
=======
    <div className='text-center '>
      <h2 className='text-2xl  font-bold mt-6 mb-4'>People</h2>
      <div className='grid grid-cols-1  gap-4'>
>>>>>>> f02e744dff94d62f36c8191523f077befb733954
        {people.map((user, i) => {
          return (
            <div
              key={i}
<<<<<<< HEAD
              className="bg-white border border-blue-200 rounded-lg shadow-md p-4"
            >
=======
              className='bg-white border  border-blue-200 rounded-lg shadow-md p-6'>
>>>>>>> f02e744dff94d62f36c8191523f077befb733954
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
