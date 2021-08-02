import React from 'react';

const ColorCard = () => {
  return (
    <div className='mx-1 mb-12 shadow-lg rounded-xl w-3/5 md:w-52 h-56 md:h-72 bg-white'>
      <div className='bg-blue-800 m-2 w-50 h-40 md:h-56 rounded-md'></div>
      <div className='text-center font-bold uppercase p-1 text-gray-500'>
        # Color Code
      </div>
    </div>
  );
};

export default ColorCard;
