/**
 * 1. Construa um programa em Javascript que, tendo como dados de entrada dois pontos
    quaisquer no plano, P (x1, y1) e P (x2, y2), escreva a distância entre eles. A fórmula que
    efetua tal cálculo é:
 */
alert("Questão 1")

const px1 = prompt('Digite o valor de Px1')
const py1 = prompt('Digite o valor de Py1')

const px2 = prompt('Digite o valor de Px2')
const py2 = prompt('Digite o valor de Py2')

const d = Math.sqrt(
    ((px2-px1)**2) + ((py2 - py1)**2)
)
alert(`
    Questão 1: 
    resultado ${d}
`)


/**
 * 2. Faça um programa em Javascript que leia o tempo de duração de um e vento em uma
    fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos.
 */

const secundTimer = prompt(`
    Questão 2: Quanto tempo esse evento durou na empresa ?
`)

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

alert(`
    Questão 2:
    resposta: ${day}d : ${hour}h : ${minute}m : ${secund}s
`)

/**
 * 3. Calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média,
    uma mensagem de "Aprovado", caso a média seja igual ou superior a 6, ou a mensagem
    "Reprovado", caso contrário.
 */

let notas = []
alert("questão 3:")
notas.push(Number(prompt("Qual a primeira nota ?")))
notas.push(Number(prompt("Qual a segunda nota ?")))
notas.push(Number(prompt("Qual a teceira nota ?")))

let total = 0

notas.forEach((item) => {
    total += item
    
})

const media = total/3 

media >= 6 ? 
    alert(`
    Questão 3:
    resultado: media do aluno: ${media.toFixed(1)}, aprovado
    `) :
    alert(`
    Questão 3:
    resultado: media do aluno: ${media.toFixed(1)}, reprovado
    `)

/**
 * 4. Elaborar um programa em Javascript que lê 2 valores a e b e os defina com a mensagem:
    ‘São múltiplos’ ou ‘Não são múltiplos’.
 */
    alert("Questão 4:")
    const a = prompt("Qual o valor de A ?")
    const b = prompt("Qual o valor de B ?")

    a%b==0 || b%a==0? 
    alert(`
    Questão 4:
    resposta: São multiplos
    `) : 
    alert(`
    Questão 4:
    resposta: Não são multiplos
    `)

/**
 * 5. Elabore um programa em Javascript que dada a idade de um nadador classifica-o em uma
    das seguintes categorias:
*/

const idade = prompt("Qual a idade do aluno ?")

idade >=5 && idade<=7 ? 
alert(`
Questão 5:
resposta: infantil A`) :
    idade >=8 &&  idade<=10 ? 
    alert(`
    Questão 5:
    resposta: infantil B`) :
            idade >=11 &&  idade<=13 ? 
            alert(`
            Questão 5:
            resposta: juvenil A`) :
                idade >=14 &&  idade<=17 ? 
                alert(`
                Questão 5:
                resposta: juvenil B`) :
                    idade >= 18 ? 
                    alert(`
                    Questão 5:
                    resposta: adulto`) : false