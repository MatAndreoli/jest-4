const Factory = require('../src/factory');
const MongoCliente = require('../src/mongo-cliente');
const Repositorio = require('../src/repositorio');

const criarConexaoSpy = jest
  .spyOn(MongoCliente, 'criarConexao')
  .mockImplementation(() => {
    return new Promise((resolve, rej) => {
      resolve('text');
    });
  });

jest.mock('../src/repositorio.js');

let result;
describe('Given Factory is started', () => {
  describe('When method criarRepositorio is called', () => {
    beforeEach(() => {
      Repositorio.mockClear();
      result = Factory.criarRepositorio();
    });

    it('Then call criarConexao', () => {
      expect(criarConexaoSpy).toHaveBeenCalled();
    });

    it('Then return a Promise ', () => {
      expect(result).toEqual(Promise.resolve({}));
    });

    it('Then call Repositorio', () => {
      expect(Repositorio).toHaveBeenCalled();
    });
  });
});
