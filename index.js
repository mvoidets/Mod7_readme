// TODO: Include packages needed for this application

// import inquirer from 'inquirer';
// import colors from 'colors';
// import fs from 'fs';
import generatedMarkdown from './utils/generateMarkdown.js';

import inquirer from 'inquirer';
// import colors from 'colors';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
    },
    {
        type: "input",
        name: "design",
        message: "Why did you build out this project?",
    },
    {
        type: "input",
        name: "install",
        message: "How do you run this project?",
    },
    {
        type: "input",
        name: "contributor",
        message: "Who contributed to this project?"
    },
    {
        type: "checkbox",
        name: "licenses",
        message: "Select license type(s)",
        choices: ["MIT", "Apache", "GPL", "BSD"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },




];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file', err);
        } else {
            console.log('README.md file created successfully');
        }
    });
}



// TODO: Create a function to initialize app
function init() {
    console.log('Initializing..')
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log('answers', answers);
            writeToFile('README.md', generatedMarkdown(answers));
        });
}

// Function call to initialize app
init();
