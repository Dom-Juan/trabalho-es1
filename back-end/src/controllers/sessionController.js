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

      const { numero_usp, nome, email, nivel} = user[0];

      return res.json({
        user:{
          numero_usp,
          nome,
          email,
          nivel,
        },
        token: jwt.sign({numero_usp, nivel}, authConfig.secret, {
          expiresIn: authConfig.expiresIn
        })
      })
  }
}

module.exports = new SessionController();