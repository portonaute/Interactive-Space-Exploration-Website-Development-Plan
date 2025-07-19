import React from 'react';

const PlanetOrbit = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-blue-500 absolute"></div>
      <div className="w-48 h-48 rounded-full border border-gray-600 absolute"></div>
      <div className="w-4 h-4 bg-white rounded-full absolute" 
           style={{
             top: '50%',
             left: 'calc(50% + 60px)',
             transform: 'translate(-50%, -50%)',
             boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
           }}>
      </div>
    </div>
  );
};

export default PlanetOrbit;
