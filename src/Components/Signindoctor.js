import docsign from '../Images/docsign.png';
import Logopos from './Logopos';
import blob from '../Images/blob.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signindoctor = () => {
  const [employeeID, setEmployeeID] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null); // To track login status

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/doctorlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ employeeID, password })
      });

      const data = await response.json();
      if(response.status === 200){
        setLoginStatus('success');
        // Redirect or perform any action upon successful login
        window.location.href = '/';
      }
      else{
        setLoginStatus('failure');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginStatus('failure');
    }
  };

  const navigate = useNavigate();
  const usenav = ()=>{
    let path = `/choosedoctor`;
    navigate(path);
  }

  return ( 
    <div className="Signindoctor  w-full h-screen " 
    style={{backgroundImage: `url(${blob})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }}>
        <Logopos/>
        <div className="another flex justify-center items-center">
          <div className="docdetails flex justify-between rounded-3xl bg-greeno bg-opacity-70 size-[80%] mt-5">
            <div className="details p-14 pl-16">
              <form action="">
                <h3 className="text-black text-6xl ">Login</h3>
                <div className='py-16'>
                  <div>
                    <input type="text" placeholder="Employee ID" className="bg-inherit text- text-black text-xl focus:outline-0 placeholder-gray-700" />
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-[80%]"/>
                  </div>
                  <br />
                  <div>
                    <input type="password" placeholder="Password" className="bg-inherit focus:outline-0 text-black text-xl placeholder-gray-700" />
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-[80%]"/>
                  </div>
                </div>
                <div className='flex -mt-10'>
                  <p className="text-sm text-gray-600 mr-12">Forgot password? <a href="/choose" className='underline'>Click Here</a></p>
                  <p className="text-sm text-gray-600">Don't have an account? <a href="/cadoc" className='underline'>Sign Up</a></p>
                </div>
                <div className="done ml-[40%] mt-[10%]"><button className='bg-[#d2eabd] p-3 px-8 text-[#3a6c1e] rounded-2xl text-lg' onClick={usenav}>Log In</button></div>
              </form>
            </div>
            <div className="sideimg"><img src={docsign} alt="img" className='rounded-r-xl h-[100%] '/></div>
          </div>
        </div>
      </div>
  );
}

export default Signindoctor;
