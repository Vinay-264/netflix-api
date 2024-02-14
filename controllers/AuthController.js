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
    
    // Return only the userId instead of generating a custom token
    res.status(200).json({ message: 'Login successful', userId });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  register,
  login
};
