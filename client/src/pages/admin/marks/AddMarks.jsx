import AdminDashboard from "../../../components/AdminDashboard";
import UtilityTab from "../../../components/UtilityTab";
import "../../../css/AddMarks.css";
// import { useNavigate } from "react-router-dom";

function AddMarks() {
    return <>
        <AdminDashboard />
        <UtilityTab />
        <section className="add-marks-section">
            <h1 className="add-marks-heading">Add Marks</h1>
            <p className="student-marks-name">Student name: </p> {/* Name will be fetched from database*/}
            <div className="add-marks-form">
                <form >
                    <div>
                        <select name="choose-subject" id="choose-subject">
                            <option value="" disabled>Select Subject</option>
                            <option value="" >POE</option>
                            {/* Subjects will be added from the database */}
                        </select>
                    </div>

                    <div>
                        <input type="number" name="stu-marks" id="stu-marks" placeholder="Enter student's Marks*" />
                    </div>
                    <button className="add-attendence">Submit</button>
                    <button className="go-back add-marks-go-back" >Go Back</button>
                </form>
            </div>
        </section>
    </>
}

export default AddMarks;