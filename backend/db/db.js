const mongoose = require("mongoose")

const connect = async () => {

    await mongoose.connect("mongodb://localhost:27017/shophub")
        .then(res => console.log("Db Started"))
        .catch(err => console.log(err))

}


module.exports = connect