const errorResponse = require('../utils/errorResponse');

const errorHandle = (err,req, res, next) =>{
    let error = {...err};
    error.message = err.message;
    let message = '';

    console.log(err)
    

    if(err.name === 'CastError'){
        const message = `Bootcamp not found with a id ${err.value}`
        error = new errorResponse(message, 404)    
    }
    if(err.code === 11000){
        message ='Duplicatefield';
        error = new errorResponse(message, 404)
    }

    if(err.name === 'ValidationError'){
        message = Object.values(err.errors).map(val => val.message);
        error = new errorResponse(message, 404);
    }
    res.status(error.statusCode || 500).json({success: false, error: error.message || 'Server Error'})

} 
module.exports = errorHandle
