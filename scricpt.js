const num1 = parseFloat(prompt("Enter number 1:"));
const num2 = parseFloat( prompt( "Enter number 2: "));

const operator = prompt( "Enter operator ( +, -, *, /)");

let result = 0;

if ( isNaN(num1) || isNaN(num2)){
    alert('Invalid input, Enter a valid Number to perform Arithmetic operation.')
} else {

    if ( operator == "+" ){
        result = num1 + num2;
    } else if( operator == "-"){
        result = num1 - num2;
    } else if( operator == "*"){
        result = num1 * num2;
    } else if( operator == "/"){
        result = num1 / num2;
    } else{

    }

}

alert('Result is ' + result);
    
