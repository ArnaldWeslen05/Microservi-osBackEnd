const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/eventos', (req,res)=>{
    const evento = req.body;
    //envia o evento para o microserviço de lembrete
    axios.post('http://localhost:4000/eventos', evento);
    //envia o evento para o microservio de observações
    axios.post('http://localhost:5000/eventos', evento)
    res.send({ msg: 'ok'});
});

app.listen(10000, () => {
    console.log('Barramento de eventos .Porta 10000.');
});