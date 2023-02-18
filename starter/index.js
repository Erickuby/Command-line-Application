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
    type: 'list',
    choices: ['MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'GPL [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 'IBM [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)', 'ISC [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)', 'Mozilla [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 'SIL [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',],
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
    name: 'username',
    message: 'Please enter your Github username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter Github email address:',
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
