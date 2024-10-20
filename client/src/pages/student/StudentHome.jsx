import "../../css/StudentHome.css";

function StudentHome() {
    return <>
        <div className="student-app">
            <div className="main-content">
                <div className="dashboard-content">
                    <div className="summary-card">
                        <h3>Total Subjects</h3>
                        <h1 className="stu-home-heading">1</h1>
                    </div>

                    <div className="summary-card">
                        <h3>Total Assignments</h3>
                        <h1 className="stu-home-heading">15</h1>
                    </div>
                </div>
                <div className="notices">
                    <h2>Notices</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Details</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Exams</td>
                                <td>We have mid sem starting from 20 October</td>
                                <td>2024-10-11</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default StudentHome;