const MongoDBDao = require("./mongodb-dao.js")

module.exports = class RepositorioPersonas {
    constructor(){
        this.almacen = new MongoDBDao
        this.almacen.conectar()
    }

    getAll(){
        return this.almacen.obtenerTodos()
    }
}