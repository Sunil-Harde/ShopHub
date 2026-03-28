const { registerUser } = require("../controllers/auth.controller")
const express = require("express")

const routes = express.Router()

routes.post("/register", registerUser)

module.exports = routes

