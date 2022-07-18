const mongoose  = require("mongoose");

var Employee =  mongoose.model('Employee' , {
name: String,
fatherName: String,
city: String,
mobile: String


})

module.exports = Employee;