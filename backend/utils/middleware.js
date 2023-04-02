const unknownEndpoint =(req,res) => {
    res.status(404).send('error : unknown endpoint')
}

const errorHandler = (err, req, res, next) => {
    // Log the error to the console
    console.error(err.stack);
  
    // Set the response status code
    res.status(500);
  
    // Send an error response to the client
    res.json({
      error: {
        message: err.message,
        status: res.statusCode,
        stack: err.stack,
      }
    });
  }

module.exports ={unknownEndpoint,errorHandler}