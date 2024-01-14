const express = require("express");
const {registeruser , logoutuser,loginuser} = require("../controllers/UserController");

const router  = express.Router();

router.post("/register" ,registeruser);

router.post("/login" ,loginuser );

router.delete("/logout", logoutuser)

// router.get("/current" ,privateuser);


module.exports = router;