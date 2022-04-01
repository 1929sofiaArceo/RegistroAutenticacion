//modulo especifico para el manejo de la base de datos
//Select db
//Select collection
const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb+srv://sofiaArceo:190501sofia@cluster0.oyekv.mongodb.net/iteso_2022?retryWrites=true&w=majority';
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