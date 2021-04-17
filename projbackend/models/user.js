var mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
 name: {
     type: String,
     required: true,
     maxlength: 40,
     trim: true
 },
 lastname: {
     type: String,
     required: false,
     maxlength: 40,
     trim: true
 },
 email: {
     type: String,
     trim: true,
     required: true,
     unique: true
 },
 userinfo: {
     type: String,
     trim: truncate
 },
 //ToDo: come back here for password
 password: {
     type: String,
     trim: true,
 },
 salt: String,
 role: {
     type: Number,
     default: 0
 },
 purchases: {
     type: Array,
     default: []
 }
});

module.exports = mongoose.model("User", userSchema )