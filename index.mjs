import express from 'express';
import bodyParser from 'body-parser';
// import {authRoute} from './routes/auth.mjs';
import { SignUp } from './controller/SignUp.mjs';

const su = new SignUp();
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

app.post('/sign-up', (req, res,next)=> {
    su.postSign(req,res,next)
} );

app.get('/' , (req, res, next) => {
    res.json({
        message: 'Welcome to populate API'
    })
});;

const port = 3003;
app.listen(port, () => {
    console.log('Application serving from port ' + port)
})