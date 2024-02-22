


function handleInvalidJson(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      return res.status(400).send({ message: 'Invalid JSON' });
    }
    next(err);
  }
  
  // Middleware function to handle unauthorized errors
  function handleUnauthorized(err, req, res, next) {
    if (err.status === 401) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    next(err);
  }
  
  // Middleware function to handle not found errors
  function handleNotFound(req, res, next) {
    // const err = new Error('Not Found');
    // err.status = 404;
    if (err.status == 404) {
      return res.status(404).send({ message: err.message ? err.message : 'Not Found' })
    }
    next(err);
  }
  
  // Middleware function to handle all other errors
  function handleAllOtherErrors(err, req, res, next) {
    res.status(err.status || 500).send({ message: err.message ? err.message : 'Internal Server Error' });
  }


  module.exports = {
    handleInvalidJson,
    handleUnauthorized,
    handleNotFound,
    handleAllOtherErrors
  }; 