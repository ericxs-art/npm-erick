console.log(process.argv)

var argumentos = process.argv.slice(2)

console.log(argumentos)

var esporteEscolhido = argumentos[0]
console.log("seu esporte escolhido é " + esporteEscolhido)

var cantorEscolhido = argumentos[1]
console.log("meu cantor favorito é " + cantorEscolhido)

