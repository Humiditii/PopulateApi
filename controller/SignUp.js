import fs from 'fs';
import path from 'path';
import {validateEmail} from '../middleware/validate'


const p = path.join(
  path.dirname(process.mainModule.filename),
  'model',
  'data.json'
);


const loadFileData = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };

export class SignUp {
    constructor(){
        this.postSign;
    }

    postSign(req, res, next){
        const UserData = {
            id: null,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        }
        loadFileData( User => {
            const findUser = User.find( user => user.email === UserData.email);
            
            const ValidateMail = new validateEmail();
            const passValidate = ValidateMail.mail(UserData.email)
            if(passValidate.statusCode == 400){
                return res.status(400).json({
                    message: passValidate.message
                })
            } else{
                if(!findUser){
                    UserData.id = User.length + 1;
                    User.push(UserData);
                        fs.writeFile(p, JSON.stringify(User), err => {
                            return res.status(201).json({
                                message: UserData.firstname + ' signed up successfully'
                            })
                    
                        });
                }else{
                    return res.status(401).json({
                        message: 'Email exixted'
                    })
                }
            }
            
        })

    }
}