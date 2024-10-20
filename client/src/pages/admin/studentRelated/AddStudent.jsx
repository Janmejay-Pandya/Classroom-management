import AdminDashboard from "../../../components/AdminDashboard";
import "../../../css/AddStudent.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function AddStudent() {
    const [addstudent, setaddstudent] = useState({
        stdname: "",
        stdrollnumber: "",
        stdpassword: "",
        studentclass: ""
    });
    const [classes, setClasses] = useState([]); // This will hold the class options fetched from the database
    useEffect(() => {
        // Fetch classes from the database (replace with your actual API)
        fetch("/api/getClasses")
            .then(response => response.json())
            .then(data => setClasses(data))
            .catch(error => console.error("Error fetching classes:", error));
    }, []);
    function handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        setaddstudent({
            ...addstudent,
            [name]: value
        })
    }
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
                <input type="text" id="student-name" name="stdname" placeholder="Enter student's name" required onChange={handleInput} value={addstudent.stdname} />

                <label htmlFor="class" className="stu-class">Class</label>
                <select name="studentclass" id="student-class" required onChange={handleInput} value={addstudent.studentclass}>
                    {/* <option value="">Select Class</option>
                    <option value="dummy1">dummy1</option>
                    <option value="dummy2">dummy2</option> */}
                    <option value="">Select Class</option>
                    {classes.map(cls => (
                        <option key={cls.id} value={cls.name}>
                            {cls.name}
                        </option>
                    ))}
                    {/* class options will be added dynamicallly from the database here */}
                </select>

                <label htmlFor="roll-number" className="stu-roll-number">Roll Number</label>
                <input type="number" id="student-roll-number" name="stdrollnumber" placeholder="Enter student's roll number" required onChange={handleInput} value={addstudent.stdrollnumber} />

                <label htmlFor="password" className="stu-password">Password</label>
                <input type="password" id="student-password" name="stdpassword" placeholder="Enter student's password" required onChange={handleInput} value={addstudent.stdpassword} />

                <button className="add-student-button" type="submit" onClick={handleClick}> Add</button>
            </form>
        </div>
    </>
}

export default AddStudent;