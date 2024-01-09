import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './Pages/Visitor/Auth/Signup';
import { HospitalHome } from './Pages/Hospital/HospitalHome';
import { HospitalUserSetting } from './Pages/Hospital/HospitalUserSetting';
import { HospitalDashboard } from './Pages/Hospital/HospitalDashboard';
import { HospitalNotification } from './Pages/Hospital/HospitalNotification';
import { ViewTraining } from './Pages/Hospital/Display/ViewTraining';
import { ViewCertificate } from './Pages/Hospital/Display/ViewCertificate';
import { ViewJob } from './Pages/Hospital/Display/ViewJob';
import { SchoolHome } from './Pages/School/SchoolHome';
import StudentHome from './Pages/Student/StudentHome';
import { AdminHome } from './Pages/Admin/AdminHome';
import { ManageUsers } from './Pages/Admin/ManageUsers';
import { ManageSchool } from './Pages/Admin/ManageSchool';
import { ManageHospital } from './Pages/Admin/ManageHospital';
import NcnmHome from './Pages/ncnm/NcnmHome';
import { CertifiedUser } from './Pages/ncnm/CertifiedUser';
import { NcnmSchools } from './Pages/ncnm/NcnmSchools';
import { NcnmHospital } from './Pages/ncnm/NcnmHospital';
import { NcnmTraining } from './Pages/ncnm/NcnmTraining';
import { NcnmCertificate } from './Pages/ncnm/Certificate/NcnmCertificate';
import { NcnmNotification } from './Pages/ncnm/NcnmNotification';
import { NcnmSetting } from './Pages/ncnm/NcnmSetting';
function App() {
  localStorage.setItem('','');
  return (
    <>
 <Router>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='/admin/users' element={<ManageUsers/>}/>
      <Route path='/admin/school' element={<ManageSchool/>}/>
      <Route path='/admin/hospital' element={<ManageHospital/>}/>
      {/*  */}
      <Route path='/ncnm' element={<NcnmHome/>}/>
      <Route path='/ncnm/users' element={<CertifiedUser/>}/>
      <Route path='/ncnm/school' element={<NcnmSchools/>}/>
      <Route path='/ncnm/hospital' element={<NcnmHospital/>}/>
      <Route path='/ncnm/training' element={<NcnmTraining/>}/>
      <Route path='/ncnm/certificate' element={<NcnmCertificate/>}/>
      <Route path='/ncnm/notification' element={<NcnmNotification/>}/>
      <Route path='/ncnm/setting' element={<NcnmSetting/>}/>
      {/*  */}
      <Route path='/school' element={<SchoolHome/>}/>
      <Route path='/student' element={<StudentHome/>}/>
      <Route path='/hospital' element={<HospitalDashboard/>}/>
      <Route path='/hospital/home' element={<HospitalHome/>}/>
      <Route path='/hospital/notification' element={<HospitalNotification/>}/>
      <Route path='/hospital/setting' element={<HospitalUserSetting/>}/>
      <Route path='/hospital/training' element={<ViewTraining/>}/>
      <Route path='/hospital/certificate' element={<ViewCertificate/>}/>
      <Route path='/hospital/job' element={<ViewJob/>}/>
    </Routes>
 </Router>
    </>
  )
}

export default App
