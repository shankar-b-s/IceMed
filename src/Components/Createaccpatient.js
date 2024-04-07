import patsign from '../Images/patsign.png';
import Logopos from './Logopos';
import blob from '../Images/blob.png';

const Createaccpatient = () => {
  return ( 
    <div className="Createaccpatient  w-full h-screen " 
    style={{backgroundImage: `url(${blob})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }}>
        <div className='size-[15%]'><Logopos/></div>
        <div class="another flex justify-center items-center">
          <div class="docdetails flex justify-between rounded-3xl mb-10 bg-greeno bg-opacity-70 size-[80%]">
            <div class="details p-6 pt-16 pb-8 pl-16">
              <form action="">
                <h3 class="text-black text-5xl pb-2">Sign Up</h3>
                <div className='py-8'>
                  <div className='flex'>
                    <div>
                      <input type="text" placeholder="First Name" class="bg-inherit text- text-black text-lg focus:outline-0 placeholder-gray-700" />
                      <hr className="h-px my-3.5 bg-gray-200 border-0 dark:bg-gray-700 w-[90%]"/>
                    </div>
                    <div>
                      <input type="text" placeholder="Last Name" class="bg-inherit text- text-black text-lg focus:outline-0 placeholder-gray-700" />
                      <hr className="h-px my-3.5 bg-gray-200 border-0 dark:bg-gray-700 w-[100%]"/>
                    </div>
                  </div>
                  <br />
                  <div>
                      <input type="email" placeholder="Email" class="bg-inherit text- text-black text-lg focus:outline-0 placeholder-gray-700" />
                      <hr className="h-px my-3.5 bg-gray-200 border-0 dark:bg-gray-700 w-[100%]"/>
                  </div>
                  <br />
                  <div>
                      <input type="tel" placeholder="Contact Number" class="bg-inherit text- text-black text-lg focus:outline-0 placeholder-gray-700" />
                      <hr className="h-px my-3.5 bg-gray-200 border-0 dark:bg-gray-700 w-[100%]"/>
                  </div>
                  <br />
                  <div>
                    <input type="password" placeholder="Password" class="bg-inherit focus:outline-0 text-black text-lg placeholder-gray-700" />
                    <hr className="h-px my-3.5 bg-gray-200 border-0 dark:bg-gray-700 w-[100%]"/>
                  </div>
                </div>
                <div className='flex -mt-9'>
                  <p className="text-sm text-gray-600 mr-12">Forgot password? <a href="/choose" className='underline'>Click Here</a></p>
                  <p className="text-sm text-gray-600">Don't have an account? <a href="/signinpatient" className='underline'>Sign Up</a></p>
                </div>
                <div className="done ml-[40%] mt-[10%]"><button className='bg-[#d2eabd] p-2 px-8 text-[#3a6c1e] rounded-2xl text-lg'>Sign Up</button></div>
              </form>
            </div>
            <div class="sideimg"><img src={patsign} alt="img" className='rounded-r-xl w-fit size-[100%]'/></div>
          </div>
        </div>
      </div> 
   );
}
 
export default Createaccpatient;