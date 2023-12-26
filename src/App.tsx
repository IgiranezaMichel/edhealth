import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './Pages/Visitor/Auth/Signup';
import HospitalHome from './Pages/Hospital/HospitalHome';
function App() {
  localStorage.setItem('','');
  return (
    <>
 <Router>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/hospital' element={<HospitalHome/>}/>
    </Routes>
 </Router>
    </>
  )
}

export default App
