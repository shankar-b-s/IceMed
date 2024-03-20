import Logopos from "./Logopos";
import side1 from '../Images/side1.png';
import side2 from '../Images/side2.png';
import side3 from '../Images/side3.png';
import side4 from '../Images/side4.png';

const Sidebar = () => {
  return ( 
    <div className="sidebar w-[40%] h-screen bg-[#84aa6d] flex flex-col justify-between">
      <div className="top flex flex-col justify-center items-center">
        <div><Logopos/></div>
        <div><img src={side1} alt="img" className="size-[90%]" /></div>
      </div>
      <div className="bottom flex flex-col justify-center items-center py-10">
        <div className="py-4"><img src={side2} alt="img" /></div>
        <div className="py-4"><img src={side3} alt="img" /></div>
        <div className="py-4"><img src={side4} alt="img" /></div>
      </div>
    </div>

   );
}
 
export default Sidebar;