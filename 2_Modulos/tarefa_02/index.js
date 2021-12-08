const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual o seu nome??",
    },
    {
      name: "idade",
      message: "Qual a sua idade?",
    },
  ])
  .then((answers) => {
    const nome = answers.nome;
    const idade = answers.idade;
    console
      .log(
        chalk.bgYellow.black(
          `O nome do usuário é ${nome} e ele tem ${idade} anos`
        )
      )
      .catch((err) => {
        console.log(err);
      });
  });
