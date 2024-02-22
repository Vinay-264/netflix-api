const rateLimit = require('express-rate-limit');
const { MAX_API_PER_TIME_FRAME, TIME_FRAME_PER_IP } = require('../utils/constants');

const limiter = rateLimit({
  windowMs: TIME_FRAME_PER_IP, // 15 minutes
  max: MAX_API_PER_TIME_FRAME, // Limit each IP to 100 requests per windowMs
  message: `Too many requests from this IP, we are allowing max:${MAX_API_PER_TIME_FRAME} in time frame: ${TIME_FRAME_PER_IP} please try again later.`
});
// Define rate limiting options
module.exports = {
  limiter
}

