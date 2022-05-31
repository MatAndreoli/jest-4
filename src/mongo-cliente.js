global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const mongodb = require('mongodb');

module.exports = class MongoCliente {
    constructor() {}

    /**
     * retorna cliente do mongo
     * @returns {Promise<mongodb.Db>}
    */
    static criarConexao() {
        return new Promise((resolve,reject) => {
            mongodb.MongoClient.connect(
                'mongodb://localhost:27017/', 
                { useNewUrlParser: true },
                (err, client) => {
                    if(err) {
                        reject(err);
                    }
                    const db = client.db('test');
                    resolve(db)
                }
            );
        });
    }
};
