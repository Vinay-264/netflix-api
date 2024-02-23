const { redisClient } = require('../utils/redisConfig');

// Middleware to cache data
function cacheMiddleware(req, res, next) {
    const key = req.originalUrl;
    redisClient.get(key, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    });
}

module.exports = {
    cacheMiddleware
}