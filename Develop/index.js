// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
/////////////////////////////////////////////////
const generateReadme = require('./utils/generateMarkdown');

const inquirer = require('inquirer');

const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project? (If you wish to leave any answers blank just hit enter without entering anything.)',
      default: 'n/a',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        default: 'n/a',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'n/a',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions and examples for use.',
      default: 'n/a',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        default: 'n/a',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license are you using?',
      choices: ['MIT', 'Apache', 'Unlicensed', 'BSD', 'GNU'],
      default: 'n/a',
    },
    {
      type: 'input',
      name: 'contributing',
      message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
      default: 'n/a',
    },
    {
        type: 'input',
        name: 'tests', 
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        default: 'n/a',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your  github username.',
      default: 'n/a',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your e-mail.',
      default: 'n/a'
    }
  ])
  .then((answers) => {
    console.log(answers);
    const READMEPageContent = generateReadme(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });