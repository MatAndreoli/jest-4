const MongoCliente = require('./mongo-cliente');
const Repositorio = require('./repositorio');

module.exports = class Factory {
    static async criarRepositorio() {
        const conexao = await MongoCliente.criarConexao();
        return new Repositorio(conexao);
    }
};
