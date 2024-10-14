import loginImg from "../assets/login.png";
import "../css/LoginPageAdmin.css";
import { useNavigate } from "react-router-dom";
function LoginPageAdmin() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/admindash");
    }
    function handleGoBack() {
        navigate("/chooseuser");
    }
    return <>
        <section className="admin-login">
            <div className="conatainer grid grid-two-cols">
                <div className="admin-login-img">
                    <img src={loginImg} alt="" width={500} height={500} />
                </div>
                <div className="adm-login-form">
                    <h1 className="admin-login-heading">Admin Login</h1>
                    <form >
                        <div>
                            <input type="email" name="email" id="adm-email" placeholder="Enter your email*" />
                        </div>
                        <div>
                            <input type="password" name="password" id="adm-password" placeholder="Password* " />
                        </div>
                        <br />
                        <button className="btn" onClick={handleClick}>Login</button>
                        <br />
                        <button className="btn std-btn" onClick={handleGoBack}>Go Back</button>
                    </form>
                    <p className="signup-link">Do not have an account? <a href="/AdminRegister" >Sign up</a></p>
                </div>
            </div>
        </section>
    </>
}

export default LoginPageAdmin;