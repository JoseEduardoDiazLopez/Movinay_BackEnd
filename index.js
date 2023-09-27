const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require("cors");
//Creamos el servidor
const app = express();
//Conectamos a la base datos
conectarDB();
app.use(cors())
app.use(express.json());
//Crear las rutas para la base datos
// Definimos ruta principal
app.listen(4000, ()=> {
    console.log('El servidor está corriendo')
})