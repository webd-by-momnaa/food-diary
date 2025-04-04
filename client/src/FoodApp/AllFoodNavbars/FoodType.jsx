import React from 'react';
import { ReactTyped } from 'react-typed';

const FoodType = () => {
  return (
    <div className='text-center text-lime-700 text-xl'>
      {/* <h1>Welcome to My App</h1> */}
      <ReactTyped
        strings={['Welcome to Food Diary!🍽']}
        typeSpeed={60}
        backSpeed={40}
        loop ={false}
        style={{fontFamily: "monospace"}}
      />
      
    </div>
  );
};

export default FoodType
