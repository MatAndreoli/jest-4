

class Core {
    constructor() {
        console.log('init teste');
    }

    static soma(number1 = 0, number2 = 0) {
        return number1 + number2;
    }
    static dividir(number1 = 0, number2 = 0) {
        return number1 / number2;
    }
}

module.exports = Core;