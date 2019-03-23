const express = require('express');

const Employee = require('./employee');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

// setup express app
const app = express();

// connect to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/employee', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// intialize routes
app.use('/api', require('./api'));

// app.post("/employees", (req, res) => {
//     var myData = new Employee(req.body);
//     myData.save()
//         .then(item => {
//             res.send("item saved to the database");
//         })
//         .catch(err => {
//             res.status(400).send('unable to save to the database');
//         });
// });

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });


// ERROR handling
app.use(function(err, req, res, next) {
    // log the error to the console
    console.log(err);
    // send the error message and status (i.e. 422) back to the user who made the request so they know there is an issue
    res.status(422).send({error: err.message});
});

// set up to listen for requests
app.listen(process.env.PORT || 4000, function() {
    console.log('Now listening for requests');
});