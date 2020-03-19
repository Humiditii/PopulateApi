import express from 'express';
import {SignUp} from '../controller/SignUp';

const router = express.Router();

const su = new SignUp;

router.post('/sign-up',su.postSign);


export default router;