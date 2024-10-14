import "../../css/StudentSubject.css";

function StudentSubject() {
    return <>
        <main className="std-subject">
            <div className="std-subject-div">
                <h1 className="std-heading">Class Details</h1>
                <p className="std-para1">You are Currently in Class :</p>{/* class name to be rendered from the database*/}
                <p className="std-para2">And these are your Subject</p>
                <ul>
                    <li>CO (432)</li> {/*The subjects also to be rendered from the database  */}
                </ul>
            </div>
        </main>
    </>
}

export default StudentSubject;