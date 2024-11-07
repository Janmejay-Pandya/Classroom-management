import StudentSidebar from "../../components/StudentSidebar";
import { Routes, Route } from "react-router-dom";
import StudentHome from "./StudentHome";
import StudentSubject from "./StudentSubject";
import ViewStdAttendance from "./ViewStdAttendance";
import StudentLogout from "./StudentLogout";
function StudentDashboard() {
    return <>
        <div>
            <main className="admin-nav">
                <StudentSidebar title={"Student DashBoard"} />
            </main>
            <Routes>
                <Route path="/studenthome" element={<StudentHome />} />
                <Route path="/studentsubject" element={<StudentSubject />} />
                <Route path="/studentattendance" element={<ViewStdAttendance />} />
                <Route path="/studentlogout" element={<StudentLogout />} />
            </Routes>
        </div>
    </>
}

export default StudentDashboard;