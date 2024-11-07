import studentlogin from "../assets/student-login.png"
import { useNavigate } from "react-router-dom";
import "../css/LoginStudent.css";
import { useState } from "react";
import { useAuth } from "../store/auth";

function LoginStudent() {
  const { storeTokenInLS } = useAuth();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3500/api/std/LoginStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stdlogin),
    });
    console.log(response);

    const responseData = await response.json();
    if (response.ok) {
      alert("Student Login Successfull");
      setstdlogin({ sturollnumber: "", studentname: "", studentpassword: "" });
      storeTokenInLS(responseData.token);
      console.log(responseData);
      navigate('/student/studenthome');
    }
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
          <form onSubmit={handleSubmit}>
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
            <button className="btn std-btn" >Login</button>
            <br />
            <button className="btn std-btn" onClick={() => navigate(-1)}>Go Back</button>
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