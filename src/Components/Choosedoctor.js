import Logopos from "./Logopos";
import { SiChatbot } from "react-icons/si";
import { TbAnalyze } from "react-icons/tb";
import blob from '../Images/blob.png';

const Choosedoctor = () => {
  return ( 
    <div className="choosedoctor  w-full h-screen " 
    style={{backgroundImage: `url(${blob})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }}>
    <div className="docnpat flex flex-col">
      <Logopos/>
      <div className="division flex justify-center align-middle">
        <a href="http://localhost:8501">
          <div className="doctor flex flex-col justify-center align-middle bg-white bg-opacity-70 text-black p-48  rounded-l-xl cursor-pointer">
            <div className="docimg"><TbAnalyze size={100}/></div>
            <div className="text-3xl items-center pt-3">Analyze</div>
          </div>
        </a>
        <a href="http://localhost:8502">
          <div className="patient bg-greeno flex flex-col justify-center align-middle p-48  rounded-r-xl cursor-pointer">
            <div className="docimg"><SiChatbot size={100}/></div>
            <div className="text-3xl items-center pt-3">Chatbot</div>
          </div>
        </a>
      </div>
    </div>
  </div>
   );
}
 
export default Choosedoctor;