import box11 from '../Images/box11.png';
import box22 from '../Images/box22.png';
import box33 from '../Images/box33.png';
import blob from '../Images/blob.png';

const Features = () => {
  return ( 
    <div className="text-[#3a6c1e] Features w-full h-screen mt-96">
      <div>Our Key Benefits</div>
      <div className="flex justify-center items-center bg-gradient-to-br from-[#0F7732] to-[#66A030] w-[40%]">
        <div className='size-20'><img src={box11} alt="img" /></div>
        <div className='size-20'><img src={box22} alt="img" /></div>
        <div className='size-28'><img src={box33} alt="img" /></div>
      </div>
    </div>
   );
}
 
export default Features;