import Logopos from "./Logopos";
import Navbar from "./Navbar";
import blob from '../Images/blob.png';

const Landing = () => {
  return ( 
    <div className="Landing  w-full h-screen " 
    style={{backgroundImage: `url(${blob})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }}>
      <Navbar/> 
    </div>
  );
}
 
export default Landing;