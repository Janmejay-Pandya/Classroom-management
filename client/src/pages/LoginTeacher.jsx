import teacherLogin from "../assets/teacher-login-portal.png";
import { useNavigate } from "react-router-dom";
import "../css/LoginTeacher.css";

function LoginTeacher() {
  const naviagte = useNavigate();
  function handleClick() {
    naviagte('/teacher/teacherhome');
  }
  function handleGoBack() {
    naviagte('/ChooseUser');
  }
  return <>
    <section className="student-login">
      <div className="container grid grid-two-cols">
        <div className="student-login-img">
          <img src={teacherLogin} alt="student login page" width={500} height={500} />
        </div>
        <div className="login-form">
          <h1 className="student-login-heading">Teacher Login</h1>
          <p className="student-login-para">Welcome, Please enter your details</p>
          <form>
            <div>
              <input type="email" name="teacher-email" id="teacher-email" placeholder="Enter your email*" />
            </div>

            <div>
              <input type="password" name="student-password" id="std-password" placeholder="Enter Password*" />
            </div>
            <br />
            <button className="btn std-btn" onClick={handleClick}>Login</button>
            <br />
            <button className="btn std-btn" onClick={handleGoBack}>Go Back</button>
          </form>
        </div>
      </div>
    </section>
  </>
}

export default LoginTeacher