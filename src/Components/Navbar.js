import Logopos from '../Components/Logopos.js';

const Navbar = () => {
  return ( 
    <div className="Navbar">
      <div className="top-content flex justify-between items-center">
        <Logopos/>
        <div className="entry-content flex p-10 text-2xl text-[#3a6c1d]">
          <a href="/choose"><div className="px-5 cursor-pointer">SignIn</div></a>
          <a href="/choose"><div className="px-5 cursor-pointer">SignUp</div></a>
          <div className="px-5 cursor-pointer">About</div>
          <div className="px-5 cursor-pointer">Contact</div>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;