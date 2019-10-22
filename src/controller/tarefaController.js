const tarefa = require("../model/tarefa.json")

exports.get = (request, response) => {
    console.log(request.url)
    response.status(200).send(tarefa)
}

exports.getById = (request, response) => {
    const id = request.params.id

    response.status(200).send(tarefa.find(tarefa => tarefa.id == id))
}
