const express = require("express");
const {registeruser , privateuser,loginuser} = require("../controllers/UserController");

const router  = express.Router();

router.post("/register" ,registeruser);


router.post("/login" ,loginuser );


// router.get("/current" ,privateuser);


module.exports = router;