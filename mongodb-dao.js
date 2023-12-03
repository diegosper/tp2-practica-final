const { MongoClient, ServerApiVersion } = require('mongodb');


module.exports = class MongoDBDao {
    constructor() {
        const uri = "mongodb+srv://diegosper:Diego2007@cluster0.tpgawor.mongodb.net/?retryWrites=true&w=majority";
        this.client = new MongoClient(uri)
        this.dbName = "Personas"
    }

    async conectar () {
        try {
            await client.connect();
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } catch (e) {
            console.log("No se pudo conectar a MongoDB");
        }

        this.db = this.client.db(this.dbName)
    }

    obtenerTodos(){
        this.db.collection('personas')
    }

}