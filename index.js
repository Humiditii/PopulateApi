const express = require('express');
const bodyParser = require('body-parser');
const welcomeRoutes = require('./routes/welcome');

const port = 3333;

const app = express();


// for form data
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(bodyParser.json());

//Allowing cros requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', welcomeRoutes);


app.listen(port, () => {
    console.log('Application serving from port ' + port)
})