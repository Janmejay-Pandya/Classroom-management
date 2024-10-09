import loginImg from "../assets/login.png";
import "../css/LoginPageAdmin.css";
import { useNavigate } from "react-router-dom";
function LoginPageAdmin() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/AdminDash");
    }
    return <>
        <section className="admin-login">
            <div className="conatainer grid grid-two-cols">
                <div className="admin-login-img">
                    <img src={loginImg} alt="" width={500} height={500} />
                </div>
                <div className="login-form">
                    <h1>Admin Login</h1>
                    <form >
                        <div>
                            <input type="email" name="email" id="email" placeholder="Enter your email*" />
                        </div>
                        <div>
                            <input type="password" name="password" id="password" placeholder="Password* " />
                        </div>
                        <br />
                        <button className="btn" onClick={handleClick}>Login</button>
                    </form>
                    <p>Do not have an account? <a href="/AdminRegister" >Sign up</a></p>
                </div>
            </div>
        </section>
    </>
}

export default LoginPageAdmin;