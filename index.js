const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Insira o valor do plano antigo: ', (planoAntigo) => {
rl.question('Insira o valor do plano novo:  ', (planoNovo) => {
rl.question('Qual é a data de vencimento fixa: ',(dataFixa) => {
   
 
 const dataAtual = Number(9);
 const dataAtualHoje = Number(10);
 const calcPropPlanoAntigo = Number (planoAntigo) / 30;
 const propAntigo = Number(calcPropPlanoAntigo) * Number (dataAtual);
 const diasPropNovo = (30) - Number(dataAtualHoje);
 const calcPropPlanoNovo = Number (planoNovo) / (30);
 const propNovo = Number(calcPropPlanoNovo) * Number(dataAtualHoje);
 const valorAtual = propAntigo + propNovo;
 const casasDecimais = 2;
 const resultadoFormatado = valorAtual.toFixed(casasDecimais);

console.log(`O valor do proporicional será de : ${resultadoFormatado} com vencimento em ${dataFixa}/11/2024`);
    
    rl.close();
})
})
});
