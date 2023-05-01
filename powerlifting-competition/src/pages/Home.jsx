import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">LAUPC</h1>
      <p className="text-lg mb-4">Choose one of the buttons to redirect you to a lift:</p>
      <div className="flex space-x-4">
        <Link to="/squat" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Squat
        </Link>
        <Link to="/bench" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Bench Press
        </Link>
        <Link to="/deadlift" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Deadlift
        </Link>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="relative rounded-full overflow-hidden w-32 h-32">
          <img src="af.jpeg" alt="AF logo" className="object-cover w-full h-full" />
        </div>
        <div className="ml-8 mr-8 font-bold text-xl">Sponsored by</div>
        <div className="relative rounded-full overflow-hidden w-32 h-32">
          <img src="muv.jpeg" alt="MUV logo" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
