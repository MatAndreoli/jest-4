const repositorio = require('../src/repositorio');

const mockToArray = jest.fn(() => [1, 2, 3, 4]);
const mockFind = jest.fn((obj) => ({
  toArray: mockToArray,
}));
const mockCollection = jest.fn((str) => ({
  find: mockFind,
}));

let mockCliente = {
  collection: mockCollection,
};

let repo = new repositorio(mockCliente);
let result;
describe('Given repositorio is started', () => {
  describe('When method findAllFiles is called', () => {
    beforeEach(async () => {
      result = await repo.findAllFiles();
    });

    it('Then return an array', () => {
      expect(result).toEqual(expect.arrayContaining([1, 2, 3, 4]));
    });

    it('Then call toArray', () => {
      expect(mockToArray).toHaveBeenCalled();
    });

    it('Then call find', () => {
      expect(mockFind).toHaveBeenCalled();
    });

    it('Then call collection', () => {
      expect(mockCollection).toHaveBeenCalledWith('files');
    });
  });
});
