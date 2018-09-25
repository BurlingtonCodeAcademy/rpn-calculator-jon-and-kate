class Calculator {
    constructor() {
      this.stack = [];
    }
  
    value() {
        let val = this.stack.pop();
        if(val === undefined){
            val = 0;
        };
        this.stack.push(val);
        return val;
    }
  
    enter(value) {
        this.stack.push(value);
    }
    runTest(){
        let test = this.stack.pop();
        if (test === undefined){
            throw "calculator is empty";
        } else {
            this.stack.push(test);
        };
    }
  
    plus() {
        this.runTest();
        let secondNumber = this.stack.pop();
        let firstNumber = this.stack.pop();
        this.stack.push(firstNumber+secondNumber);
    }

    minus() {
        this.runTest();
        let secondNumber = this.stack.pop();
        let firstNumber = this.stack.pop() || 0;
        /*if (firstNumber === undefined){
            firstNumber = 0;
        };*/
        
        let difference = firstNumber - secondNumber;
        this.stack.push(difference);
    }
    divide() {
        this.runTest();
        let secondNumber = this.stack.pop();
        let firstNumber = this.stack.pop();
        this.stack.push(firstNumber/secondNumber);
    }
    times() {
        this.runTest();
        let secondNumber = this.stack.pop();
        let firstNumber = this.stack.pop();
        this.stack.push(firstNumber*secondNumber);
    }
  }
  module.exports = Calculator;

