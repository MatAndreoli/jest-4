const final = require('../src/final');
const Factory = require('../src/factory');

const mockFindAllFiles = jest.fn(() => 'hi');

const factorySpy = jest
  .spyOn(Factory, 'criarRepositorio')
  .mockImplementation(() => ({
    findAllFiles: mockFindAllFiles,
  }));

jest.spyOn(console, 'error');

let result;
describe('Given final is started', () => {
  describe('When method final is called', () => {
    describe('And succeeds', () => {
      beforeEach(async () => {
        result = await final();
      });

      it('Then call criarRepositorio ', () => {
        expect(factorySpy).toHaveBeenCalled();
      });

      it('Then call findAllFiles', () => {
        expect(mockFindAllFiles).toHaveBeenCalled();
      });

      it('Then return "hi"', () => {
        expect(result).toEqual('hi');
      });
    });

    describe('And fails', () => {
      beforeEach(async () => {
        factorySpy.mockRejectedValue('My error');
        await final();
      });

      it('Then call console.error', () => {
        expect(console.error).toHaveBeenCalledWith('FAILED', 'My error');
      });
    });
  });
});
