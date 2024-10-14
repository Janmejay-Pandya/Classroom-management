import { useState } from "react";
import "../../css/ViewStdAttendance.css";

function ViewStdAttendance() {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggle = () => {
        setShowDetails(!showDetails);
    };
    return <>
        <div className="attendance-container">
            <h1 className="view-std-attendance-h1">Attendance</h1>
            <table className="attendance-table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Present</th>
                        <th>Total Sessions</th>
                        <th>Attendance Percentage</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CO</td>
                        <td>3</td>
                        <td>23</td>
                        <td>13.04%</td>
                        <td>
                            <button className="details-button" onClick={handleToggle}>
                                {showDetails ? "▲ DETAILS" : "▼ DETAILS"}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            {showDetails && (
                <div className="attendance-details">
                    <h2>Attendance Details</h2>
                    <table className="details-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-10-01</td>
                                <td>Present</td>
                            </tr>
                            <tr>
                                <td>2024-10-02</td>
                                <td>Present</td>
                            </tr>
                            <tr>
                                <td>2024-10-03</td>
                                <td>Present</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Overall Attendance Percentage: 13.04%</p>
                </div>
            )}

        </div>
    </>
}

export default ViewStdAttendance;