import AdminDashboard from "../../../components/AdminDashboard"
import "../../../css/AddNotice.css";
import { useState } from "react";

function AddNotice() {
    const [notice, setnotice] = useState({
        title: "",
        details: "",
        date: ""
    });
    function handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        setnotice({
            ...notice,
            [name]: value
        })
    }
    function handleSubmit(e) {
        e.preventDefault(); // Prevent page reload
        // Logic to handle form submission (e.g., save data)
        // console.log({ notice });
    }
    return <>
        <AdminDashboard />
        <section className="section-notice">
            <div className="add-notice">
                <h1 className="add-notice-heading">Add Notice</h1>
                <form className="add-notice-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="title">Title</label>
                        <input type="text" name="title" id="title" placeholder="Enter Notice Title" onChange={handleInput} value={notice.title} />
                    </div>
                    <div>
                        <label htmlFor="details" className="details">Email</label>
                        <textarea type="text" name="details" id="details" placeholder="Enter Notice Details" onChange={handleInput} value={notice.details} />
                    </div>
                    <div>
                        <label htmlFor="date" className="date">Date</label>
                        <input type="date" name="date" id="date" onChange={handleInput} value={notice.date} />
                    </div>
                    <button className="add-notice-button">Add</button>
                </form>
            </div>
        </section>
    </>
}

export default AddNotice