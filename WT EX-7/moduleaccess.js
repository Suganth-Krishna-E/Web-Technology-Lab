var clc = require('./calculatornode');

console.log("Simple Calculator");

const prompt = require("prompt-sync")({ sigint: true });

var a = parseInt(prompt("Enter first number..."));
var b = parseInt(prompt("Enter second number..."));
var op = prompt("Enter operation...(+) or (-) or (*) or (/) or (%)");

if(op=='+')
{
    console.log("The addition of two numbers is: "+clc.addition(a,b));
}
else if(op=='-')
{
    console.log("The subtraction of two numbers is: "+clc.subtraction(a,b));
}
else if(op=='*')
{
    console.log("The multiplication of two numbers is: "+clc.multiplication(a,b));
}
else if(op=='/')
{
    if(b==0)
    {
        console.log("Please enter valid numbers ");
    }
    else
    {
        console.log("The division of two numbers is: "+clc.division(a,b)); 
    }
}
else if(op=='%')
{
    if(b==0)
    {
        console.log("Please enter valid numbers");
    }
    else
    {
        console.log("The modulo division of two numbers is: "+clc.modulodiv(a,b)); 
    }
}
else
{
    console.log("Please enter a valid operation");
}

console.log('Calcualtor Ended');

