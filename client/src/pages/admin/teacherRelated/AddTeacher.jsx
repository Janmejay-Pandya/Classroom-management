import AdminDashboard from "../../../components/AdminDashboard";
import "../../../css/AddTeacher.css";
import { useState } from "react";
function AddTeacher() {
    const [addteacher, setaddteacher] = useState({
        teachername: "",
        teacheremail: "",
        teacherpassword: ""
    });
    function handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        setaddteacher({
            ...addteacher,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3500/api/createteacher/addteacher", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(addteacher),
            });
            console.log(response);
            if (response.ok) {
                const responseData = await response.json();
                setaddteacher({ teachername: "", teacheremail: "", teacherpassword: "" });
                alert("Teacher added successfully");
                console.log(responseData);
            }
        } catch (error) {
            console.log("Teahcer", error);

        }
    }
    return <>
        <AdminDashboard />
        <section className="add-teacher">
            <h1 className="add-teacher-heading">Add Teacher</h1>
            <p className="class">Class: </p>
            <p className="sub">Subject: </p>
            <br />
            <div className="add-teacher-form">
                <form method="POST" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="name">Name</label>
                        <input
                            type="text"
                            name="teachername"
                            id="name"
                            placeholder="Enter teacher's name"
                            onChange={handleInput}
                            value={addteacher.teachername}

                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="email">Email</label>
                        <input
                            type="email"
                            name="teacheremail"
                            id="email"
                            placeholder="Enter teacher's email"
                            onChange={handleInput}
                            value={addteacher.teacheremail}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="pass">Password</label>
                        <input
                            type="password"
                            name="teacherpassword"
                            id="password"
                            placeholder="Enter teacher's password"
                            onChange={handleInput}
                            value={addteacher.teacherpassword}
                        />
                    </div>
                    <button className="add-teacher-button">Register</button>
                </form>
            </div>
        </section>
    </>
}

export default AddTeacher;