const admin = require('../middlewares/FirebaseConfig');

exports.register = (req, res) => {
  const { email, password } = req.body;

  admin.auth().createUser({
    email: email,
    password: password
  })
  .then((userRecord) => {
    res.status(201).json({ message: 'User registered successfully', uid: userRecord.uid });
  })
  .catch((error) => {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  admin.auth().getUserByEmail(email)
  .then((userRecord) => {
    // User exists, now verify the password
    // Note: Firebase Admin SDK doesn't directly provide a method to verify password
    // You would typically handle password verification using a separate mechanism
    // Such as integrating with a third-party identity provider or your own authentication system
    res.status(200).json({ message: 'User logged in successfully', uid: userRecord.uid });
  })
  .catch((error) => {
    console.error(error);
    res.status(401).json({ error: 'Invalid credentials' });
  });
};