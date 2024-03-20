const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const DoctorSchema = new Schema({
    employeeID:{type: String, required: true},
    password:{type: String, required: true},
  })

const DoctorModel = model('Doctor', DoctorSchema);
module.exports = DoctorModel;