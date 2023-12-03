const { response } = require('express')
const express = require('express')
const app = express()
const port = 8080
const RepositorioPersonas = require("./repositorio-personas.js")


app.get('/personasDao', (require, response) => {
    repo = new RepositorioPersonas
    const personas = repo.getAll()
    return personas;
})

app.get('/', (require, response) => {
    response.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})