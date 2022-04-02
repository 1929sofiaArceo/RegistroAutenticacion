//modulo especifico para el manejo de la base de datos
//Select db
//Select collection
const MongoClient = require('mongodb').MongoClient;
const env = require("dotenv").config();
const mongoUrl = process.env.MONGO_URL;
let database; //para poder usarla en todo el archivo
module.exports = {
    connect: () => {
        return new Promise((resolve, reject) =>{
            MongoClient.connect(mongoUrl, { useUnifiedTopology: true}, (err, client) =>{
                if(err){
                    //something failed
                    console.log("something failed", err);
                    reject();
                }else{
                    //connect Succesfully
                    database = client.db();
                    console.log("Connected Succesfully");
                    resolve();
                }
            });
        }) 
    },
    collection: (collectionName) =>{
        return database.collection(collectionName);
    }
}