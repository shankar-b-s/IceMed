import React, { useState } from 'react';
import patsign from '../Images/patsign.png';
import Logopos from './Logopos';
import blob from '../Images/blob.png';

const Signinpatient = () => {
  const [patientID, setPatientID] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null); // To track login status

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ patientID, password })
      });

      if (response.ok) {
        setLoginStatus('success');
        // Redirect or perform any action upon successful login
        window.location.href = '/';
      } else {
        setLoginStatus('failure');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginStatus('failure');
    }
  };

  return (
    <div className="Signinpatient w-full h-screen" style={{backgroundImage: `url(${blob})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Logopos />
      <div className="flex justify-center items-center">
        <div className="docdetails flex justify-between rounded-3xl bg-greeno bg-opacity-70 size-[80%] mt-5">
          <div className="details p-14 pl-16">
            <form onSubmit={handleLogin}>
              <h3 className="text-black text-6xl">Login</h3>
              <div className='py-16'>
                <div>
                  <input type="text" placeholder="Patient ID" className="bg-inherit text-black text-xl focus:outline-0 placeholder-gray-700" value={patientID} onChange={(e) => setPatientID(e.target.value)} />
                  <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-[80%]" />
                </div>
                <br />
                <div>
                  <input type="password" placeholder="Password" className="bg-inherit focus:outline-0 text-black text-xl placeholder-gray-700" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-[80%]" />
                </div>
              </div>
              <div className='flex -mt-10'>
                <p className="text-sm text-gray-600 mr-12">Forgot password? <a href="/forgot-password" className='underline'>Click Here</a></p>
                <p className="text-sm text-gray-600">Don't have an account? <a href="/signup" className='underline'>Sign Up</a></p>
              </div>
              <div className="done ml-[40%] mt-[10%]"><button type="submit" className='bg-[#d2eabd] p-3 px-8 text-[#3a6c1e] rounded-2xl text-lg'>Log In</button></div>
            </form>
          </div>
          <div className="sideimg"><img src={patsign} alt="img" className='rounded-r-xl h-[100%]' /></div>
        </div>
      </div>
    </div>
  );
}

export default Signinpatient;
