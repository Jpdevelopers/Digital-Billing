// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var billsData = require('./billSchema.js');
var router = express.Router();

mongoose.Promise = global.Promise;
mongoose.connect('127.0.0.1:27017/digital-billing');

router.route('/getData').post(function(req, res) {
    billsData.findOne({
            "_id": req.body.id
        })
        .exec(function(err, billdata) {
            if (req.body.id === undefined) {
                res.send("An Bill ID must be provided to find the bill");
            } else if (billdata === null) {
                res.send("No Bill found with ID : " + req.body.id);
            } else {
                res.json(billdata);
            }
        });
});

router.route('/create').post(function(req, res) {
    var newBill = billsData(req.body);
    newBill.save(function(err, doc) {
        if (err) {
            res.send("An error has occured at the insertion!" + err);
        } else {
            res.json(doc);
        }
    });
});

router.route('/delete').post(function(req, res) {
    billsData.findOne({
            "_id": req.body.id
        })
        .exec(function(err, billdata) {
            if (req.body.id === undefined) {
                res.send("An Bill ID must be provided to Find and Delete the bill");
            } else if (billdata === null) {
                res.send("No Bill found with ID : " + req.body.id);
            } else {
                billdata.remove(function(err) {
                    if (err)
                        res.send(err);
                    res.send('User successfully deleted!');
                });
            }
        });
});

router.route('/').post(function(req, res) {
    res.json({
        "Usage": "Use one of the Following route with POST",
        "Routes": ["/getData", "/create", "/delete"]
    });
  }).get(function(req, res) {
    res.json({
        "Usage": "Use one of the Following route with POST",
        "Routes": ["/getData", "/create", "/delete"]
    });
});

module.exports = router;
