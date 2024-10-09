import AdminDashboard from "../../../components/AdminDashboard";
import { useNavigate } from "react-router-dom";
function SubjectBtn() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/SubjectForm");
    }
    return <>
        <AdminDashboard />
        <section className="section-class">
            <h1>Add Subject</h1>
            <p>Click the below button to create a new Subject 👇</p>
        </section>
        <div className="Create-button">
            <button className="btn" onClick={handleClick} >Add Subject</button>
        </div>
    </>
}

export default SubjectBtn;