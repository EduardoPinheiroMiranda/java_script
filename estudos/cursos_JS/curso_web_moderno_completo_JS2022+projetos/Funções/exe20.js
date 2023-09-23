/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

const calculo = (valor, op) => {

    switch(op){
        case true:
                    let notaCem = ((valor / 10) / 10).toFixed(0)
                    if(valor-(notaCem*100)>50){
                        let dezena = (valor-(notaCem*100))-50
                        dezena = (dezena/10).toFixed(0)

                        if((((valor-(notaCem*100))-50)-(dezena*10))>5){
                            let unid = (((valor-(notaCem*100))-50)-(dezena*10))-5
                        }
                    }
        case false:
    }



    


}

const troco = (valor) => {

    if(valor/10>10){

    }
}