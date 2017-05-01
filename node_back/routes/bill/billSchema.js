// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var billsDataSchema = new Schema({
  price : {type: Number, required: true},
  company_name: {type: String, required: true},
  customer_name: {type: String, required: true},
  change: Number,
  c_phone_no: String,
  v_phone_no: String,
  dateTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('bills', billsDataSchema);
