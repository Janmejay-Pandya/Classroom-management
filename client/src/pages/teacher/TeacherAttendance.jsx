import { useState } from "react";
import "../../css/TeacherAttendance.css";
import { useNavigate } from "react-router-dom";

function TeacherAttendance() {
    const navigate = useNavigate();

    // State for form inputs
    const [attendanceStatus, setAttendanceStatus] = useState("");
    const [attendanceDate, setAttendanceDate] = useState("");

    function handleGoBack(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        navigate('/teacher/teacherclassdetails');
    }

    // Handler for form submission (you can add more logic as needed)
    function handleSubmit(e) {
        e.preventDefault(); // Prevent page reload
        // Logic to handle form submission (e.g., save data)
        console.log({ attendanceStatus, attendanceDate });
    }

    return (
        <>
            <section className="std-attendance">
                <div className="stu-name-attendance">Student Name: </div>
                <div className="stu-subject-attendance">Subject Name: </div>
                <form className="stu-attendance-form" onSubmit={handleSubmit}>
                    <div>
                        <select
                            name="std-attendance"
                            id="std-attendance"
                            value={attendanceStatus}
                            onChange={(e) => setAttendanceStatus(e.target.value)}
                            required
                        >
                            <option value="" disabled>Attendance Status</option>
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                        </select>
                    </div>

                    <div>
                        <input
                            type="date"
                            name="std-date"
                            id="std-date"
                            value={attendanceDate}
                            onChange={(e) => setAttendanceDate(e.target.value)}
                            required
                        />
                    </div>
                    <button className="teacher-attendance" type="submit">Submit</button>
                    <button className="btn std-btn" onClick={handleGoBack}>Go Back</button>
                </form>
            </section>
        </>
    );
}

export default TeacherAttendance;
