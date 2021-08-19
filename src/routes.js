const { Router } = require('express');
const routes = Router();

const usersController = require('./controllers/usersController');
const FormularioController = require('./controllers/formularioController');
const sessionController = require('./controllers/sessionController');

const sessionMiddlware = require('./middleware/auth');

routes.post('/session', sessionController.login);

routes.post('/users', usersController.insert);
routes.get('/users' , usersController.index);
routes.get('/usersid',sessionMiddlware.auth, usersController.getById);


routes.post('/formularios',sessionMiddlware.auth, FormularioController.store);
//routes.get('/formularios/:id', FormularioController.get);

module.exports = routes;