import AdminDashboard from "../../../components/AdminDashboard";

function ShowSubject() {
    return <>
        <AdminDashboard />
        <section className="showSub">
            <h1>Subject Details </h1>
            <p>Here a table containing column for subject name, sessions completed and from which class do these subject belong will be displayed and a button for each row will be there as `view`. When we click on view the full details of the subject will be shown like sub name,sub code,sesions,no of students, class name and teacher name of that subject</p>
        </section >
    </>
}

export default ShowSubject;