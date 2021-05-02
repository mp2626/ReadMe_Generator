// requires packages for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// generates questions for user
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
            message: "Select a licence",
            choices: [
                "MIT Licence",
                "Apache-2.0",
                "BSD 2-Clause",
                "BSD 3-Clause"
            ],
            name: "licence"
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

// function to call relevant function in order to generate the README. Using await to insure-
// that the require data have been create/captured prior to continuing.
async function init() {
    try {
        const data = await questions();
        console.log(data);
        const markDown = await generateMarkdown(data);
        console.log(markDown);
        fs.writeFile('README.md', markDown, (err) => {
            err ? console.log(err) : console.log("README Created")
        });
    }
    catch (e) {
        console.log(e);
    }
}
// initializes the application on load
init();
