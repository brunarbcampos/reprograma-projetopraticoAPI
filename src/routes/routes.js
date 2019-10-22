const express = require('express')
const router = express.Router()
const controller = require('../controller/tarefaController')

router.get('/', controller.get)
/*router.get('/', function(request, response){
    response.status(200).send(alunas)
}) */ //tiramos pq o controller puxa isso agora
router.get('/:id', controller.getById)
router.get ("/:id/tarefa", controller.getTarefa)

module.exports = router
