// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var userDataSchema = new Schema({
  age: Number,
  customer_name: {type: String, required: true},
  c_phone_no: {type: String, unique: true, required: true},
  bills: Array
});

module.exports = mongoose.model('users', userDataSchema);
