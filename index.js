// Constantes

const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;


//Creamos el servidor
const app = express();
//Conectamos a la base datos
conectarDB();
app.use(cors())
app.use(express.json());

app.get('/prueba', (req,res) =>{
    res.send('API MONGO');
})

app.use('/api/citas', require('./routes/cita')); // Manda a llamar la API a MongoDB <get,post>
app.put('/api/citas/:id', (req, res) => {console.log('req.params.id', req.params.id);});

app.use('/api/denuncias', require('./routes/denuncia')); // Manda a llamar la API a MongoDB <get,post>
app.put('/api/denuncias/:id', (req, res) => {console.log('req.params.id', req.params.id);});

app.use('/api/autenticacion', require('./routes/usuario'));
//app.put('/api/autenticacion/:id', (req, res) => {console.log('req.params.id', req.params.id);}); 

app.use('/api/payment', require('./routes/pagos.js'));
app.put('/api/payment/:id', (req, res) => {console.log('req.params.id', req.params.id);});

app.use('/api/tramites', require('./routes/tramite.js'));
app.put('/api/tramites/:id', (req, res) => {console.log('req.params.id', req.params.id);});

app.listen(PORT, () => {console.log(`API REST MONGO | El servidor está encendido http://localhost:${PORT}`);});