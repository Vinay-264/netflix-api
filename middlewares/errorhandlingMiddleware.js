


function handleErrors(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      return res.status(400).send({ message: 'Invalid JSON' });
    }
    else if (err.status == 404) {
      return res.status(404).send({ message: err.message ? err.message : 'Not Found' })
    }
    else {
      res.status(err.status || 500).send({ message: err.message ? err.message : 'Internal Server Error' });

    }
    next(err);
  }
  
  


  module.exports = {
    handleErrors
  }; 