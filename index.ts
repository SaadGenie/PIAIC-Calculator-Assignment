#! /usr/bin/env node
import inquirer from 'inquirer';

async function calculate() {
  const questions = [
    {
      type: 'input',
      name: 'num1',
      message: 'Enter the first number:',
    },
    {
      type: 'input',
      name: 'num2',
      message: 'Enter the second number:',
    },
    {
      type: 'list',
      name: 'operation',
      message: 'Select an operation:',
      choices: ['Add', 'Subtract', 'Multiply', 'Divide'],
    },
  ];

  const answers = await inquirer.prompt(questions);

  const num1 = parseFloat(answers.num1);
  const num2 = parseFloat(answers.num2);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Invalid input. Please enter valid numbers.');
    return;
  }

  let result: number;

  switch (answers.operation) {
    case 'Add':
      result = num1 + num2;
      break;
    case 'Subtract':
      result = num1 - num2;
      break;
    case 'Multiply':
      result = num1 * num2;
      break;
    case 'Divide':
      if (num2 === 0) {
        console.error('Cannot divide by zero.');
        return;
      }
      result = num1 / num2;
      break;
    default:
      console.error('Invalid operation.');
      return;
  }

  console.log(`Result: ${result}`);
}

calculate();
