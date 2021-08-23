const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const User = require('../models/usersModel');

class SessionController {
    async login(req, res) {

      const user = await User.getByEmail(req.body.email)

      if(!user){
        return res.status(401).json({ error: 'User not found'});
      }

      if(user[0].senha !== req.body.senha) {
        return res.status(401).json({ error: 'Password does not match'});
      }

<<<<<<< HEAD
      const { numero_usp, nome, email, nivel} = user[0];
=======
      const { numero_usp, nome, email} = user[0];
>>>>>>> 1d260686591a8f2cbc2bea68bde6854e43d6df33

      return res.json({
        user:{
          numero_usp,
          nome,
          email,
          nivel,
        },
<<<<<<< HEAD
        token: jwt.sign({numero_usp, nivel}, authConfig.secret, {
=======
        token: jwt.sign({numero_usp}, authConfig.secret, {
>>>>>>> 1d260686591a8f2cbc2bea68bde6854e43d6df33
          expiresIn: authConfig.expiresIn
        })
      })
  }
}

module.exports = new SessionController();