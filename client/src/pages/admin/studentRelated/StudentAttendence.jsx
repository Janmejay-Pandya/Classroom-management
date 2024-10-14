import AdminDashboard from "../../../components/AdminDashboard";
import "../../../css/StudentAttendence.css";
import { useNavigate } from "react-router-dom";

function StudentAttendence() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/showstudent");
    }
    return <>
        <AdminDashboard />
        <section className="student-attendence">
            <div className="student-name">Student Name: </div>
            <form className="student-attendence-form">
                <div>
                    <select name="stu-subject" id="stu-subject">
                        <option value="" disabled selected>Select Option</option>
                        <option value="">POE</option>
                        {/* subject options will be dynamically added here  */}
                    </select>
                </div>

                <div>
                    <select name="attendence-status" id="attendence-status">
                        <option value="" disabled selected>Attendence Status</option>
                        <option value="">Present</option>
                        <option value="">Absent</option>
                    </select>
                </div>

                <div>
                    <input type="date" name="date" id="date" />
                </div>
                <button className="add-attendence" onClick={handleClick}>Submit</button>
            </form>
        </section>
    </>
}

export default StudentAttendence;