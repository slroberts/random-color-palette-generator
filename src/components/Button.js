import React from 'react';

const Button = () => {
  return (
    <div>
      <div className='sm:w-2/5 w-full flex justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-400 hover:bg-indigo-700 md:py-4 md:text-lg m-auto mt-8'>
        Generate palette
      </div>
      <p className='text-center mt-6'>
        Or just press the "Spacebar" to generate new palettes.
      </p>
    </div>
  );
};

export default Button;
