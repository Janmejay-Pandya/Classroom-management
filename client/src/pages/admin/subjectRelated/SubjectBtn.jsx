import AdminDashboard from "../../../components/AdminDashboard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/auth";

function SubjectBtn() {
    const { classes } = useAuth();
    console.log(classes);

    const navigate = useNavigate();
    function handleClick() {
        if (classes.length == 0) {
            navigate("/addclass");
            alert("Create class to add Subject");
        }
        else {
            navigate("/SubjectForm");
        }
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