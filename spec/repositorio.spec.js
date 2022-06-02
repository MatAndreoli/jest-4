const repositorio = require('../src/repositorio');

let mock = {
  collection: (str) => ({
    find: (obj) => ({
      toArray: () => [1, 2, 3, 4],
    }),
  }),
};

let repo = new repositorio(mock);
let result;
describe('Given repositorio is started', () => {
  describe('When method findAllFiles is called', () => {
    beforeEach(async () => {
      result = await repo.findAllFiles();
    });

    it('Then return an array', () => {
      expect(result).toEqual(expect.arrayContaining([1, 2, 3, 4]));
    });
  });
});
