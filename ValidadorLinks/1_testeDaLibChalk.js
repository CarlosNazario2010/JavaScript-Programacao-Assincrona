// npm install chalk@4
const chalk = require("chalk");

// chalk pinta os caracteres e o backgroud do console

console.log(chalk.green.bgRed.bold("Vamos comecar"));

const paragrafo = "Texto retornado por uma funcao";

function texto(string) {
  return string;
}

console.log(chalk.yellowBright.underline.bgBlueBright(texto(paragrafo)));

console.log(`
CPU: ${chalk.redBright("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);
