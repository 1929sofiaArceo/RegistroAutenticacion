//si lo exportamos como objeto podemos acceder a sus propiedad
const Room = require('./room.model');
const ObjectId = require('mongodb').ObjectId;
const roomController = {

    getAll: (req, res) => {

        const room = new Room();
        room.getAll().then((results) => {
            res.send(results);
        });
    },
    getById: (req, res) =>{       
        var id = new ObjectId(req.params.id);
        const room = new Room();
        room.getById(id).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(404); //not found
            }
        });
    },
    create: (req, res)=>{
        const room = new Room();
        room.create(req.body).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(400);
            }
        });
    },
    update: (req, res)=>{
        var id = new ObjectId(req.params.id);
        const room = new Room();
        console.log(id);
        console.log(req.body);
        room.update(id, req.body).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(404); //not found
            }
        });
    },
    delete: (req, res)=>{
        var id = new ObjectId(req.params.id);
        const room = new Room();
        room.delete(id).then((results) => {
            if(results){
                res.send(results);
            }else{
                res.sendStatus(404); //not found
            }
        });
    }
};

module.exports = roomController;