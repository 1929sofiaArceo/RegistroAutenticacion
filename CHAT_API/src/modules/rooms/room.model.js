const res = require('express/lib/response');
const Database = require('../../core/database');
class Room {
    collection;
    constructor(){
        //set collection
        this.collection = Database.collection('rooms');
    }

    getAll(){
        return new Promise((success, reject) =>{
            this.collection.find().toArray((err, results) =>{
                if(err) reject(err);
                else success(results);
            });
        })
    }
    getById(idParam){
        return new Promise((success, reject) =>{
            this.collection.find({_id: idParam}).toArray((err, result) =>{
                if(err) reject(err);
                else success(result);
            });
        })
    }
    create(body){
        return new Promise((success, reject) =>{
            try{
                this.collection.insertOne(body)
                success('room succesfully added');
            }catch(e){
                reject(e)
            }
        })
    }
    update(idParam, jsonBody){
        return new Promise((success, reject) =>{
            try{
                this.collection.updateOne({_id: idParam}, { $set: jsonBody}, {upsert: true})
                success('room with id '+idParam+' was succesfully updated');
            }catch(e){
                reject(e);
            }
        })
    }
    delete(idParam){
        return new Promise((success, reject) =>{
            try{
                this.collection.remove({_id: idParam});
                success('room succesfully deleted!');
            }catch(e){
                reject(e)
            }
        })
    }
}

//nos conviene que sea clase por la herencia
module.exports = Room;