import "../../css/TeacherClassDetails.css";
import { useNavigate } from "react-router-dom";

function TeacherClassDetails() {
    const navigate = useNavigate();
    function handleView() {
        navigate("/teacher/teacherviewstudent");
    }
    function handleClick() {
        navigate('/teacher/teacherattendance');
    }
    const students = [
        { name: 'jay', rollNumber: '2207012087' },
        { name: 'stu1', rollNumber: '11' },
        { name: 'stu2', rollNumber: '12' }
    ];
    return <>
        <div className="students-list-container">
            <h2>Students List:</h2>
            <table className="students-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.rollNumber}</td>
                            <td className="actions">
                                <button className="view-button" onClick={handleView}>VIEW</button>
                                <button className="attendance-button" onClick={handleClick}>TAKE ATTENDANCE</button>
                                <button className="dropdown-button">▼</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}

export default TeacherClassDetails;