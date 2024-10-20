const express = require('express');
const app = express();
const port = 3500;
const cors = require('cors');
const adminRegister = require('./router/admin-register-router');
const connectDb = require("./utils/db");
const createClass = require("./router/create-class-router");

const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());


app.use("/api/auth", adminRegister);
app.use("/api/class", createClass);

connectDb().then(() => {
    app.listen(port, () => {
        console.log("Server Started at port",port);     
    });
});