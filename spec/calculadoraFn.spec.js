const calculadora = require('../src/calculadora');
const Core = require('../src/core')

jest.mock('../src/core.js', () => ({
  soma: jest.fn((n1, n2) => n1 + n2),
  dividir: jest.fn((n1, n2) => n1 / n2),
}));

describe('Given calculadora is started', () => {
  describe('When calculadora is called', () => {
    describe('And op is 1', () => {
      beforeEach(() => {
        result = calculadora(1, 2, 1);
      });

      it('Then it should call Core.soma', () => {
        expect(Core.soma).toHaveBeenCalledWith(1, 2);
      });

      it('Then return 3', () => {
        expect(result).toBe(3);
      });
    });

    describe('And op is 2', () => {
      beforeEach(() => {
        result = calculadora(4, 2, 2);
      });

      it('Then it should call Core.dividir', () => {
        expect(Core.dividir).toHaveBeenCalledWith(4, 2);
      });

      it('Then return 2', () => {
        expect(result).toBe(2);
      });
    });

    describe('And op is invalid', () => {
      it('Then throw an Error', () => {
        expect(() => calculadora(2, 3, 4)).toThrowError(Error);
      });
    });

    describe('And op is 0', () => {
      it('Then throw an Error', () => {
        expect(() => calculadora(2, 3, 0)).toThrowError(Error);
      });
    });

    describe('And number1, number2 and op are not given', () => {
      beforeEach(() => {
        result = calculadora();
      });

      it('Then return 0', () => {
        expect(result).toBe(0);
      });
    });
  });
});
