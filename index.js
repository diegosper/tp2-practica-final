const { response } = require('express')
const express = require('express')
const Repository = require('./repository-dao.js')
const app = express()
const port = 8080


app.get('/personas', (require, response) => {
    respositorioPersonas = new Repository

    const objectA = {
        nombre: "Diego",
        email: "diego.sper@hotmail.com",
        dni: 38305055
    }

    const objectB = {
        nombre: "Laia",
        email: "laieta@gmail.com",
        dni: 2585
    }

    const objectC = {
        nombre: "Kevin",
        email: "elkevoa@gmail.com",
        dni: 18909898
    }

    respositorioPersonas.create(objectA)
        .create(objectB)
        .create(objectC)
    const personas = respositorioPersonas.getAll()
    response.send(personas)
})

app.get('/', (require, response) => {
    response.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})