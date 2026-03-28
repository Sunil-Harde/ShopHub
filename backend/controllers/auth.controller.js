const User = require("../models/User.js")
const mongoose = require("mongoose")

const registerUser = async (req, res) => {

    console.log(req.body)
    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.status(200).json({
                message: "all fields required"
            })
        }

        const addUser = await User.create({
            name,
            password,
            email
        })

        res.status(201).json({
            message: "user create successfully",
            user: addUser
        })

    }

    catch (err) {
        res.status(500).json({
            message: "failed",
            err: err.message
        })
    }


}



module.exports = { registerUser }
