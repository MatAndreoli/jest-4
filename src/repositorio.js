module.exports = class MongoRepositorio {

    constructor(MongoCliente) {
         this.cliente = MongoCliente;
    }
    
    async findAllFiles() {
        const files = await this.cliente.collection('files').find({}).toArray();
        return files;
    }
}

