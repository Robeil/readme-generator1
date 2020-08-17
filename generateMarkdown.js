// function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, license, contribution, tests, username, Email }) {

  return `# ${title}

  ![GitHub](https://img.shields.io/github/license/${username}/${title})
  ## Description:
  ${ description}
  
  
  
# Table of Contents
    
[Installation](#Installation)

Usage](#Usage)
 
[Contributing](#Contributing)
 
[Tests](#Tests)
 
[Questions](#Questions)
 
[License](#License)
 
  
  
# Installation
  
  ${ installation}
  
  
  
# Usage
  
  ${ usage}
  
  # License
  
  ${ license}
  
  
  # Tests
  
  ${ tests}
  
  # Questions
  
  Please ask questions to ${ username}.
  
  ${ username})

  # E-mail

  ${Email}


   `;
}

module.exports = generateMarkdown;
