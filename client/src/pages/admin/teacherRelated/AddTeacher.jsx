import AdminDashboard from "../../../components/AdminDashboard";
import "../../../css/AddTeacher.css";
function AddTeacher() {
    return <>
        <AdminDashboard />
        <section className="add-teacher">
            <h1 className="add-teacher-heading">Add Teacher</h1>
            <p className="class">Class: </p>
            <p className="sub">Subject: </p>
            <br />
            <div className="add-teacher-form">
                <form>
                    <div>
                        <label htmlFor="name" className="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter teacher's name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter teacher's email" />
                    </div>
                    <div>
                        <label htmlFor="password" className="pass">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter teacher's password" />
                    </div>
                    <button className="add-teacher-button">Register</button>
                </form>
            </div>
        </section>
    </>
}

export default AddTeacher;