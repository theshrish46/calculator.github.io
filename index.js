class Calculator {
    constructor(prop1, prop2) {
      this.num1 = prop1;
      this.num2 = prop2;
      this.clear();
    }
  
    clear() {
      this.num1.innerText = "";
      this.num2.innerText = "";
    }
  
    updateDisplay() {
      this.num1 = prop1;
    }
  
    appendNumber(prop1) {
      this.num2.innerText = num2.innerText.toString() + prop1.toString();
    }
  
    chooseOperator(operator) {
      this.num1.innerText = num2.innerText.toString() + ' ' +operator;
      this.num2.innerText = '';
    }
  }
  
  const numberButton = document.querySelectorAll(".data-number");
  // console.log(numberButton);
  
  const operatorButton = document.querySelectorAll(".data-operator");
  // console.log(operatorButton);
  
  const equalButton = document.querySelector(".equal");
  // console.log(equalButton);
  
  const clearButton = document.querySelector(".clear");
  // console.log(clearButton);
  
  // Displays
  
  const num1 = document.querySelector(".num1");
  
  const num2 = document.querySelector(".num2");
  
  const calculator = new Calculator(num1, num2);
  
  //  Implementing the First input and displaying it to the output section :::
  
  numberButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
  
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });
  
  //  Implementing the operator and displaying it to the output section  along with the first input:::
  
  operatorButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
  
      calculator.chooseOperator(button.innerText);
      calculator.updateDisplay();
    });
  });
  