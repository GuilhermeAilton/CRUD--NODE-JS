const express = require("express")
const app = express()
const bodyparser = require('body-parser')
const connection = require('./database/database');
const categoriesController = require('./categories/categoriesControllers')
const articleController= require('./articles/articleController')


//MODEL DO DO BANCO DE DADOS
const Article = require("./articles/article")
const Category = require("./categories/categories")

//CONEXÃO COM BANCO DE DADOS
connection
.authenticate()
.then(() => {
    console.log('CONEXÃO REALIZADA COM SUCESSO')
}).catch((error) =>{
    console.log(error)
})

//BODY PARSER - REQ FORMULARIOS 
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())

app.use('/', categoriesController);

app.use('/', articleController);

// ferramenta de visualização
app.set('view engine', 'ejs')

//arquivos estaticos : CSS, JAVASCRIPT

app.use(express.static('public'));



app.get('/', (req,res) =>{
    res.render('index')
})


app.listen(8080,() => {
    console.log('Sevidor está rodando')
})