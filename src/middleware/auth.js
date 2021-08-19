
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../config/auth');

module.exports = {

  async auth (req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    const [,token] = authHeader.split(' ');

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      req.userID = decoded.id;

      return next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ error: 'Token invalid' });
    }

  }

}