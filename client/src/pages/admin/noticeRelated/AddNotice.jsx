import AdminDashboard from "../../../components/AdminDashboard"
import "../../../css/AddNotice.css";

function AddNotice() {
    return <>
        <AdminDashboard />
        <section className="section-notice">
            <div className="add-notice">
                <h1 className="add-notice-heading">Add Notice</h1>
                <form className="add-notice-form">
                    <div>
                        <label htmlFor="title" className="title">Title</label>
                        <input type="text" name="title" id="title" placeholder="Enter Notice Title" />
                    </div>
                    <div>
                        <label htmlFor="details" className="details">Email</label>
                        <textarea type="text" name="details" id="details" placeholder="Enter Notice Details" />
                    </div>
                    <div>
                        <label htmlFor="date" className="date">Date</label>
                        <input type="date" name="date" id="date" />
                    </div>
                    <button className="add-notice-button">Add</button>
                </form>
            </div>
        </section>
    </>
}

export default AddNotice