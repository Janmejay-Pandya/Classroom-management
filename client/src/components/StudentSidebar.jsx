import menu from "../assets/menu.png";
import home from "../assets/home.png";
import subject from "../assets/subjects.png";
import attendance from "../assets/attendance.png";
import profile from "../assets/account.png";
import logout from "../assets/logout.png";
import close from "../assets/close.png";
import { Link } from "react-router-dom";


function StudentSidebar() {
    function showSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
        // setSidebarOpen(!isSidebarOpen);
    }
    function hideSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
    }
    return <>
        <nav>
            <ul className="sidebar"> {/*{`sidebar ${isSidebarOpen ? '' : 'hidden'}`}*/}
                <li><img src={close} onClick={hideSidebar} alt="" /></li>
                <li><img src={home} alt="" /> <Link to="studenthome">Home</Link></li>

                <li><img src={subject} alt="" /><Link to="studentsubject">Subject</Link></li>
                <li><img src={attendance} alt="" /><Link to="studentattendance">Attendance</Link></li>
                {/* <li><img src={complain} alt="" /><a href="">Complaints</a></li> */}
                <br />
                <li><img src={profile} alt="" /><a href="">Profile</a></li>
                <li><img src={logout} alt="" /><a href="">Logout</a></li>
            </ul>
            <li onClick={showSidebar} className="menu"><img src={menu} alt="" /></li>
        </nav>
    </>
}

export default StudentSidebar;