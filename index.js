
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
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        this.currentOperand = this.previousOperand;
    }
    
    appendNumber (number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    
    chooseOperation (operation) {
        if(this.operation === '') return
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        
    }

    compute () {
        let computation;

        const prev = this.previousOperand;
        const current = this.currentOperand;

        if(isNaN(prev) || isNaN(current)) return;

        switch(this.operation) {
            case '+' : 
            computation = parseFloat(prev) + parseFloat(current);
            break;
            
            case '-' : 
            computation = parseFloat(prev) - parseFloat(current);
            break;
            
            case '×' : 
            computation = parseFloat(prev) * parseFloat(current);
            break;
            
            case '÷' : 
            computation = parseFloat(prev) / parseFloat(current);
            break;
            
            case '%' : 
            computation = parseFloat(prev) % parseFloat(current); 
            break;

            default : return;
        }

        this.currentOperand = computation;
        this.previousOperand = '';
        this.operation = undefined;

    }
    
    updateDisplay () {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
            
        }
    }

    displayAns() {
        this.currentOperandTextElement.innerText = 
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

operandButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})


equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})



clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})