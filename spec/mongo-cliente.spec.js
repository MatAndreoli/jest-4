const mongoCliente = require('../src/mongo-cliente');
const mongodb = require('mongodb');

jest.mock('mongodb', () => ({
  MongoClient: {
    connect: jest.fn(),
  },
}));

let result;
describe('Given MongoCliente is started', () => {
  describe('When method criarConexao is called', () => {
    beforeEach(() => {
      mongodb.MongoClient.connect
        .mockResolvedValueOnce('first call')
        .mockRejectedValueOnce(new Error('Async error message'));
      result = mongoCliente.criarConexao();
    });

    it('Then call connect', () => {
      expect(mongodb.MongoClient.connect).toHaveBeenCalledWith(
        'mongodb://localhost:27017/',
        { useNewUrlParser: true },
        expect.any(Function)
      );
    });

    // it('Then ', () => {
    //   mongodb.MongoClient.connect.mockRejectedValue(() =>
    //     Promise.reject('value')
    //   );
    //   expect(result).toEqual('e');
    // });
  });
});
