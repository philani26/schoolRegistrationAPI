const mongoose = require('mongoose')

const connectDB = async () =>{
    const conn = await mongoose.connect('mongodb://localhost/devcamper', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    })
    console.log(`MangoDB connected ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;