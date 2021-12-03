// ler argumentos,adicionar valor e atribuir a uma variável via linha de comando , nesse caso passei nome=victor idade=26
console.log(process.argv)

const args=process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]

console.log(nome)


const idade = args[1].split('=')[1]

console.log(idade)

console.log (`O nome é ${nome} e a ideade é ${idade} anos`)