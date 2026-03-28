const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        unique: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    },

    role: {
        type: String,
        default: "user",
        enum: ["admin", "user", "masterAdmin"]
    },

    createAt: {
        type: Date,
        default: Date.now()
    }


})


const User = mongoose.model("User", userSchema)


module.exports = User   