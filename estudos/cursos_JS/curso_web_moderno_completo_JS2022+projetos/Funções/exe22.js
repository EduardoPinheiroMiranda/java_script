/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. 

formula de juros compostos A = P (1 + i) ^ t


*/


const juros = (mes, anuidade) => {
    if(mes>0 && mes<13){
        let atraso = mes - 1
        return ( anuidade * ((1+0.05)**atraso))
    }
}

console.log(juros(2, 50))