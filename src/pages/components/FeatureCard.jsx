import React from 'react';

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white border-2 border-violet-500 m-2 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-700">{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
}

export default FeatureCard;