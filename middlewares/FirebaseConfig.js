const admin = require('firebase-admin');

const serviceAccount = require('./ServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://netflixusers-fbefe.firebaseio.com'
});

module.exports = admin;
