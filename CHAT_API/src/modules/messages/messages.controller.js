//si lo exportamos como objeto podemos acceder a sus propiedad
const Message = require('./message.model');
const ObjectId = require('mongodb').ObjectId;
const messageController = {

    getAll: (req, res) => {

        const message = new Message();
        message.getAll().then((results) => {
            res.send(results);
        });
    },
    getById: (req, res) =>{       
        var id = new ObjectId(req.params.id);
        const message = new Message();
        message.getById(id).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(404); //not found
            }
        });
    },
    create: (req, res)=>{
        const message = new Message();
        message.create(req.body).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(400);
            }
        });
    },
    update: (req, res)=>{
        var id = new ObjectId(req.params.id);
        const message = new Message();
        console.log(id);
        console.log(req.body);
        message.update(id, req.body).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(404); //not found
            }
        });
    },
    delete: (req, res)=>{
        var id = new ObjectId(req.params.id);
        const message = new Message();
        message.delete(id).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(404); //not found
            }
        });
    }
};

module.exports = messageController;