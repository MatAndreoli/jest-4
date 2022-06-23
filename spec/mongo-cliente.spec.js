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
      new mongoCliente();
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
      beforeEach(() => {
        err = false;
        callback(err, client);
      });

      it('Then call client.db', () => {
        expect(client.db).toHaveBeenCalledWith('test');
      });

      it('Then return a value', async () => {
        await result
          .then((r) => {
            expect(r).toBe('test');
          })
          .catch((r) => {
            expect(r).toBeUndefined();
          });
      });
    });

    describe('And fails', () => {
      beforeEach(() => {
        jest.clearAllMocks();
        result = mongoCliente.criarConexao();
        callback = mockMongodb.MongoClient.connect.mock.calls[0][2];
        err = true;
        callback(err, client);
      });

      it('Then return true', async () => {
        await result
          .then((e) => {
            expect(e).toBeUndefined();
          })
          .catch((r) => {
            expect(r).toBe(true);
          });
      });
    });
  });
});
