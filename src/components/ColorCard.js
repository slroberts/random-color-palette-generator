import React from 'react';

const ColorCard = ({ colors }) => {
  return (
    <div className='flex flex-wrap mt-16 justify-around'>
      {colors.length > 0 ? (
        colors.map((color) => (
          <div
            onClick={() => console.log('Copy')}
            key={Math.random()}
            className='mx-1 mb-12 shadow-lg rounded-xl w-3/5 md:w-52 h-56 md:h-72 bg-white'
          >
            <div
              className='m-2 w-50 h-40 md:h-56 rounded-md'
              style={{ backgroundColor: `rgb(${color})` }}
            ></div>
            <div className='text-center font-bold uppercase p-1 text-gray-500'>
              {`rgb (${color})`}
            </div>
          </div>
        ))
      ) : (
        <div>Fetching colors...</div>
      )}
    </div>
  );
};

export default ColorCard;
