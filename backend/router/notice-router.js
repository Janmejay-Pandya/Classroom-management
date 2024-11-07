const express = require('express');
const router = express.Router();

const AddNotice = require("../controllers/notice-controller");

router.route("/addnotice").post(AddNotice.addNotice);
router.route("/shownotice").get(AddNotice.getNotice);

module.exports = router;