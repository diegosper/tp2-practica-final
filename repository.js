//Persistencia de objetos de dominio/negocio

class Repository {

    constructor (){
        this.collection = []
    }

    create(newObject){
        this.collection.push(newObject)

        return this
    }

    read(id = null){

        if (!id) {
            return this.collection
        }

        const myObject = this.collection.find(element => element.dni === id)
        return myObject; 


    }
    
    update(id, update = {}){
        let objectFound = this.collection.find(element => element.dni === id)
        console.log(objectFound);
        if (objectFound) {
            objectFound = { ...objectFound, ...update }         
            this.collection = this.collection.map(element => {
                if (element.dni === id) {
                    return objectFound;
                } else {
                    return element
                }
            })
        } else {
            return console.log("Se debe indicar el DNI");;
        }

        
    }
    
    delete(id){
        this.collection = this.collection.filter((element) => {
            return element.dni !== id
        })
    }

    show(){
        if (this.collection.length) {
            console.log(this);
        } else {
            console.log("No se ha encontrado COLLECTION");
        }
    }

    reset(){
        this.collection = []
    }

}


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
console.log(repo);
console.log("elimino objeto A:");
repo.delete(objectA.dni);
console.log("Así me quedó el repo:");
console.log(repo);
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


