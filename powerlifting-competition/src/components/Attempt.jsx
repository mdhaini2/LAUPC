import React from 'react';
import 'tailwindcss/tailwind.css';

const Attempt = ({ lifterName, weightLifted }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{lifterName}</div>
          <div className="mt-2 text-gray-500">{weightLifted} kg</div>
        </div>
      </div>
    </div>
  );
};

export default Attempt;