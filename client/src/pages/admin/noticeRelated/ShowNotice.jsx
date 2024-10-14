import "../../../css/ShowNotice.css";
import AdminDashboard from "../../../components/AdminDashboard";

function ShowNotice() {
    const data = [
        {
            title: "Exams",
            details: "We have mid sem starting from 20 october",
            date: "2024-10-11",
        },
    ];

    return <>
        <AdminDashboard />
        <table className="custom-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Details</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.details}</td>
                        <td>{item.date}</td>
                        <td>
                            <button className="delete-btn" onClick={() => alert("Delete item")}>
                                🗑️
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

export default ShowNotice;