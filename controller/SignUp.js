import fs from 'fs';
import path from 'path';


const p = path.join(
  path.dirname(process.mainModule.filename),
  'model',
  'data.json'
);


const getProductsFromFile = cb => {
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
        getProductsFromFile( User => {
            const findUser = User.find( user => user.email === UserData.email);
            const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
            if(UserData.email.length < 6 || pattern.test(UserData.email) == false){
                return res.status(401).json({
                    message: 'Email format not supported'
                })
            } else{
                if(!findUser){
                    UserData.id = User.length + 1;
                    User.push(UserData);
                        fs.writeFile(p, JSON.stringify(User), err => {
                            return res.status(201).json({
                                message: UserData.firstname + 'signed up successfully'
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