//importar dependencia
const express = require('express');
//biblioteca de arquivos
const path = require('path')

const pages = require('./pages.js')

//iniciando o express
const server = express();

server

    //utilizar body do req
    .use(express.urlencoded({ extented: true}))

    //utilizando arquivos estáticos dentro da pasta public
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //criar uma rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//iniciar servidor
server.listen(5500)
