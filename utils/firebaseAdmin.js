/// firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require('../utils/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://netflixbackend-ca5f2-default-rtdb.firebaseio.com/" // Replace with your Firebase project's database URL
});

module.exports = admin;
