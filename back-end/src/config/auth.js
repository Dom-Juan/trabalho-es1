
require('dotenv').config();

module.exports = {
  secret:process.env.SECRET, //md5.com
  expiresIn:'7d',
}