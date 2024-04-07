import box44 from '../Images/box44.png';
import box22 from '../Images/box22.png';

const Benefits = () => {
  return ( 
    <div className="text-[#3a6c1e] Features w-full h-max flex flex-col mt-24 pl-28">
      <div className='text-6xl font-semibold'>Our Key Benefits</div>
      <div className="flex justify-center items-center m-10 mt-24">
        <div className="bg-gradient-to-br from-[#0F7732] to-[#66A030] w-[60%] px-4 py-28 my-20 rounded-xl flex justify-evenly gap-4">
          <div className='size-20'><img src={box44} alt="img" /></div>
          <div className='size-20'><img src={box22} alt="img" /></div>
        </div>
      </div>
    </div>
  );
}
 
export default Benefits;