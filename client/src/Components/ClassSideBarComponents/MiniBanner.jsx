import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOwnedClassInfoFromSession } from "../../utils/classInfo";

function MiniBanner() {
  const { classroomName, classroomid } = useParams();
  const classDetails = getOwnedClassInfoFromSession(classroomid);
  return (
    <div className='container px-2 md:px-4 mx-auto border border-blue-300 rounded-lg mr-2 md:mr-6 shadow-lg p-2 md:p-4'>
      <div className='h-full rounded-md shadow-lg bg-white'>
        <div className='px-4 md:px-8 py-6 md:py-10'>
          <div className='w-full'>
            <h3 className='mb-2 text-xl md:text-2xl font-bold text-gray-800'>
              <span className='text-blue-600'>{classroomName}</span>
            </h3>
            {classDetails && (
              <p className='mb-4 text-sm md:text-md font-medium text-gray-600 leading-relaxed'>
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
