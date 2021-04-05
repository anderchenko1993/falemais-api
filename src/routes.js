const express = require('express');
const routes = express.Router();

const planoController = require('./controllers/PlanoController');
const tarifaController = require('./controllers/TarifaController');

routes.get('/planos', planoController.index);
routes.post('/tarifas/calculo', tarifaController.calculo);

module.exports = routes;

