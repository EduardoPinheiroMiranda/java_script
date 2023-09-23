const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')
//const { response } = require('express')

const pais = obj => obj.pais == 'China'
const mulher = obj => obj.genero == 'F'
const menorSalario = (menor, maior) => {
    return menor.salario < maior.salario ? menor : maior
}


axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios
    .filter(pais)
    .filter(mulher)
    .reduce(menorSalario)) 
    
})