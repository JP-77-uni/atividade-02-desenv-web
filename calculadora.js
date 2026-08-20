const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (entrada1) => {
    rl.question('Digite o segundo número: ', (entrada2) => {
        rl.question('Digite o operador (+, -, *, /): ', (operador) => {
            const numero1 = Number(entrada1);
            const numero2 = Number(entrada2);
            let resultado;

            switch (operador) {
                case '+':
                    resultado = numero1 + numero2;
                    break;
                case '-':
                    resultado = numero1 - numero2;
                    break;
                case '*':
                    resultado = numero1 * numero2;
                    break;
                case '/':
                    resultado = numero1 / numero2;
                    break;
                default:
                    console.log('Operador inválido.');
            }

            if (resultado !== undefined) {
                console.log(`Resultado: ${resultado}`);
            }

            rl.close();
        });
    });
});