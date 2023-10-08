/**
 * 1. Construa um programa em Javascript que, tendo como dados de entrada dois pontos
    quaisquer no plano, P (x1, y1) e P (x2, y2), escreva a distância entre eles. A fórmula que
    efetua tal cálculo é:
 */

const px1 = 4
const py1 = 2

const px2 = 2
const py2 = 4

const d = Math.sqrt(
    ((px2-px1)**2) + ((py2 - py1)**2)
)
console.log(`
    Questão 1: 
    resultado ${d}
`)


/**
 * 2. Faça um programa em Javascript que leia o tempo de duração de um e vento em uma
    fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos.
 */

const secundTimer = 155555

let secund = 0
let minute = 0
let hour = 0
let day = 0

const shour = 3600  //quantidade de segudos equivalentes a 1h
const sday = 86400 //quantidade de segudos equivalentes a 1d



secundTimer > 60 ? secund = secundTimer%60 : secund = secundTimer
secundTimer/60 > 60 ? minute = (Math.floor(secundTimer/60)%60) : minute = Math.floor(secundTimer/60) 
secundTimer/shour > 25 ? hour = (Math.floor(secundTimer/shour)%24) : hour = Math.floor(secundTimer/shour)
secundTimer/sday > 1 ? day = Math.floor(secundTimer/sday) : day = 0

console.log(`
    Questão 2:
    resposta: ${day}d : ${hour}h : ${minute}m : ${secund}s
`)

/**
 * 3. Calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média,
    uma mensagem de "Aprovado", caso a média seja igual ou superior a 6, ou a mensagem
    "Reprovado", caso contrário.
 */

const notas = [6,7,4]

let total = 0

notas.forEach((item) => {
    total += item
    
})

const media = total/3 

media >= 6 ? 
    console.log(`
    Questão 3:
    resultado: media do aluno: ${media.toFixed(1)}, aprovado
    `) :
    console.log(`
    Questão 3:
    resultado: media do aluno: ${media.toFixed(1)}, reprovado
    `)

/**
 * 4. Elaborar um programa em Javascript que lê 2 valores a e b e os defina com a mensagem:
    ‘São múltiplos’ ou ‘Não são múltiplos’.
 */

    const a = 33
    const b = 30

    a%b==0 ? 
    console.log(`
    Questão 4:
    resposta: São multiplos
    `) : 
    console.log(`
    Questão 4:
    resposta: Não são multiplos
    `)

/**
 * 5. Elabore um programa em Javascript que dada a idade de um nadador classifica-o em uma
    das seguintes categorias:
*/

const idade = 9
console.log(`
Questão 5:
resposta:`)

idade >=5 && idade<=7 ? 
    console.log("infatil A") :
    idade >=8 &&  idade<=10 ? 
            console.log("infantil B") :
            idade >=11 &&  idade<=13 ? 
                console.log("juvenil A") :
                idade >=14 &&  idade<=17 ? 
                    console.log("juvenil B") :
                    idade >= 18 ? 
                        console.log("adulto") : false