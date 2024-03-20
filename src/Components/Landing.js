import Navbar from "./Navbar";
import landing from '../Images/landinbg.png';
import '../style.css';
import Toplanding from "./Toplanding";
import Features from "./Features";
const Landing = () => {

  
  return ( 
    <div className="Landing  w-full h-max flex flex-col" 
    style={{backgroundImage: `url(${landing})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }}>
      <div className="z-100">
        <Navbar/> 
        <Toplanding/>
      </div>
      <div className="z-1"><Features/></div>
    </div>
  );
}
 
export default Landing;