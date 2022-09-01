const router = require("express").Router();
const User = require("../models/User");

// GEGISTER
router.post("/register", async (req, res)=> {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    console.log(newUser)

    try{
        const savedUser = await newUser.save(); 
        console.log(savedUser);
    }catch(err) {
        console.log(err);
    }
});



module.exports = router