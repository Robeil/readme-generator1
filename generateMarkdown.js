// function to generate markdown for README
function generateMarkdown ({title, description, installation, usage, license, contribution, tests, username, Email }) {

  return `# ${title}

 ${username}/${ title })

  # Description:

  ${ description }
  
  # Installation
  
  ${ installation }
  
  # Usage
  
  ${ usage }

  # licence

  ${ license }
  
  # Contribution Guidelines
  
  ${ contribution }
  
  # Tests
  
  ${ tests }
  
  # Questions
  
  Please ask questions to ${ username }.
  
  [Link to Profile](https://github.com/${ username })

  # E-mail

  ${Email}


   `;
}

module.exports = generateMarkdown;
