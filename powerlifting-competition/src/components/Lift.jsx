import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Attempt from './Attempt';
import { Link } from 'react-router-dom';




const Lift = ({ liftName }) => {
    const [attempt1, setAttempt1] = useState([]);
    const [attempt2, setAttempt2] = useState([]);
    const [attempt3, setAttempt3] = useState([]);

    useEffect(() => {
        async function fetchAttempt1() {
            const response = await fetch(`http://3.92.186.57/LAUPC/get_all_attempts.php?attempt=1&lift=${liftName}`);
            const data = await response.json();
            console.log(data);
            setAttempt1(data.data);
        }
        async function fetchAttempt2() {
            const response = await fetch(`http://3.92.186.57/LAUPC/get_all_attempts.php?attempt=2&lift=${liftName}`);
            const data = await response.json();
            console.log(data);
            setAttempt2(data.data);
        }
        async function fetchAttempt3() {
            const response = await fetch(`http://3.92.186.57/LAUPC/get_all_attempts.php?attempt=3&lift=${liftName}`);
            const data = await response.json();
            console.log(data);
            setAttempt3(data.data);
        }
        fetchAttempt1();
        fetchAttempt2();
        fetchAttempt3();
    }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">{liftName}</h1>
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Attempt 1</h2>
          <ul className="">
            {attempt1.sort((a,b) => a.weight - b.weight).map((attempt) => (
                <li><Attempt lifterName={attempt.name} weightLifted={attempt.weight} /></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Attempt 2</h2>
          <ul className="">
            {attempt2.sort((a,b) => a.weight - b.weight).map((attempt) => (
                <li><Attempt lifterName={attempt.name} weightLifted={attempt.weight} /></li>
            ))}

          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Attempt 3</h2>
          <ul className="">
            {attempt3.sort((a,b) => a.weight - b.weight).map((attempt) => (
                <li><Attempt lifterName={attempt.name} weightLifted={attempt.weight} /></li>
            ))}

          </ul>
        </div>
      </div>
      <Link to="/"><button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>Return</button></Link>
    </div>
  );
};

export default Lift;
