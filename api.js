// this is where we will create all of our routes for our restAPI

const express = require('express');

const router = express.Router();

// we need to get the Employee model from our schema file
const Employee = require('./employees')

            // GET ROUTES
// GET route, get a list of all the employees from the database
router.get('/employees/', function(req, res, next){
    Employee.find({}).then(function(employees){
        res.send(employees);
    });
}); 

// GET route, if we want to find a specific employee in the database
router.get('/employees/:id', function(req, res, next){
    Employee.findById({_id: req.params.id}, req.body).then(function(employee){
            res.send(employee);
    });
});    

// POST route, add a new employee to the database
router.post('/employees', function(req, res, next){
    // create a new instance of a employee record
    Employee.create(req.body).then(function(employee){
        // sends a JSON response  back to the user who requested the information so they have a confirmations that data is in the database
        res.send(employee);
        // if an error is found (i.e. no required name property sent with db data) it will catch it and run the next function
    }).catch(next);
});

// update existing data in the database
router.put('/employees/:id', function(req, res, next){
    // find the employee by the id that the user passes in
    // update employee in database with user provided data found in req.body object parameters
    // a promise is returned (with the employee parameters) that only when the requested id user is found and updated, can the function fire
    Employee.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        // refind the new employee just updated and send that 
        Employee.findOne({_id: req.params.id}).then(function(employee){
        res.send(employee);
        });
    });
});

// delete an employee from the database
router.delete('/employees/:id', function(req, res, next){
    // using this mongoose method it will find the specified id (i.e. req.params.id) and return a promise (.then) that will return to us the removed ID (which we can use as a parameter) and fire a function only once the id is found and removed. 
    Employee.findByIdAndRemove({_id: req.params.id}).then(function(employee){
        // send back to the user the ID (employee) that has been removed
        res.send("HEllo there" + employee);
    });
});


module.exports = router;
