const express = require ('express');
const dotenv = require ('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/errorhandler');
const connectDB = require('./config/db')


dotenv.config({path: './config/config.env'});

// /Router files
const bootcamps = require('./routers/bootcamp')

//connect DB
connectDB()

const app = express();

app.use(express.json())
// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
// app.use(logger);

//Mount routers
app.use('/api/v1/bootcamp', bootcamps)
app.use(errorHandler);


const PORT = process.env.PORT || 3000 ;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow))

process.on('unhandledRejection', (err, promise) =>{
    console.log(`Error: ${err.message}`.red.bold);
    server.close(()=> process.exit(1))
})
  