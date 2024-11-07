// Page to see all the students of a class 
// import { useState, useEffect } from 'react';
import "../../../css/ShowStudent.css";
import AdminDashboard from '../../../components/AdminDashboard';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../store/auth";

function ShowStudent() {
    const navigate = useNavigate();
    const { student } = useAuth();

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
                    {student.length > 0 ? (
                        student.map((studentinfo, index) => (
                            <tr key={index}>
                                <td>{studentinfo.stdname}</td>
                                <td>{studentinfo.stdrollnumber}</td>
                                <td>{studentinfo.studentclass}</td>
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