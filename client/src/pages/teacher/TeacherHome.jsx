import "../../css/TeacherHome.css";

function TeacherHome() {
    return <>
        <div className="dashboard">
            <div className="card">
                <div className="card-icon">👫</div>
                <div className="card-title">Class Students</div>
                <div className="card-value">3</div>
            </div>
            <div className="card">
                <div className="card-icon">📚</div>
                <div className="card-title">Total Lessons</div>
                <div className="card-value">23</div>
            </div>
            <div className="card">
                <div className="card-icon">📝</div>
                <div className="card-title">Tests Taken</div>
                <div className="card-value">24</div>
            </div>
            <div className="card">
                <div className="card-icon">⏰</div>
                <div className="card-title">Total Hours</div>
                <div className="card-value">30hrs</div>
            </div>
        </div>
        <div className="notice">
            No Notices to Show Right Now
        </div>
    </>
}

export default TeacherHome