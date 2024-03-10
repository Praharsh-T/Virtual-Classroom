import React from "react";
import { useParams } from "react-router-dom";

function MiniBanner() {
  const { classroomName, classroomid } = useParams();
  return (
    <section className='py-8 relative bg-gray-200'>
      <div className='container px-4 mx-auto'>
        <div className='h-full w-full rounded-md shadow-lg bg-white'>
          <div className='px-8 py-10 flex flex-wrap justify-between items-center'>
            <div className='w-full md:w-2/3  items-center justify-center'>
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
    </section>
  );
}

export default MiniBanner;
