import React from 'react';

const CopiedMessage = ({ isCopied }) => {
  return (
    <div
      className='md:w-4/12 w-full flex justify-center px-8 py-3 text-base text-center rounded-full text-white bg-black md:py-4 md:text-sm m-auto mb-40 transition duration-1000 ease-in-out'
      style={{ position: 'relative', marginTop: '-148px' }}
    >{`Color ${isCopied.value} copied to your clipboard`}</div>
  );
};

export default CopiedMessage;
