const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


function interceptor(req, res, next){
    const token = req.header('Authorization')?.split(' ')[1];


    if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if(!err) {
            req.user = user;
        }
    });
    }
    next();


}

module.exports = interceptor;