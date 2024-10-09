import "../../css/AdminDash.css";
import AdminDashboard from "../../components/AdminDashboard";
import student from "../../assets/img1.png";
import classes from "../../assets/img2.png";
import teacher from "../../assets/img3.png";
import fees from "../../assets/img4.png";
function AdminDash() {
    return <>
        <AdminDashboard />
        <div className="dash-section">
            <div className="container grid grid-four-cols">
                <div className="stu">
                    <img src={student} alt="" />
                    <br />
                    Total Students
                    <br />
                    <p>0</p>
                </div>
                <div className="cla">
                    <img src={classes} alt="" />
                    <br />
                    Total Classes
                    <br />
                    <p>0</p>
                </div>
                <div className="tea">
                    <img src={teacher} alt="" />
                    <br />
                    Total Teachers
                    <br />
                    <p>0</p>
                </div>
                <div className="col">
                    <img src={fees} alt="" />
                    <br />
                    Fees Collections
                    <br />
                    <p>0</p>
                </div>
            </div>
        </div>
    </>
}
export default AdminDash;