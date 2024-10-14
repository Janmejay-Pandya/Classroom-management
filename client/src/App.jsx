import './App.css'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseUser from './pages/ChooseUser';
import LoginPageAdmin from './pages/LoginPageAdmin';
import LoginStudent from './pages/LoginStudent';
import LoginTeacher from './pages/LoginTeacher';
import AdminRegister from './pages/AdminRegister';
// import AdminHome from './pages/admin/AdminHome';
import AdminDash from './pages/admin/AdminDash';
import Classes from './pages/admin/classRealted/classes';
import AddClass from './pages/admin/classRealted/AddClass';
import ClassDetails from './pages/admin/classRealted/ClassDetails';
import SubjectBtn from './pages/admin/subjectRelated/SubjectBtn';
import SubjectForm from "./pages/admin/subjectRelated/SubjectForm";
import ShowSubject from './pages/admin/subjectRelated/ShowSubject';
import Teacher from './pages/admin/teacherRelated/Teacher';
import AddTeacher from './pages/admin/teacherRelated/AddTeacher';
import Students from './pages/admin/studentRelated/students';
import AddStudent from './pages/admin/studentRelated/AddStudent';
import ShowStudent from './pages/admin/studentRelated/ShowStudent';
import ViewStudent from "./pages/admin/studentRelated/ViewStudent";
import StudentAttendence from "./pages/admin/studentRelated/StudentAttendence";
import AttendenceView from './components/AttendenceView';
import AddMarks from './pages/admin/marks/AddMarks';
import Notices from './pages/admin/noticeRelated/Notices';
import AddNotice from './pages/admin/noticeRelated/AddNotice';
import ShowNotice from './pages/admin/noticeRelated/ShowNotice';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
// import StudentHome from './pages/student/StudentHome';

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
        {/* <Route path='/AdminDash' element={<AdminDash />} />    Issue */}
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
        {/* Student Related */}
        <Route path='/student' element={<Students />} />
        <Route path='/addstudent' element={<AddStudent />} />
        <Route path='/showstudent' element={<ShowStudent />} />
        <Route path='/viewstudent' element={<ViewStudent />} />
        <Route path='/studentattendence' element={<StudentAttendence />} />
        {/* Attendence view */}
        <Route path='/attendenceview' element={<AttendenceView />} />
        {/* Marks Related */}
        <Route path='/addmarks' element={<AddMarks />} />
        {/* Notice Related */}
        <Route path='/notice' element={<Notices />} />
        <Route path='/addnotice' element={<AddNotice />} />
        <Route path='/shownotice' element={<ShowNotice />} />
        {/* <Route path='/adminhome' element={<AdminHome />} /> */}
        {/* Student Section */}
        <Route path='/student/*' element={<StudentDashboard />} />
        {/* Teacher Section */}
        <Route path='/teacher/*' element={<TeacherDashboard />} />

      </Routes>
    </Router>

  </>
}

export default App;
