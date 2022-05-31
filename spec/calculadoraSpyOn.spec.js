const calculadora = require('../src/calculadora');
const Core = require('../src/core');

let somaSpy = jest.spyOn(Core, 'soma');
let dividirSpy = jest.spyOn(Core, 'dividir');
let result;

describe('Given calculadora is started', () => {
  describe('When calculadora is called', () => {
    describe('And op is 1', () => {
      beforeEach(() => {
        result = calculadora(1, 2, 1);
      });

      it('Then it should call Core.soma', () => {
        expect(somaSpy).toHaveBeenCalledWith(1, 2);
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
        expect(dividirSpy).toHaveBeenCalledWith(4, 2);
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

    describe('And op is undefined', () => {
      beforeEach(() => {
        result = calculadora(2, 3);
      });

      it('Then it should call Core.soma', () => {
        expect(somaSpy).toHaveBeenCalledWith(2, 3);
      });

      it('Then return 5', () => {
        expect(result).toBe(5);
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
