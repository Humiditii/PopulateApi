import express from 'express';
import {SignUp} from '../controller/SignUp';

const router = express.Router();

// const su = new SignUp;

router.post('/sign-up',new SignUp().postSign);


export default router;