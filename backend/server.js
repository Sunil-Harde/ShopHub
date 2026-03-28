const express = require('express')
const app = express()
const connect = require("./db/db.js")
const userRouter = require("./router/user.route.js")

const PORT = 5000

connect()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('api is running')
})

app.use("/api/user", userRouter)

app.listen(PORT, () => {
    console.log('server is started at port', PORT)
})