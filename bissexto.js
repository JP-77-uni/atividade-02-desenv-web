const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um ano: ', (entrada) => {
    const ano = Number(entrada);

    if ((ano % 4 === 0) && (ano % 100 !== 0 || ano % 400 === 0)){
        console.log('O ano é bissexto.');
    }else{
        console.log('O ano não é bissexto.');
    }

    rl.close();
});