import github from '../Images/github.png';
import linkedin from '../Images/linkedin.png';
import insta from '../Images/insta.png';
const Footer = () => {
  return ( 
  <div className="footer text-black flex flex-col mt-16 justify-center items-center bg-white">
      <div className='flex flex-col pt-10'>
        <div className='text-5xl flex font-semibold justify-center'><span className="underline">A</span>bout Us</div>
        <div className='flex flex-col py-10'>
          <div className='py-4'>Crafted by Khushi, Ali Rashid, Jahnavi , Ved and Shankar</div>
          <div>Team IceTea #55</div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center py-4'>
        <div>Made with love by Team IceTea</div>
        <div className='flex items-center'>
          <div className='size-12 px-2 py-2'><img src={github} alt="img" /></div>
          <div className='size-12 px-2 py-2'><img src={linkedin} alt="img" /></div>
          <div className='size-12 px-2 py-2'><img src={insta} alt="img" /></div>
        </div>
      </div>
  </div> 
  );
}
 
export default Footer;