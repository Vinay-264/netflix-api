const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


function authenticateToken(req, res, next){
    const token = req.header('Authorization')?.split(' ')[1];


    if(!token){
        return res.status(401).json({ error: 'Unauthorized'});
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if(err) {
            return res.status(403).json({error: 'Invalid token'})
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;