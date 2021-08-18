import React, { useState, useEffect } from 'react';
import Clipboard from 'react-clipboard.js';
import CopiedMessage from './CopiedMessage';

const ColorCard = ({ colors }) => {
  const [isCopied, setIsCopied] = useState({
    value: '',
    copied: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied({ copied: false });
    }, 3500);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleOnClick = (color) => {
    setIsCopied({ value: `rgb(${color})`, copied: true });
  };

  const renderColorCard = () => {
    return colors.map((color) => {
      return (
        <div
          key={Math.random()}
          className='mx-4 mb-8 shadow-lg rounded-xl w-3/5 md:w-52 h-56 md:h-72 bg-white cursor-pointer'
        >
          <Clipboard
            data-clipboard-text={`rgb(${color})`}
            component='a'
            onClick={() => handleOnClick(color)}
          >
            <div
              className='m-2 w-50 h-40 md:h-56 rounded-md'
              style={{ backgroundColor: `rgb(${color})` }}
            ></div>
          </Clipboard>

          <div
            id='color-text'
            className='text-center font-bold uppercase p-1 text-gray-500'
          >
            {`rgb (${color})`}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {isCopied.copied ? <CopiedMessage isCopied={isCopied} /> : null}

      {colors.length > 0 ? (
        <div className='flex flex-wrap mt-12 justify-center'>
          {renderColorCard()}
        </div>
      ) : (
        <div className='text-center mt-8'>Fetching colors...</div>
      )}
    </>
  );
};

export default ColorCard;
