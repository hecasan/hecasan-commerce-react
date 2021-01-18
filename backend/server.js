import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/produtos', (req, res) => {
  res.send(data.produtos);
});

app.get('/', (req, res) => {
  res.send('Servidor estar funcionando')
});


const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
