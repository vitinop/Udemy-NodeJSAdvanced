// ler argumentos,adicionar valor e atribuir a uma variável via linha de comando , nesse caso passei --nome=Victor --profissao=Programador
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];
console.log(nome, profissao)


console.log (`O nome é ${nome} e a sua profissao é ${profissao}`)