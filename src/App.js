import './App.css';
import Choose from './Components/Choose';
import {Routes,Route} from 'react-router-dom';
import Signindoctor from './Components/Signindoctor';
import Landing from './Components/Landing';
import Signinpatient from './Components/Signinpatient';
function App() {
  return (
    <Routes>
      <Route path='/choose'element={<Choose/>}/>
      <Route path='/signindoctor' element={<Signindoctor/>}/>
      <Route path='/' element={<Landing/>}/>
      <Route path='/signinpatient' element={<Signinpatient/>}/>
    </Routes>
  );
}

export default App;