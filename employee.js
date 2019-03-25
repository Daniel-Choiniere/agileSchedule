const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the employee schema
const employeeSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    hourlyPayRate: {
        type: Number
    },
    timeIn: {
        type: String,
    },
    timeOut: {
        type: String
    }
});


const Employee = mongoose.model('employee', employeeSchema);

// export our model so it can be used in other files
module.exports = Employee;

