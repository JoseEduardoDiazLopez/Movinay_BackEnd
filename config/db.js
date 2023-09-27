const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });
const URL = process.env.DB_MONGO;
const conectarDB = async()=>{
    try{
        await mongoose.connect(URL,{
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        console.log('La base datos se ha conectado.');
    } catch(error){
        console.log(error);
        process.exit(1); // Se detiene la aplicacion
    }
   
}
module.exports = conectarDB
