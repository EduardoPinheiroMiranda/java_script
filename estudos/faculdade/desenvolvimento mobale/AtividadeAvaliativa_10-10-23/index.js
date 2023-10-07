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
    resultado ${d}`)


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
    resposta: ${day}d : ${hour}h : ${minute}m : ${secund}s`)