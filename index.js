const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require("cors");

//Creamos el servidor
const app = express();
//Conectamos a la base datos
conectarDB();
app.use(cors())
app.use(express.json());


app.listen(4000, ()=> {
    console.log('El servidor está corriendo')
})

app.get('/prueba', (req,res) =>{
    res.send('API MONGO');
})

app.post('/citas', async (req, res) => {
    try {
      const nuevaCita = new Cita(req.body);
      const citaGuardada = await nuevaCita.save();
      res.json(citaGuardada);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo crear la cita' });
    }
  });