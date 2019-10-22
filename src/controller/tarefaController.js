const tarefa = require("../model/tarefa.json")

exports.get = (request, response) => {
    console.log(request.url)
    response.status(200).send(tarefa)
}

exports.getById = (request, response) => {
    const id = request.params.id
    //console.log(id)
        if(id > 4 || id <= 0){
            response.redirect(301, "http://pudim.com.br/")
        }
    const tarefa = tarefa.find(tarefa => tarefa.id == id)
    /*response.status(200).send(tarefa.find(aluna => aluna.id == id))  //mudou porque if*/

    
    if(id > 4 || id <= 0){
        response.send('404 ID N0T F0UND :(')
    }

    response.status(200).send(tarefa)
}