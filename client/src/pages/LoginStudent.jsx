import studentlogin from "../assets/student-login.png"
import { useNavigate } from "react-router-dom";
import "../css/LoginStudent.css";
import { useState } from "react";

function LoginStudent() {
  const [stdlogin, setstdlogin] = useState({
    sturollnumber: "",
    studentname: "",
    studentpassword: ""
  });
  function handleInput(e) {
    let name = e.target.name;
    let value = e.target.value;

    setstdlogin({
      ...stdlogin,
      [name]: value,
    })
  }
  const navigate = useNavigate();
  function handleClick() {
    navigate('/student/studenthome');
  }
  function handleGoBack() {
    navigate('/ChooseUser');
  }
  return (
    <section className="student-login">
      <div className="container grid grid-two-cols">
        <div className="student-login-img">
          <img src={studentlogin} alt="student login page" width={500} height={500} />
        </div>
        <div className="login-form">
          <h1 className="student-login-heading">Student Login</h1>
          <p className="student-login-para">Welcome, Please enter your details</p>
          <form>
            <div>
              <input
                type="number"
                name="sturollnumber"
                id="stu-roll-number"
                placeholder="Enter student's Roll Number"
                onChange={handleInput}
                value={stdlogin.sturollnumber}
              />
            </div>

            <div>
              <input
                type="text"
                name="studentname"
                id="std-name"
                placeholder="Enter student's Name"
                onChange={handleInput}
                value={stdlogin.studentname}
              />
            </div>

            <div>
              <input
                type="password"
                name="studentpassword"
                id="std-password"
                placeholder="Enter student's Password"
                onChange={handleInput}
                value={stdlogin.studentpassword}
              />
            </div>
            <br />
            <button className="btn std-btn" onClick={handleClick}>Login</button>
            <br />
            <button className="btn std-btn" onClick={handleGoBack}>Go Back</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginStudent;



// function LoginStudent() {
//   return <>
//     <section className="student-login">
//       <div className="container grid grid-two-cols">
//         <div className="student-login-img">
//           <img src={studentlogin} alt="" />
//         </div>
//       </div>
//     </section>
//   </>
// }

// export default LoginStudent;