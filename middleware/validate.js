export class validateEmail {
    constructor(){
        this.mail;
    }

    mail(email){
        const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(email.length < 6 || pattern.test(email) == false){
            const result = {
                statusCode: 400,
                message: 'Email format not supported'
            }
            return result;
        }else{
            const result = {
                statusCode: 200
            }
            return result;
        }  
    }
}