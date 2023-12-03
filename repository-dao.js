const EstacionamientoDao = require("./estacionamiento-dao.js")
module.exports = class Repository {

    constructor(collection = new EstacionamientoDao) {
        this.collection = collection
    }

    create(element) {
        this.collection.add(element)
        return this
    }

    read(id = null) {
        return this.collection.get(id)
    }

    update(id, update = {}) {
        return this.collection.edit(id, update)
    }

    delete(id) {
        this.collection.delete(id)
    }

    show(){
        this.collection.show()
    }

    reset(){
        this.collection.reset()
    }

    getAll(){
        return this.collection.getAll()
    }
}


/*
const repo = new Repository

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

repo.create(objectA);
repo.create(objectB);
repo.show();
console.log("elimino objeto A:");
repo.delete(objectA.dni);
console.log("Así me quedó el repo:");
repo.show();
console.log("Agrego objeto C");
repo.create(objectC);
repo.show();
repo.reset();
repo.show();

//Creacion con builder
console.log("Creación con Builder");
repo.create(objectA)
.create(objectB)
.create(objectC)
.show()

//Update
console.log("XXXX Hago un update");
repo.update(objectC.dni, { email: "martita@lopez.com" });
console.log(repo);
console.log("Objeto de Diego: " + JSON.stringify(repo.read(38305055)));
*/