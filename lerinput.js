const { parse } = require('path')

//readline
const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})
// readline.question("Qual a sua idade",mostraResultado(idade))

readline.question("Qual a sua idade", (idade) => {
    idade = parseInt(idade)
    if(idade >= 18){
        console.log("você é maior de idade")
    }   
    else{
        console.log("você é menor de idade")
    }
})
readline.question("Qual a sua cidade", (cidade) => {
    
    console.log("você mora em " + cidade)
    })