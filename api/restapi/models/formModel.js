
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    
    firstname: String,
    lastname: String,
    email: String,
    work: String,
    street: String,
    city: String,
    state: String,
    zip: String
},

 {
    timestamps: true
});

// Export the model
module.exports = mongoose.model('Employees', EmployeeSchema);



