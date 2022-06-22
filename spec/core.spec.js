const Core = require('../src/core');

let numbers = {
  n1: 2,
  n2: 2,
};
let result;
let core

jest.spyOn(console, 'log')
describe('Given Core is started', () => {
  beforeAll(() => {
    core = new Core();
  });

  it('Then call console.log', () => {
    expect(console.log).toHaveBeenCalledWith('init teste')
  });

  describe('When method soma is called', () => {
    describe('And there are params', () => {
      beforeEach(() => {
        result = Core.soma(numbers.n1, numbers.n2);
      });

      it('Then return the sum', () => {
        expect(result).toBe(numbers.n1 + numbers.n2);
      });
    });

    describe('And there are undefined params', () => {
      beforeEach(() => {
        result = Core.soma();
      });

      it('Then return the 0', () => {
        expect(result).toBe(0 + 0);
      });
    });
  });

  describe('When method dividir is called', () => {
    describe('And there are params', () => {
      beforeEach(() => {
        result = Core.dividir(numbers.n1, numbers.n2);
      });

      it('Then return the sum', () => {
        expect(result).toBe(numbers.n1 / numbers.n2);
      });
    });

    describe('And there are undefined params', () => {
      beforeEach(() => {
        result = Core.dividir();
      });

      it('Then return NaN', () => {
        expect(result).toBe(NaN);
      });
    });
  });
});
