// Dependencies
var admin = require('firebase-admin');
var express = require('express');
var userData = require('./userSchema.js');
var mongoose = require('mongoose');
var router = express.Router();

// Firebase Authentication
var serviceAccount = require("./digital-billing.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://digital-billing.firebaseio.com"
});

router.route('/available').post(function(req, res) {
      admin.auth().getUser(req.body.id)
        .then(function(userRecord) {
            res.status(200).json({"user-exist": true});
        })
        .catch(function(error) {
            res.status(404).json({"user-exist": false});
        });
});

router.route('/dataByID').post(function(req, res) {
  userData.findOne({
          "_id": req.body.id
      })
      .exec(function(err, userd) {
          if (req.body.id === undefined) {
              res.send("User ID must be provided to find the bill");
          } else if (userd === null) {
              res.send("No User found with ID : " + req.body.id);
          } else {
              res.send(userd);
          }
      });
});

router.route('/billsByID').post(function(req, res) {
  userData.findOne({
          "_id": req.body.id
      })
      .exec(function(err, userd) {
          if (req.body.id === undefined) {
              res.send("User ID must be provided to find the bill");
          } else if (userd === null) {
              res.send("No User found with ID : " + req.body.id);
          } else {
              res.send(userd.bills);
          }
      });
});

router.route('/addBillByUserID').post(function(req, res) {
  var newUser = userData(req.body);
  newUser.save(function(err, doc) {
      if (err) {
          res.send("An error has occured at the insertion!" + err);
      } else {
          res.json(doc);
      }
  });
});

router.route('/').post(function(req, res) {
    res.json({
        "Usage": "Use one of the Following route with POST",
        "Routes": ["/dataByID", "/dataByEmail", "/deleteByID"]
    });
  }).get(function(req, res) {
    res.json({
        "Usage": "Use one of the Following route with POST",
        "Routes": ["/dataByID", "/dataByEmail", "/deleteByID"]
    });
});

module.exports = router;
