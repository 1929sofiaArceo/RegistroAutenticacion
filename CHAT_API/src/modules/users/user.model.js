const res = require('express/lib/response');
const Database = require('../../core/database');
const jwt = require('jsonwebtoken');

class User {
    collection;
    constructor(){
        //set collection
        this.collection = Database.collection('users');
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
    signInUser(emailParam, passwParam){
        return new Promise((success, reject) =>{
            this.collection.findOne({email: emailParam, password: passwParam}, function(err, result){
                if(err) reject(err);
                else{
                    const token = jwt.sign({email: emailParam, password: passwParam}, process.env.TOKEN, {expiresIn: 60 * 60});
                    success(token);
                }
            })
        })
    }
    create(body){
        return new Promise((success, reject) =>{
            try{
                this.collection.insertOne(body)
                success('User succesfully added');
            }catch(e){
                reject(e)
            }
        })
    }
    update(idParam, jsonBody){
        return new Promise((success, reject) =>{
            try{
                this.collection.updateOne({_id: idParam}, { $set: jsonBody}, {upsert: true})
                success('User with id '+idParam+' was succesfully updated');
            }catch(e){
                reject(e);
            }
        })
    }
    delete(idParam){
        return new Promise((success, reject) =>{
            try{
                this.collection.remove({_id: idParam});
                success('User succesfully deleted!');
            }catch(e){
                reject(e)
            }
        })
    }
}

//nos conviene que sea clase por la herencia
module.exports = User;