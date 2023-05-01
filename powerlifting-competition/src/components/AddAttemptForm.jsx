import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const AddAttemptForm = () => {
    const [lifterName, setLifterName] = useState('');
    const [liftType, setLiftType] = useState('Squat');
    const [weightAttempted, setWeightAttempted] = useState('');
    const [attemptNumber, setAttemptNumber] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ lifterName, liftType, weightAttempted, attemptNumber });
        var formdata = new FormData();
        formdata.append("name", lifterName);
        formdata.append("attempt", attemptNumber);
        formdata.append("lift", liftType);
        formdata.append("weight", weightAttempted);
        
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://3.92.186.57/LAUPC/insert_attempt.php", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
            <form className="p-8" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="lifterName" className="block text-gray-700 font-bold mb-2">
                        Lifter Name:
                    </label>
                    <select
                        id="lifterName"
                        name="lifterName"
                        value={lifterName}
                        onChange={(e) => setLifterName(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select a lifter</option>
                        <option value="Omar Osta">Omar Osta</option>
                        <option value="Abed Alayli">Abed Alayli</option>
                        <option value="Jawad Wehbe">Jawad Wehbe</option>
                        <option value="Rami Hammoud">Rami Hammoud</option>
                        <option value="Georges Eid">Georges Eid</option>
                        <option value="Omar Malaeb">Omar Malaeb</option>
                        <option value="Rayan Obeid">Rayan Obeid</option>
                        <option value="Melko Ibrahim">Melko Ibrahim</option>
                        <option value="Ali Samir Farhat">Ali Samir Farhat</option>
                        <option value="Daher Hammoura">Daher Hammoura</option>
                        <option value="Mohamad Amine Hachicho">Mohamad Amine Hachicho</option>
                        <option value="Malek Kanaan">Malek Kanaan</option>
                        <option value="Hadi Hassoun">Hadi Hassoun</option>
                        <option value="Mohammad Tayfour">Mohammad Tayfour</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="liftType" className="block text-gray-700 font-bold mb-2">
                        Lift Type:
                    </label>
                    <select
                        id="liftType"
                        name="liftType"
                        value={liftType}
                        onChange={(e) => setLiftType(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="Squat">Squat</option>
                        <option value="Bench Press">Bench Press</option>
                        <option value="Deadlift">Deadlift</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="weightAttempted" className="block text-gray-700 font-bold mb-2">
                        Weight Attempted:
                    </label>
                    <input
                        type="number"
                        id="weightAttempted"
                        name="weightAttempted"
                        value={weightAttempted}
                        onChange={(e) => setWeightAttempted(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="attemptNumber" className="block text-gray-700 font-bold mb-2">
                        Attempt      </label>
                    <select
                        id="attemptNumber"
                        name="attemptNumber"
                        value={attemptNumber}
                        onChange={(e) => setAttemptNumber(parseInt(e.target.value))}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value={1}>Attempt 1</option>
                        <option value={2}>Attempt 2</option>
                        <option value={3}>Attempt 3</option>
                    </select>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Attempt
                    </button>
                    <Link to="/"><button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mx-16 rounded'>Home</button></Link>
                </div>
                
            </form>
          
        </div>

    );
};

export default AddAttemptForm;
