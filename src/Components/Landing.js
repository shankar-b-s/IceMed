import Logopos from "./Logopos";
import Navbar from "./Navbar";
import blob from '../Images/blob.png';
import landing from '../Images/landinbg.png';
import Typewriter from 'typewriter-effect';
import landimg1 from '../Images/landimg1.png';
import landimg2 from '../Images/landimg2.png';

const Landing = () => {
  return ( 
    <div className="Landing  w-full h-screen " 
    style={{backgroundImage: `url(${landing})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }}>
      <Navbar/> 
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
          <div className="but pt-20 text-3xl "><button className="bg-[#99bc85] p-4 px-5 rounded-xl">Get Started</button></div>
        </div>
        
        <div className="right px-3">
          <div><img src={landimg1} alt="img" className="ml-[90%] mt-[30%] z-40 size-[90%]"/></div>
          <div><img src={landimg2} alt="img" className="-mt-[25%] ml-[20%] size-[85%]"/></div>
        </div>
      </div>
    </div>
  );
}
 
export default Landing;