import React from 'react';
import Header from './Header';
import ColorCard from './ColorCard';
import Button from './Button';

const App = () => {
  return (
    <div className='md:container md:mx-auto p-4'>
      <Header />
      <div className='flex flex-wrap mt-16 justify-around'>
        <ColorCard />
        <ColorCard />
        <ColorCard />
        <ColorCard />
        <ColorCard />
      </div>
      <Button />
    </div>
  );
};

export default App;
