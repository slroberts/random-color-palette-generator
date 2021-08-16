import React from 'react';
const Button = ({ generatePalette }) => {
  return (
    <div>
      <button
        onClick={generatePalette}
        className='sm:w-2/5 w-full flex justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-400 hover:bg-indigo-700 md:py-4 md:text-lg m-auto mt-8 transition duration-300 ease-in-out'
      >
        Generate palette
      </button>
    </div>
  );
};

export default Button;
