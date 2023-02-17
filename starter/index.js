// import Node.js built-in modules and a third-party package
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project:',
  },
  {
    type: 'input',
    name: 'tableOfContents',
    message: 'Please enter the table of contents for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter the installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter the usage information for your project:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please enter the license for your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please enter the contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter the test instructions for your project:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please enter the frequently asked questions and answers for your project:',
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      return writeToFile('README.md', markdown);
    })
    .then(() => {
      console.log('README.md file successfully created!');
    })
    .catch((error) => {
      console.log(error);
    });
}

// function call to initialize program
init();
