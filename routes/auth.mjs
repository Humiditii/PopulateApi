import express from 'express';
import SignUpController from '../controller/SignUp.mjs'

const router = express.Router();

const su = new SignUpController()
router.post('/sign-up', su.postSign(req,res,next));


export default router;