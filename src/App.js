import './App.css';
import Choose from './Components/Choose';
import {Routes,Route} from 'react-router-dom';
import Signindoctor from './Components/Signindoctor';
import Landing from './Components/Landing';
import Signinpatient from './Components/Signinpatient';
import Createaccdoctor from './Components/Createaccdoctor';
import Chatbot from './Components/Chatbot';
function App() {
  return (
    <Routes>
      <Route path='/choose'element={<Choose/>}/>
      <Route path='/signindoctor' element={<Signindoctor/>}/>
      <Route path='/' element={<Landing/>}/>
      <Route path='/signinpatient' element={<Signinpatient/>}/>
      <Route path='/cadoc' element={<Createaccdoctor/>}/>
      <Route path='/chatbot' element={<Chatbot/>}/>
    </Routes>
  );
}

export default App;