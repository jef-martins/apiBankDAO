const express = require('express');
const app = express();
// const res = require('express/lib/response');
const http = require('http');
const {adicionar, apagar, editar, selecionar} = require('./servico');
var cors = require('cors')
const bodyParser = require('body-parser');
const {deletar, cadastrar, listar, atualizar} = require('./servico-users')
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const servidor  = http.createServer();

app.listen(3000, function() {
    console.log('server')
});



app.get('/dados', function (req, res) {
    const result = selecionar(req.params)
    .then((x)=>{
        
        res.send(x);
    })
    .catch((err)=>{
    })
    
});

app.post('/dados', function (req, res) {
    const result = adicionar(req.body)
    .then((x)=>{
        res.send(x);
    })
    .catch((err)=>{
    })
    
});

app.delete('/dados/:id', function (req, res)  {
    console.log(res)
    const result = apagar(res.req.params)
    .then((x)=>{
        res.send(x);
    })
    .catch((err)=>{
    })
});

app.put('/dados/:id', function (req, res)  {

    const result = editar(res.req.body)
    .then((x)=>{
        res.send(x);
    })
    .catch((err)=>{
        console.log(err);
    })
});



app.get('/users', function (req, res)  {

    const result = listar(res.req.body)
    .then((x)=>{
        res.send(x);
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.post('/users', function (req, res) {
    console.log(req)
    const result = cadastrar(req.body)
    .then((x)=>{
        res.send(x);
    })
    .catch((err)=>{
    })
    
});

app.delete('/users/:id', function (req, res)  {
    const result = deletar(res.req.params)
    .then((x)=>{
        res.send(x);
    })
    .catch((err)=>{
    })
});

app.put('/users/:id', function (req, res)  {
    const result = atualizar(res.req.body)
    .then((x)=>{
        res.send(x);
    })
    .catch((err)=>{
        console.log(err);
    })
});