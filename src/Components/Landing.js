import Navbar from "./Navbar";
import landing from '../Images/landinbg.png';
import '../style.css';
import Toplanding from "./Toplanding";
import Features from "./Features";
import Benefits from "./Benefits";
import Footer from "./Footer";
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
      <div className="z-1">
        <Features/>
        <Benefits/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
 
export default Landing;