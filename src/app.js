const express = require('express')
const app = express()

//rotas
const tarefa = require('./routes/routes')

app.use(function(require, response,next){
    response.header("Access-Control-Allow-Origin", "*")
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/tarefa", tarefa)

module.exports = app
