const express = require('express');
const router = express.Router();
const Cita = require('../models/Cita'); 

//(POST)
router.post('/citas', async (req, res) => {
  try {
    const nuevaCita = new Cita(req.body);
    const citaGuardada = await nuevaCita.save();
    res.json(citaGuardada);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la cita' });
  }
});

module.exports = router;