const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get("/test", (req, res) => {
    res.json({msg: "login works"})
})

router.post("/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    User.findOne({'auths.appId': email})
        .then (user => {
            if (!user) {
                return res.status(404).json({msg:"用户不存在"})
            }
            if (user.passWord === password) {
                res.json({msg: "success"})
            } 
            else {
                res.status(400).json({msg: "密码错误"})
            }
        })
})

module.exports = router