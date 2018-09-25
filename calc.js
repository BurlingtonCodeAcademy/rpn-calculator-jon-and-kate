let Calculator = require('./calculator.js');
const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

calculator = new Calculator;
calculate();

async function calculate() {
    let input = await ask("enter number or operation: ")
    if(input === '+'){
        calculator.plus();
    } else if(input === '-'){
        calculator.minus();
    } else if(input === '*'){
        calculator.times();
    } else if(input === '/'){
        calculator.divide();
    } else {
        calculator.enter(+input);
    }
    console.log(calculator.value());
    console.log(calculator.stack);
    calculate();
 }
