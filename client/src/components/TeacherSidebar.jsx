import teacherclass from "../assets/teacherclass.png";
import menu from "../assets/menu.png";
import home from "../assets/home.png";
import profile from "../assets/account.png";
import logout from "../assets/logout.png";
import close from "../assets/close.png";
import { Link } from "react-router-dom";
import notice from "../assets/notice.png";

function TeacherSidebar() {
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
                <li><img src={home} alt="" /> <Link to="teacherhome">Home</Link></li>

                <li><img src={teacherclass} alt="" /><Link to="teacherclassdetails">Class: </Link></li>{/*here class name will be renderd from database */}
                <li><img src={notice} alt="" /><Link to="">Notice</Link></li>
                <br />
                <li><img src={profile} alt="" /><a href="">Profile</a></li>
                <li><img src={logout} alt="" /><a href="">Logout</a></li>
            </ul>
            <li onClick={showSidebar} className="menu"><img src={menu} alt="" /></li>
        </nav>
    </>
}

export default TeacherSidebar;