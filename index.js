// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
const question = async () => {
    const data = await inquirer
        .prompt([{
            type: "input",
            message: "Enter is the project title?",
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
            name: "contributing"
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
    return data
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() {
    try {
        data = await question();
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }
}

// Function call to initialize app
init();