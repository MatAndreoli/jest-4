const Factory = require('./factory');

module.exports = async () => {
    try {
        const repositorio = await Factory.criarRepositorio();
        const files = repositorio.findAllFiles();
        return files;
    } catch( error ) {
        console.error('FAILED', error);
    }
};
