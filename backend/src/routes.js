const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

/*  
*   TIPOS DE PARÂMETROS:
 * Query Params: Parâmetros nomeados enviados na rota após "?". (Ex.: .get('/users?name=Pedro'))
 * ... Ex.: .get('/users?page=12&name=Pedro') ...
 * 
 * Route Params: Parâmetros utilizados para identificar recursos após ":" (Ex.: .get(/users:id))
*/

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;
