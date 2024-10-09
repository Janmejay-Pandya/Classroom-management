import AdminDashboard from "../../../components/AdminDashboard";
import classroom from "../../../assets/classroom.png";
import "../../../css/AddClass.css";
import { useNavigate } from "react-router-dom";
function AddClass() {
    const formStyle = {
        marginTop: "50px"
    };
    const navigate = useNavigate();
    function handleGoBack() {
        navigate('/classes');
    }
    function handleClick() {
        navigate('/ClassDetails');
    }
    return <>
        <AdminDashboard />
        <section className="add-class" style={formStyle}>
            <div className="container grid grid-two-cols">
                <div className="add-class-img">
                    <img src={classroom} alt="" />
                </div>

                <div className="add-class-form">
                    <h1 className="add-class-heading">Create Class</h1>
                    <form >
                        <input type="text" name="class" id="class" placeholder="Create a Class*" />
                        <br />
                        <button className="btn" onClick={handleClick}>Create</button>
                        <br />
                        <button className="go-back" onClick={handleGoBack}> Go Back</button>
                    </form>
                </div>
            </div>
        </section>
    </>
}
export default AddClass;