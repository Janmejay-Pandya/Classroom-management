const express = require('express');
const router = express.Router();
const adminRegister = require("../controllers/admin-register-controller");
router.route("/AdminRegister").post(adminRegister.admin_register);
router.route("/LoginPageAdmin").post(adminRegister.admin_login);
module.exports = router;
