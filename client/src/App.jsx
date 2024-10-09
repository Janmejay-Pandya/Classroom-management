import './App.css'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseUser from './pages/ChooseUser';
import LoginPageAdmin from './pages/LoginPageAdmin';
import LoginStudent from './pages/LoginStudent';
import LoginTeacher from './pages/LoginTeacher';
import AdminRegister from './pages/AdminRegister';
import AdminDash from './pages/admin/AdminDash';
import Classes from './pages/admin/classRealted/classes';
import AddClass from './pages/admin/classRealted/AddClass';
import ClassDetails from './pages/admin/classRealted/ClassDetails';
import SubjectBtn from './pages/admin/subjectRelated/SubjectBtn';
import SubjectForm from "./pages/admin/subjectRelated/SubjectForm";
import ShowSubject from './pages/admin/subjectRelated/ShowSubject';
import Teacher from './pages/admin/teacherRelated/Teacher';
import AddTeacher from './pages/admin/teacherRelated/AddTeacher';
function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ChooseUser" element={<ChooseUser />} />
        {/* Login Routes */}
        <Route path='/LoginPageAdmin' element={<LoginPageAdmin />} />
        <Route path='/AdminRegister' element={<AdminRegister />} />
        <Route path='/LoginStudent' element={<LoginStudent />} />
        <Route path='/LoginTeacher' element={<LoginTeacher />} />
        {/* Admin Paths */}
        <Route path='/AdminDash' element={<AdminDash />} />
        <Route path='/AdminDash' element={<AdminDash />} />    {/* Issue*/}
        {/* Class Related */}
        <Route path='/classes' element={<Classes />} />
        <Route path='/addclass' element={<AddClass />} />
        <Route path='/classdetails' element={<ClassDetails />} />
        {/* Subject Related */}
        <Route path='/subject' element={<SubjectBtn />} />
        <Route path='/subjectform' element={<SubjectForm />} />
        <Route path='showsubject' element={<ShowSubject />} />
        {/* Teacher Related */}
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/addteacher' element={<AddTeacher />} />
      </Routes>
    </Router>

  </>
}

export default App;
