const fs = require('fs');

const inquirer = require("inquirer");

const axios = require('axios');

const generate = require("./generateMarkdown");

//const writefile = require("writefile");

// array of questions for user
questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What would you like to write in to  the description of your README?",
        name: "desciption"
    },
    {
        type: "input",
        message: "What is the instructions for instalation ?",
        name: "instalation"
    },
    {
        type: "input",
        message: "What is the instraction how use of the project ?",
        name: "usage"
    },
    {
        type: "list",
        message: "Please choose licence from  the list?",
        name: "licence",
        choices: [

            "GNU GPLv3",
            "Mozilla",
            "Apache",
            "ISC ",
            "MIT"
        ]
    },
    {
        type: "input",
        message: "How can other people contrubute?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What tests have you provide fo rthis README?",
        name: "tests"
    },
    {
        type: "input",
        message: "How can people can ask you questions or want to contact you?",
        name: "Contact"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your E-mail address?",
        name: "Email"
    }

]

inquirer.prompt(questions

).then(data => {

    console.log(data);

    return writeToFile('Readme.md', data);

})


// function to write README file
function writeToFile(fileName, data) {

    let genarator = generate(data);

    fs.writeFile('README.md', genarator, (err, data) => {

        if (err) {
            console.log(err.message);
        } else {
            console.log('README.md', genarator);
        }
    });

}
/*
  readFileAsync("README.md", "utf8")
  .then(function(){

  })

  .catch(function(err) {
    console.log(err);
  });
*/
// function to initialize program
function init() {

}
// function call to initialize program
init();

//writeToFile();