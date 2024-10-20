import AdminDashboard from "../../../components/AdminDashboard";
import classroom from "../../../assets/classroom.png";
import "../../../css/AddClass.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function AddClass() {
    const [addclass, setaddclass] = useState({
        addclass: ""
    });
    function handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;

        setaddclass({
            ...addclass,
            [name]: value,
        })
    }
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
                        <input type="text" name="addclass" id="class" placeholder="Create a Class*" onChange={handleInput} value={addclass.addclass} />
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