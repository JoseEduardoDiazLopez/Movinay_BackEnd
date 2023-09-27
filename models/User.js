const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    nombre :{type: String},
    password : {type: String},
    RFC : {type: String},
    
});