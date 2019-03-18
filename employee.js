const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the employee schema
const employeeSchema = new Schema({
    name: {
        type: String
    },
    id: {
        type: String,
        required:[true, 'ID field is required']
    },
    timeIn: {
        type: Number
    },
    timeOut: {
        type: Number
    }
});


const Employee = mongoose.model('employee', employeeSchema);

// export our model so it can be used in other files
module.exports = Employee;

