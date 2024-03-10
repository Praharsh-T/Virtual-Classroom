import React from "react";
import { useParams } from "react-router-dom";

function MiniBanner() {
  const { classroomName, classroomid } = useParams();
  return (
    <div className='container px-4 mx-auto mt-10 border border-blue-300 rounded-lg mr-6 shadow-lg p-4'>
      <div className='h-full rounded-md shadow-lg bg-white'>
        <div className='px-8 py-10'>
          <div className='w-full'>
            <h3 className='mb-2 text-2xl font-bold text-gray-800'>
              <span className='text-blue-600'>{classroomName}</span>
            </h3>
            <p className='mb-4 text-sm font-medium text-gray-600 leading-relaxed'>
              Class Description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniBanner;
