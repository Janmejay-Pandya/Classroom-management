const express = require('express');
const app = express();
const port = 3500;
const cors = require('cors');
const adminRegister = require('./router/admin-register-router');
const connectDb = require("./utils/db");
const createClass = require("./router/create-class-router");
const subjectRoute = require('./router/add-subject-router');
const teacherRoute = require('./router/add-teacher-router');
const studentRoute = require('./router/add-student-router');
const noticeRouter = require("./router/notice-router");
const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());


app.use("/api/auth", adminRegister);
app.use("/api/makeclass", createClass);
app.use("/api/dispclass", createClass);
app.use("/api/subject", subjectRoute);
app.use("/api/dispsubject", subjectRoute);
app.use("/api/createteacher", teacherRoute);
app.use("/api/std", studentRoute);
app.use("/api/createnotice", noticeRouter);
app.use("/api/data", noticeRouter);

connectDb().then(() => {
    app.listen(port, () => {
        console.log("Server Started at port",port);     
    });
});