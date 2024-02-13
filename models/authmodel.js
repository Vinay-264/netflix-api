// models/user.js
const firebaseAdmin = require('../utils/firebaseAdmin');

const registerUser = async (email, password) => {
  try {
    const userRecord = await firebaseAdmin.auth().createUser({
      email: email,
      password: password,
      
    });
    return 'Registration successful';
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const userRecord = await firebaseAdmin.auth().getUserByEmail(email);
    return userRecord.uid;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registerUser,
  loginUser
};
