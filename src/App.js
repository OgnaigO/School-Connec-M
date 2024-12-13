import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import HomeSchoolAdmin from './pages/HomeSchoolAdmin';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';
import SchoolAdmin from './pages/SchoolAdmin';
import SuperAdmin from './pages/SuperAdmin';
import HomeSuperAdmin from './pages/HomeSuperAdmin';
import AllEvents from './pages/AllEvents';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Thêm route cho ForgotPassword */}
      < Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<HomeSchoolAdmin/>}>
          <Route path="/schooladmin" element={<SchoolAdmin/>}/>
          <Route path="/all-events" element={<AllEvents/>}/>
        </Route>
        <Route element={<HomeSuperAdmin/>}>
         <Route path="/superadmin" element={<SuperAdmin/>} />
        </Route>
      </Routes>
  </Router>
);

export default App;
