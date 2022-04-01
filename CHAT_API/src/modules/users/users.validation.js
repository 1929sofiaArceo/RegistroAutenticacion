//si lo exportamos como objeto podemos acceder a sus propiedad
const User = require('./user.model');

const userValidation = {
    signIn: (req, res) =>{
        const user = new User();
        user.signInUser(req.body.email, req.body.password).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(401); //Unauthorized
            }
        });
    }
};

module.exports = userValidation;