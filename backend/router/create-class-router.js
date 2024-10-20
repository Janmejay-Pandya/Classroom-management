const express = require('express');
const router = express.Router();
const createClass = require('../controllers/create-class-controller');
router.route("/createclass").post(createClass.create_class);
module.exports = router;