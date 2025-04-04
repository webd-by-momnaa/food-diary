const express = require("express")
const router = express.Router()

const {saveData,login} = require("../controllers/authController")

router.post("/post",saveData);
router.post("/log",login);

module.exports = router