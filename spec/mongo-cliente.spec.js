const mongoCliente = require('../src/mongo-cliente');
const mockMongodb = require('mongodb');

jest.mock('mongodb', () => ({
  MongoClient: {
    connect: jest.fn(),
  },
}));

let client = {
  db: jest.fn((str) => str),
};

let err;

let result;
let callback;

describe('Given MongoCliente is started', () => {
  describe('When method criarConexao is called', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      result = mongoCliente.criarConexao();
      callback = mockMongodb.MongoClient.connect.mock.calls[0][2];
    });

    it('Then call connect', () => {
      expect(mockMongodb.MongoClient.connect).toHaveBeenCalledWith(
        'mongodb://localhost:27017/',
        { useNewUrlParser: true },
        expect.any(Function)
      );
    });

    describe('And succeeds', () => {
      it('Then call client.db', () => {
        callback(err, client);
        expect(client.db).toHaveBeenCalledWith('test');
      });
    });

    describe('And fails', () => {
      it('Then ', () => {
        err = true;
        callback(err, client);
      });
    });
  });
});
