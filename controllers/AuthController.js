// controllers/authController.js
const AuthModel = require('../models/authmodel');
const firebaseAdmin=require('../utils/firebaseAdmin')

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userId = await AuthModel.registerUser(email, password);
    res.status(200).send({ userId });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const userId = await AuthModel.loginUser(email, password);
      
      // Generate custom token for the authenticated user
      const customToken = await firebaseAdmin.auth().createCustomToken(userId);
  
      // Return the custom token as part of the response
      res.status(200).json({ message: 'Login successful', customToken });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

module.exports = {
  register,
  login
};
