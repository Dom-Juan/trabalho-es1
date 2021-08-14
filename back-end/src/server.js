const app = require ('./app');
const mysql = require('mysql');
const db = require('./config/database')

console.log(db.host);
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "es1",
  multipleStatements: true
})

mysqlConnection.connect((err) => {
  if(!err){
    console.log("Conectado");
  }else{
    console.log("Desconectado");
  }
})

app.listen(3333, () => {
  console.log('Porta de acesso 3333');
});

