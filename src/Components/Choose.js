import Logopos from "./Logopos";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import blob from '../Images/blob.png';

const Choose = () => {
  return ( 
    <div className="choose  w-full h-screen " 
      style={{backgroundImage: `url(${blob})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      }}>
      <div className="docnpat flex flex-col">
        <Logopos/>
        <div className="division flex justify-center align-middle">
          <a href="/signindoctor">
            <div className="doctor flex flex-col justify-center align-middle bg-white bg-opacity-70 text-black p-48  rounded-l-xl cursor-pointer">
              <div className="docimg"><FaUserDoctor size={100}/></div>
              <div className="text-3xl items-center pt-3">Doctor</div>
            </div>
          </a>
          <a href="/signinpatient">
            <div className="patient bg-greeno flex flex-col justify-center align-middle p-48  rounded-r-xl cursor-pointer">
              <div className="docimg"><FaUser size={100}/></div>
              <div className="text-3xl items-center pt-3">Patient</div>
            </div>
          </a>
        </div>
      </div>
    </div>
   );
}
 
export default Choose;