
class Calculator {
    constructor (previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    
    clear () {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }

    delete () {

    }

    appendNumber (number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation (operation) {

    }

    compute () {

    }

    updateDisplay () {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const previousOperandTextElement = document.querySelector('[data-previous]');
const currentOperandTextElement = document.querySelector('[data-after]');

const operandButton = document.querySelectorAll('[data-operation]');
const numberButton = document.querySelectorAll('[data-number]');
const deleteButton = document.querySelector('[data-delete');
const clearButton = document.querySelector('[data-clear');
const decimalButton = document.querySelector('[data-decimal]');
const equalsButton = document.querySelector('[data-equals]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})


