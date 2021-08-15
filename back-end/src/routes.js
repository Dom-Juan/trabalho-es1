const { Router } = require('express');
const bcrypt = require('bcrypt');
const routes = Router();

const usersController = require('./controllers/usersController');
const formularioController = require('./controllers/formularioController');

const users = []

routes.get('/', (req, res) => {
  return res.json({ msg: 'Hello World' });
});

// routes.post('/login', (req, res) => {
//   return res.json({ msg: 'Hello World' });
// });

// routes.get('/users', (req, res) => {
//   res.json(users);
// })

routes.get('/users' , usersController.index);
routes.get('/formularios' , formularioController.index);


routes.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).send('Usuário Cadastrado com sucesso!')
  } catch (er) {
    res.status(500).send(er)
  }
})

routes.post('/users/login', async (req, res) => {
  const user = users.find(user => user.name === req.body.name)
  if (user == null) {
    return res.status(400).send('Não foi possível encontrar o usuário')
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

module.exports = routes;