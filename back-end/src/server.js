const app = require ('./app');
const connection = require('./config/connection')

console.log(connection)

// connection.connect((err) => {
//   if(!err){
//     console.log("Conectado");
//   }else{
//     console.log("Desconectado");
//   }
// })

app.listen(3333, () => {
  console.log('Porta de acesso 3333');
});

