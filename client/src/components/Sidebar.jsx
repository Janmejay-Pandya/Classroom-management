import menu from "../assets/menu.png";
import close from "../assets/close.png";
import "../css/Sidebar.css";
import home from "../assets/home.png";
import classes from "../assets/class.png";
import subject from "../assets/subjects.png";
import teachers from "../assets/teachers.png";
import student from "../assets/student.png";
import notice from "../assets/notice.png";
import complain from "../assets/complain.png";
import profile from "../assets/account.png";
import logout from "../assets/logout.png";
function Sidebar() {
    function showSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
    }
    function hideSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
    }
    return <>
        <nav>
            <ul className="sidebar">
                <li><img src={close} onClick={hideSidebar} alt="" /></li>
                <li><img src={home} alt="" /><a href="/AdminDash">Home</a></li>
                <li><img src={classes} alt="" /><a href="/classes">Classes</a></li>
                <li><img src={subject} alt="" /><a href="/subject">Subject</a></li>
                <li><img src={teachers} alt="" /><a href="/teacher">Teacher</a></li>
                <li><img src={student} alt="" /><a href="">Students</a></li>
                <li><img src={notice} alt="" /><a href="">Notices</a></li>
                <li><img src={complain} alt="" /><a href="">Complaints</a></li>
                <hr />
                <li><img src={profile} alt="" /><a href="">Profile</a></li>
                <li><img src={logout} alt="" /><a href="">Logout</a></li>
            </ul>
            <li onClick={showSidebar} className="menu"><img src={menu} alt="" /></li>
        </nav>
    </>
}

export default Sidebar;