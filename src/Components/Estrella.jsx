import React from 'react';
import { FaStar } from 'react-icons/fa';

const Estrella = ({ size = 200, color = 'orange' }) => {
  return (
    <FaStar
      style={{
        width: `${size}px`,
        height: `${size}px`,
        color: color,
      }}
    />
  );
};

export default Estrella;
