const express = require('express');
const router = express.Router();
const createClass = require('../controllers/create-class-controller');

router.route("/createclass").post(createClass.create_class);
router.route("/showclass").get(createClass.getClass);

module.exports = router;