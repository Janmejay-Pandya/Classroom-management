import AdminDashboard from "../../../components/AdminDashboard";
// import "../../../css/Teacher.css";
import { useNavigate } from "react-router-dom";
function Teacher() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/classes');
    }
    return <>
        <AdminDashboard />
        <section className="section-class">
            <h1>Add Teacher</h1>
            <p>Click the below button to add a new Teacher 👇</p>
        </section>
        <div className="Create-button">
            <button className="btn" onClick={handleClick} >Add Teacher</button>
        </div>
    </>
}

export default Teacher;