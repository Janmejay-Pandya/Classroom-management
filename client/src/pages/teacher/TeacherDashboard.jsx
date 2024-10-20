import TeacherSidebar from "../../components/TeacherSidebar";
import { Routes, Route } from "react-router-dom";
import TeacherHome from "./TeacherHome";
import TeacherClassDetails from "./TeacherClassDetails";
import TeacherViewStudent from "./TeacherViewStudent";
import TeacherAttendance from "./TeacherAttendance";
import TeacherNotice from "./teachernotice";
function TeacherDashboard() {
    return <>
        <div>
            <main className="admin-nav">
                <TeacherSidebar title={"Teacher Dashboard"} />
            </main>
            <Routes>
                <Route path="/teacherhome" element={<TeacherHome />} />
                <Route path="/teacherclassdetails" element={<TeacherClassDetails />} />
                <Route path="/teacherviewstudent" element={<TeacherViewStudent />} />
                <Route path="/teacherattendance" element={<TeacherAttendance />} />
                <Route path="/teachernotice" element={<TeacherNotice />} />
            </Routes>
        </div>
    </>
}

export default TeacherDashboard;