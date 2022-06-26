const number1 = Number(prompt('Enter first number'));
const number2 = Number(prompt('Enter second number'));
const operator = prompt('Input Operator (+, -, /, x)');

let result;
if (operator == '+'){
    result = number1 + number2;
}
else if(operator == '-'){
    result = number1 - number2;
}
else if(operator == '/'){
    result = number1 / number2;
}
else if(operator == 'x'){
    result = number1 * number2;
}else{
    result = 'Invalid'
}
alert(result);