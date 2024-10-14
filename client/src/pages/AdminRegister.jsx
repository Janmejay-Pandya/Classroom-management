import registerImg from "../assets/register.png";
import { useNavigate } from "react-router-dom";

import "../css/AdminRegister.css";
function AdminRegister() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/AdminDash");
    }
    return <>
        <section className="section-register">
            <div className="container grid grid-two-cols" >
                <div className="register-img">
                    <img src={registerImg} alt="" width={500} height={500} />
                </div>
                <div className="register-form">
                    <h1 className="admin-heading">Admin Register</h1>
                    <p className="admin-para">Create your own school by registering as an admin.
                        You will be able to add students and faculty and manage the system.</p>
                    <form >
                        <div>
                            <input type="text" name="name" id="admin-name" placeholder="Enter your name* " />
                        </div>

                        <div>
                            <input type="text" name="schoolName" id="schoolname" placeholder="Create your School Name* " />
                        </div>

                        <div>
                            <input type="email" name="email" id="admin-email" placeholder="Enter your email* " />
                        </div>

                        <div>
                            <input type="password" name="password" id="admin-password" placeholder="Password* " />
                        </div>
                        <button className="btn" onClick={handleClick} >Register</button>
                    </form>
                </div>

            </div>
        </section>
    </>
}

export default AdminRegister;