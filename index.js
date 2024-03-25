#! /usr/bin/env node 
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { message: "Enter the first number", type: "number", name: "firstNumber" },
    { message: "Enter the second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//Conditional statement
if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
