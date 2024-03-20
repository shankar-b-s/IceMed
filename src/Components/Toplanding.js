import Typewriter from 'typewriter-effect';
import landimg1 from '../Images/landimg1.png';
import landimg2 from '../Images/landimg2.png';
import { useNavigate } from "react-router-dom";

const Toplanding = () => {
  const navigate = useNavigate();
  const usenav = ()=>{
    let path = `choose`;
    navigate(path);
  }
  return ( 
  <div className="toplanding">
    <div className="main flex">
        <div className="left text-[#3a6c1e] text-4xl pl-28 pt-24 ">
          <div className="whitespace-rewrap">
            <Typewriter 
            options={{
              strings: ['AI-backed Diagnosis','Summarize Research Papers','Schedule Appointments','Understand your medical reports'],
              autoStart: true,
              loop: true,
              deleteSpeed:60,
              delay:50
            }}/>
          </div>
          <div className="pt-16 font-semibold text-4xl">Manage Healthcare workflow efficiently <br />using our AI-backed system</div>
          <div className="but pt-20 text-3xl "><button className="bg-[#99bc85] p-4 px-5 rounded-xl" onClick={usenav}>Get Started</button></div>
        </div>
        
        <div className="right px-3 animate-float ">
          <div><img src={landimg1} alt="img" className="ml-[90%] mt-[30%] z-40 size-[90%]"/></div>
          <div><img src={landimg2} alt="img" className="-mt-[25%] ml-[20%] size-[85%]"/></div>
        </div>
      </div>
  </div>
   );
}
 
export default Toplanding;