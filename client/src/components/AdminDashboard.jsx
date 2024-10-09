import Sidebar from "../components/Sidebar";
import "../css/AdminDashboard.css";
function AdminDashboard() {
    return <>
        <main className="admin-nav">
            <Sidebar></Sidebar>
            <div className="header">Admin DashBoard</div>
        </main>
    </>
}

export default AdminDashboard;