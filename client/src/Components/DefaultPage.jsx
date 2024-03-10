import React from "react";

function DefaultPage() {
  return (
    <div className=' mt-5 ml-11 flex flex-row '>
      <div className='bg-gray-800 text-white p-8 flex-grow'>
        {/* Content for large block */}
        <h1>Large Block</h1>
        <p>This is a large block that occupies most of the screen space.</p>
      </div>
      <div className='flex flex-row'>
        <div className='w-1/2 bg-gray-200 p-8 border border-gray-400'>
          {/* Content for medium block 1 */}
          <h2>Medium Block 1</h2>
          <p>This is a medium block with half the width of the screen.</p>
        </div>
        <div className='w-1/2 bg-gray-400 p-8 border border-gray-400'>
          {/* Content for medium block 2 */}
          <h2>Medium Block 2</h2>
          <p>This is another medium block with half the width of the screen.</p>
        </div>
      </div>
      <div className='w-1/4 bg-gray-600 text-white p-4 border border-gray-400 fixed bottom-0 right-0'>
        {/* Content for small block */}
        <h3>Small Block</h3>
        <p>This is a small block positioned at the bottom right corner.</p>
      </div>
    </div>
  );
}

export default DefaultPage;
