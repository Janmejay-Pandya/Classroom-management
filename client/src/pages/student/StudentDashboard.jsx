import StudentSidebar from "../../components/StudentSidebar";
import { Routes, Route } from "react-router-dom";
import StudentHome from "./StudentHome";
import StudentSubject from "./StudentSubject";
import ViewStdAttendance from "./ViewStdAttendance";
function StudentDashboard() {
    return <>
        <div>
            <main className="admin-nav">
                <StudentSidebar />
                <div className="header">Student DashBoard</div>
            </main>
            <Routes>
                <Route path="/studenthome" element={<StudentHome />} />
                <Route path="/studentsubject" element={<StudentSubject />} />
                <Route path="/studentattendance" element={<ViewStdAttendance />} />
            </Routes>
        </div>
    </>
}

export default StudentDashboard;