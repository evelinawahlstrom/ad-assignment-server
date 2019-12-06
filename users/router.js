const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/register", (req, res, next) => {
    console.log("A req on /register")
    const fullName = req.body.fullName
    const email = req.body.email
    const password = req.body.password
    if (!fullName || !email || !password) {
        res.status(409).send({
            message: "Please supply a fullname and a valid email + password"
        })
    } else {
        User.create({
            fullName: fullName,
            email: email,
            password: bcrypt.hashSync(req.body.password, 10)
        })
            .then(user => {
                res.status(201)
                res.send({ status: "OK" })
            .catch(console.error)
            })
    }
})
module.exports = router;