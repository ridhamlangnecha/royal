let display = document.getElementById('display');
let buttons = document.getElementById('buttons');

function appendNumber(number) {
 display.value += number;
}

function appendOperator(operator) {
 display.value += operator;
}

function clearDisplay() {
 display.value = '';
}

function calculateResult() {
 try {
    display.value = eval(display.value);
 } catch (error) {
    display.value = 'Error';
 }
}