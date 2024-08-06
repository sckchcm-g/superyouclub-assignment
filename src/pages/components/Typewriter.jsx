import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

// TypewriterComponent: A functional component that renders a typewriter effect
const TypewriterComponent = ({ texts, typingSpeed = 25, delay = 2000 }) => {
  return (
    <div className="typewriter-container">
      {/* Typewriter component from 'react-simple-typewriter' */}
      <Typewriter
        words={texts}
        loop={0}
        cursor
        cursorStyle=""
        typeSpeed={typingSpeed}
        deleteSpeed={10} 
        delaySpeed={delay} 
      />
      {/* Inline styles for the typewriter container */}
      <style>
        {`
          .typewriter-container {
            display: inline-block;
            width: 100%;
            white-space: normal; 
            word-wrap: break-word; 
            height: 100px; 
            font-size: 20px; 
            font-weight: 500; 
          }
        `}
      </style>
    </div>
  );
};

export default TypewriterComponent;