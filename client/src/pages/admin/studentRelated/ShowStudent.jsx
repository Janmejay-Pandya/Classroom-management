// Page to see all the students of a class 
import { useState, useEffect } from 'react';
import "../../../css/ShowStudent.css";
import AdminDashboard from '../../../components/AdminDashboard';
import { useNavigate } from 'react-router-dom';
function ShowStudent() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    // Mock data for students (You can replace this with data fetched from an API)
    useEffect(() => {
        // Simulating data fetch
        const fetchedStudents = [
            { name: 'Reddy', rollNumber: '22070122091', class: 'CS-C' },
            { name: 'Janmejay', rollNumber: '22070122086', class: 'CS-C' },
            { name: 'Jay', rollNumber: '22070122087', class: 'CS-C' },
            // Add more students as needed
        ];
        setStudents(fetchedStudents);
    }, []);

    function handleView() {
        navigate('/viewstudent');
    }
    function handleAttendence() {
        navigate('/studentattendence');
    }
    return <>
        <AdminDashboard />
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.rollNumber}</td>
                                <td>{student.class}</td>
                                <td className="actions">
                                    <button className="view-btn" onClick={handleView}>VIEW</button>
                                    <button className="attendance-btn" onClick={handleAttendence}>TAKE ATTENDANCE</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No students found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>
}

export default ShowStudent;