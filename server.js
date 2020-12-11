const path = require('path');
const express = require ('express');
const dotenv = require ('dotenv');
const colors = require ('colors');
const morgan = require ('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });
// jsut simply call the function here.
connectDB();
//importing routers
const transactions = require('./routes/transactions')


const app = express();

//middleware
app.use(express.json());

//applying morgan
// if(process.env.NODE_ENV === 'developemnt'){
//     app.use(morgan('dev'));
// }
//mount the router down here.

app.use('/api/v1/transactions', transactions);
//here we will check for production then we want set static folder and then we have route and it will hit index.html
// file in build. And this is the entry point of our react application
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    //app.get any thing and send specific file index.html and path.resolve will use for it. so we will put __dirname
    //in client folder into the build folder and then the index.html
    app.get('*',(req, res) => res.sendFile(path.resolve(__dirname, 'client','build')))
}

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));