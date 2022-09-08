// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// const getGithubUser = async (username) => {
//     try {
//         let response = await fetch("https://api.github.com/user/" + username);
//         let body = await response.json();
//         console.log(body)
//         return body.login

//          } catch (error)
//     {
//         console.log("error")
//      }
//     }

const promptUser = () => {
  return inquirer.prompt(questions);
};

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
// getGithubUser(questions.username);
// .then((response) =>
//     {
//         console.log(JSON.stringify(response, null, 2));
//         writeFile(JSON.stringify(response, null, 2));

//         // return fs.writeFile(`README.md`, JSON.stringify(response), err => err ? console.log(err) : console.log("Success!"))
//     }
// )

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

// function writeFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//          if(err)
//          throw err
//          console.log("success")})
// }

// function init() {
//     inquirer.prompt(questions)
//     .then(function (response) {
//         console.log(JSON.stringify(response, null, 2));
//         writeFile("README.md", generateMarkdown, JSON.stringify(response, null, 2))
//     })
// }

// Function call to initialize app
init();
