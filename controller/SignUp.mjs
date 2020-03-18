export class SignUp {
    constructor(){
        this.postSign;
    }

    postSign(req, res, next){
        const UserData = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        }

        res.status(201).json({
            message: UserData
        })
    }
}