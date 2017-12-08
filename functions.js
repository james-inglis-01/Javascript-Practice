/*
A function is a block of code designed to perform a task.

Functions are like recipes. They take data or variables, perform a set of tasks on them, and then return the result. The beauty of functions is that they allow us to write a chunk of code once, then we can reuse it over and over without writing the same code over and over.

Take a look at this code:
*/

var calculatorOn = false;

function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }
}

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.


/*
This code turns the calculator on if it is currently off, and turns it off if the calculator is currently on.

See if you can figure out how this code works. In the next exercise, we'll walk through it line by line.
*/





var calculatorOn = false;

function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }
}

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

/*
On line 1, we have a variable named calculatorOn set to false. Our program starts with the calculator in the off position.
On line 3, there's a function named pressPowerButton. Functions follow this syntax:

• They begin with the JavaScript keyword function.

• After function comes the name of the function. pressPowerButton is the name of the function. Notice there are no spaces in the name and each new word is capitalized. This is a convention in the JavaScript community called camelCase.

• After the function's name, comes parentheses (). We'll learn about these in the next exercise.

• Finally, the function has a block of code it executes between the curly braces {}.
Inside the function is an if/else statement.
On the last few lines, we make the function run by writing pressPowerButton(). This term for this is calling the function. We call it with pressPowerButton(), and it runs all the code in the block of the function.
We executed the code in the block of the function twice without having to write it twice. Functions can make code reusable!
*/





/*
The calculator program should be able to perform a math operation on a number. We should be able to give a calculator a number, have it perform a task on it like multiplication, then print a result.

Currently, we have no way to give a function a number. To do this, we can use parameters. Parameters are variables that we can set when we call the function. For example:
*/

function multiplyByThirteen(inputNumber) {
  console.log(inputNumber * 13);
}

multiplyByThirteen(9);
// Output: 117

/*
We added inputNumber within the parentheses of the multiplyByThirteen function. inputNumber is a parameter.
Inside the multiplyByThirteen function, we use console.log to print the inputNumber by 13.
When we call the multiplyByThirteen function on the last lines, we set the inputNumber parameter. For instance, multiplyByThirteen(9) calls the multiplyByThirteen function, and sets inputNumber as 9. Then, inside the block of the multiplyByThirteen function, 9 is multiplied by 13, resulting in 117 printing to the console.
Note on terminology: inputNumber is a parameter, but when we call multiplyByThirteen(9), the 9 is called an argument. Therefore, arguments are provided when you call a function, and parameters receive arguments as their value. So, inputNumber is a parameter and its value is the argument 9, since we wrote multiplyByThirteen(9).
Parameters let us write logic inside functions that can be modified based on when we call the function, which will help make our functions more flexible.
*/



/*
If we can set one parameter, can we set two?

We can set as many parameters as we'd like by adding them when we declare the function, separated by commas, like this:
*/


function getRemainder(numberOne, numberTwo) {
  console.log(numberOne % numberTwo);
}

getRemainder(365, 27);
// Output: 14

/*
The getRemainder function has two parameters: numberOne and numberTwo.
When we call the getRemainder function on the last line, we include two numbers as the parameters, also separated by commas. This is referred to as passing in parameters to a function.

In this case, we are telling the function to assign numberOne the value of 365 and numberTwo the value of 27. We are passing in 365 and 27 to the getRemainder function.
When the getRemainder runs, the function knows what numberOne and numberTwo equal since we passed in two parameters when we called the function. Therefore it evaluates 365 % 27, which produces the result 14.
By adding multiple parameters, we can build functions that are more flexible. Now the function has two variables that we can define when we call the function.
*/





/*
return
Using console.log as the result of a function isn't the best use of a function. The purpose of a function is to take some input, perform some task on that input, then return a result.

To return a result, we can use the return keyword. Take a look at our function from the last exercise, now re-written slightly:
*/


function getRemainder(numberOne, numberTwo) {
  return numberOne % numberTwo;
}


/*
console.log(getRemainder(365, 27));
// Output: 14
Instead of using console.log inside the getRemainder function, we used the return keyword. return will take the result of the math operation and give it back to whatever calls it.
On the last line, we called the getRemainder function inside of a console.log statement, which outputted the result of 14.
This code achieved the same output as before, however now our code is better. Why? If we wanted to use the getRemainder function in another place in our program, we could without printing the result to the console. Using return is generally a best practice when writing functions, as it makes your code more maintainable and flexible.
*/