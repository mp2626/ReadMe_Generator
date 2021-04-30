// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([{
            type: "input",
            message: "Enter the project title",
            name: "title"
        },
        {
            type: "input",
            message: "Enter project description",
            name: "description"
        },
        {
            type: "input",
            message: "Enter project installation instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter the usage of the project",
            name: "usage"
        },
        {
            type: "list",
            message: "Select a license",
            choices: [
                "1",
                "2",
                "3"
            ],
            name: "license"
        },
        {
            type: "input",
            message: "Enter the contribution guidelines",
            name: "contributions"
        },
        {
            type: "input",
            message: "Enter the test instructions",
            name: "tests"
        },
        {
            type: "input",
            message: "Enter your GitHub username",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email address",
            name: "email"
        }
        ]);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await questions();
        console.log(data);
        // licence key?????
        const markDown = await generateMarkdown(data);
        console.log(markDown);
    }
    catch (e) {
        console.log(e);
    }
}

// Function call to initialize app
init();
