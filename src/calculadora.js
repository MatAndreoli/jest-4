const Core = require('./core');

const ex002 = (number1 = 0, number2 = 0, op = 0 || 1) => {
  switch(op) {
     case 1:
      return Core.soma(number1, number2);
     case 2:
      return Core.dividir(number1, number2); 
     default:
       throw Error("OP INVALID");
  }
}

module.exports = ex002;