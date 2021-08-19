const app = require ('./app');
const cors = require ('cors');

app.use(cors({
  origin: 'https://localhost:3333'
}));  
// app.listen(3333, () => {
//   console.log('Porta de acesso 3333');
// });

app.listen(3333, () => {
  console.log('Porta de acesso 3333');
});

