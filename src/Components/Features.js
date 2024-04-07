import box11 from '../Images/box11.png';
import box22 from '../Images/box22.png';
import box33 from '../Images/box33.png';
import blob from '../Images/blob.png';


const Features = () => {
  return ( 
    <div className="text-[#3a6c1e] Features w-full h-max flex flex-col mt-64 pl-28">
      <div className='text-6xl font-semibold'>Our Key Benefits</div>
      <div className="flex justify-center items-center m-10 mt-32">
        <div className="bg-gradient-to-br from-[#0F7732] to-[#66A030] w-[60%] px-4 py-28 rounded-xl flex justify-evenly gap-4">
          <div className='size-20'><img src={box11} alt="img" /></div>
          <div className='size-20'><img src={box22} alt="img" /></div>
          <div className='size-28'><img src={box33} alt="img" /></div>
        </div>
      </div>
      <div className='flex flex-col py-[10%]'>
        <div className='text-black text-6xl font-semibold mt-44 pt-[8%]'>Integrate our model into your system 
          <br />and ensure efficient, smooth and 
          <br />convenient flow of patient doctor 
          <br />interaction, the way it should be.
        </div>
        <div className='text-2xl pt-5'>Are you a <a href="/siginpatient" className='underline'>Patient?</a> <a href="/sigindoctor" className='underline'>A Doctor?</a></div>
        <div className='text-2xl '>Either ways, we've got you covered!</div>
      </div>
    </div>

   );
}
 
export default Features;