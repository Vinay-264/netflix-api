// middleware/authenticateUser.js
const firebaseAdmin = require('../utils/firebaseAdmin');

const authenticateUser = async (req, res, next) => {
  const userId = req.headers.authorization; // Extract user ID from Authorization header

  try {
    // Verify the user's authentication status using the provided user ID
    const userRecord = await firebaseAdmin.auth().getUser(userId);
    if (userRecord) {
      // User is authenticated, proceed to the next middleware or route handler
      next();
    } else {
      // User is not authenticated, send unauthorized status
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    // Error occurred while verifying authentication status, send detailed error response
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

module.exports = authenticateUser;
