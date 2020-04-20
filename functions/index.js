const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
exports.users = functions.https.onRequest((req, res) => {
  const ref = admin.database().ref('users');
  ref.once("value", function(data) {
    res.send(data);
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
