import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOwnedClassInfoFromSession } from "../../utils/classInfo";

function MiniBanner() {
  const { classroomName, classroomid } = useParams();
  const classDetails = getOwnedClassInfoFromSession(classroomid);
  console.log(classDetails);
  return (
    <div className='container px-4 mx-auto border border-blue-300 rounded-lg mr-6 shadow-lg p-4'>
      <div className='h-full rounded-md shadow-lg bg-white'>
        <div className='px-8 py-10'>
          <div className='w-full'>
            <h3 className='mb-2 text-2xl font-bold text-gray-800'>
              <span className='text-blue-600'>{classroomName}</span>
            </h3>
            {classDetails && (
              <p className='mb-4 text-md font-medium text-gray-600 leading-relaxed'>
                {classDetails.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniBanner;
