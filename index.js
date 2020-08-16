const fs = require('fs');

const inquirer = require("inquirer");

//const axios = require('axios');

const generate = require("./generateMarkdown");

//const writefile = require("writefile");
 
// array of questions for user
questions = [
    {
        type: "input",
        message:  "What is the name of your project repo?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description?",
        name: "desciption"
    },
    {
        type: "input",
        message: "What is the installation instructions ?",
        name: "Instalation"
    },
    {
        type: "input",
        message: "What is the use of the project ?",
        name: "usage"
    },
    {
        type: "list",
        message: "Please choose licence from  the list?",
        name: "licence",
        choices: [
            "GNU LGPLv3",
            "GNU AGPLv3",
            "GNU GPLv3",
            "Mozilla",
            "Apache",
            "ISC ",
            "MIT"
        ]
    },
    {
        type: "input",
        message: "What are the contribution for the project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the test methods for the project?",
        name: "Test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email if the user want to conatact you?",
        name: "Contact"
    }
   
]

inquirer.prompt(questions
    
    ).then(data => {
  
        console.log(data);
        return data;
     
    })
    
    
  
  // function to write README file
  function writeToFile(fileName, data) {

  let markdown = generate(data);
  fs.writeFile(`README.md`, markdown);
  
  }

// function to write README file


// function to initialize program
function init() {
 
}
// function call to initialize program
init();
