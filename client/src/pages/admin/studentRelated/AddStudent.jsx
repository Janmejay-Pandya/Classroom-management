import AdminDashboard from "../../../components/AdminDashboard";
import "../../../css/AddStudent.css";
import { useNavigate } from "react-router-dom";

function AddStudent() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/showstudent');
    }
    return <>
        <AdminDashboard />
        <div className="form-container">
            <h1 className="add-student-heading">Add Student</h1>
            <form className="add-student-form">
                
                <label htmlFor="name" className="stu-name">Name</label>
                <input type="text" id="student-name" name="student-name" placeholder="Enter student's name" required />

                <label htmlFor="class" className="stu-class">Class</label>
                <select name="student-class" id="student-class">
                    <option value="">Select Class</option>
                    {/* class options will be added dynamicallly here */}
                </select>

                <label htmlFor="roll-number" className="stu-roll-number">Roll Number</label>
                <input type="number" id="student-roll-number" name="student-roll-number" placeholder="Enter student's roll number" required />

                <label htmlFor="password" className="stu-password">Password</label>
                <input type="password" id="student-password" name="student-password" placeholder="Enter student's password" required />

                <button className="add-student-button" type="submit" onClick={handleClick}> Add</button>
            </form>
        </div>
    </>
}

export default AddStudent;