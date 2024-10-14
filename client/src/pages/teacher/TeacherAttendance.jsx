import "../../css/TeacherAttendance.css";
import { useNavigate } from "react-router-dom";

function TeacherAttendance() {
    const navigate = useNavigate();
    function handleGoBack() {
        navigate('/teacher/teacherclassdetails');
    }
    return <>
        <section className="std-attendance">
            <div className="stu-name-attendance">Student Name: </div>
            <div className="stu-subject-attendance">Subject Name: </div>
            <form className="stu-attendance-form">
                <div>
                    <select name="std-attendance" id="std-attendance">
                        <option value="" disabled selected>Attandance Status</option>
                        <option value="">Present</option>
                        <option value="">Absent</option>
                    </select>
                </div>

                <div>
                    <input type="date" name="std-date" id="std-date" />
                </div>
                <button className="teacher-attendance">Submit</button>
                <button className="btn std-btn" onClick={handleGoBack}>Go Back</button>
            </form>
        </section>
    </>
}

export default TeacherAttendance;