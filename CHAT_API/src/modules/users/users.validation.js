//si lo exportamos como objeto podemos acceder a sus propiedad
const User = require('./user.model');

const userValidation = {
    signIn: (req, res) =>{
        console.log(req.body.email, req.body.password);
        // if(req.body.email==undefined || req.body.password==undefined){
        //     res.status(400).send('Bad Request'); //Campos incompletos
        // }
        const user = new User();
        user.signInUser(req.body.email, req.body.password).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.status(401).send('Unauthorized'); //Unauthorized
            }
        });
    }
};

module.exports = userValidation;