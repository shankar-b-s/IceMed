import docsign from '../Images/docsign.png';
import Logopos from './Logopos';
import blob from '../Images/blob.png';
const Signindoctor = () => {
  return ( 
    <div className="Signindoctor  w-full h-screen " 
    style={{backgroundImage: `url(${blob})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }}>
        <Logopos/>
        <div class="another flex justify-center items-center">
          <div class="docdetails flex justify-between rounded-3xl bg-greeno bg-opacity-70 size-[80%] mt-5">
            <div class="details p-14 pl-16">
              <form action="">
                <h3 class="text-black text-6xl ">Login</h3>
                <div className='py-16'>
                  <div>
                    <input type="text" placeholder="Employee ID" class="bg-inherit text- text-black text-xl focus:outline-0 placeholder-gray-700" />
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-[80%]"/>
                  </div>
                  <br />
                  <div>
                    <input type="password" placeholder="Password" class="bg-inherit focus:outline-0 text-black text-xl placeholder-gray-700" />
                    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-[80%]"/>
                  </div>
                </div>
                <div className='flex -mt-10'>
                  <p className="text-sm text-gray-600 mr-12">Forgot password? <a href="/choose" className='underline'>Click Here</a></p>
                  <p className="text-sm text-gray-600">Don't have an account? <a href="/cadoc" className='underline'>Sign Up</a></p>
                </div>
                <div className="done ml-[40%] mt-[10%]"><button className='bg-[#d2eabd] p-3 px-8 text-[#3a6c1e] rounded-2xl text-lg'>Log In</button></div>
              </form>
            </div>
            <div class="sideimg"><img src={docsign} alt="img" className='rounded-r-xl h-[100%] '/></div>
          </div>
        </div>
      </div> 

   );
}
 
export default Signindoctor;