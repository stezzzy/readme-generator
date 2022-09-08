// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "name",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of License should your project have?",
    choices: ["Apache", "MIT", "GPLv3", "GPLv2", "CC", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "dependencies",
    default: "npm install",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
    default: "node index.js"
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribution",
  },
];

console.log(questions);

// TODO: Create a function to write README file

function writeFile(fileName, data, err) {
  return fs.writeFile(path.join(process.cwd(), fileName), data, err);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeFile("README.md", generateMarkdown({ ...response }), (err) => {
      if (err) throw err;
      console.log("success");
    });
  });
}

init();
