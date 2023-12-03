module.exports = class EstacionamientoDao {
    constructor (){
        this.collection = []
    }

    add(newObject){
        this.collection.push(newObject)

        
    }

    get(id = null){

        if (!id) {
            return this.collection
        }

        const myObject = this.collection.find(element => element.dni === id)
        return myObject; 


    }
    
    edit(id, update = {}){
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
            console.log("COLLECTION está vacío");
        }
    }

    reset(){
        this.collection = []
    }

    getAll(){
        return this.collection
    }

}
