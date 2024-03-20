import './App.css';
import Choose from './Components/Choose';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Signindoctor from './Components/Signindoctor';
function App() {
  return (
    <Routes>
      <Route path='/choose'element={<Choose/>}/>
      <Route path='/signindoctor' element={<Signindoctor/>}/>
    </Routes>
  );
}

export default App;