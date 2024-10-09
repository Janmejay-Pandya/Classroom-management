import AdminDashboard from "../../../components/AdminDashboard";

function ClassDetails() {
    const h1Style = {
        marginTop: "40px"
    };
    return <>
        <AdminDashboard />
        <section className="section-cd">
            <h1 className="heading" style={h1Style}>Class Details</h1>
        </section>
    </>
}

export default ClassDetails;