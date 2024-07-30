import React from 'react';

const Hexagon = ({ number, label }) => {
  return (
    <div className="hexagon-container flex flex-col items-center justify-center p-4 m-2">
      <div className="hexagon">
        <div className="hexagon-inner flex flex-col items-center justify-center">
          <div className="hex-num text-4xl font-bold">{number}</div>
          <div className="hex-lab text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default Hexagon;
