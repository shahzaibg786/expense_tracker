// this is the file we are going to connect our database

const mongoose = require('mongoose');


//arrow function here connect db
//when ever we make any call mongoose to connect database. it will return a promise, so we are going to use
//async, and when we use async then we use try and catch block and in try block we create our connection.
// mongoose will again return a promise so type await befor mongoose and use .then but instead of it we are 
//going to use mongoURI which we have in global variable and pass it in connect function AND then second parameter we have 
//object with some properties to stop server warnings that mongoose might give us.
//once we connect we want to output just console.log mongo db conneccted and we will have host with connection variable(conn.conncection)
// and doing color like cyan.underline.bold and in catch if connection fail then it will exit.
const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected ${conn.connection.host}`.stripColors.underline.bold);
    } catch (err) {
        console.log(`Error ${err.message}`.red);
        process.exit(1);
    }

}

module.exports = connectDB;