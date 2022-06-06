const mongoCliente = require('../src/mongo-cliente');
const mongodb = require('mongodb');

jest.mock('mongodb', () => ({
  MongoClient: {
    connect: jest.fn(),
  },
}));

let client = {
  db: jest.fn(),
};

let err = false;

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

    describe('And succeeds', () => {
      it('Then call client.db', () => {
        const callback = mongodb.MongoClient.connect.mock.calls[0][2];
        callback(err, client);
        expect(client.db).toHaveBeenCalledWith('test');
      });
    });

    describe('And fails', () => {
      it('Then call client.db', () => {
        const callback = mongodb.MongoClient.connect.mock.calls[0][2];
        err = true;
        callback(err, client);
      });
    });
  });
});
