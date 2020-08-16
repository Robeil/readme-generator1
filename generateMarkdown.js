// function to generate markdown for README
function generateMarkdown ({ title, description, usage, license, contribution, test, username, email }) {

  return `# ${data.title}
      
    ![GitHub](https://img.shields.io/github/license/${username}/${title})

    ${description}
    
    ${instalation}
    
    ${usage}
    
    ${license}
    
    ${contribution}
    
    ${test}
    
    Please address questions to ${ username}.
  
    [Link to Profile](https://github.com/${ username})
  
    [E-mail](${ email})

    ${license} `;
}

module.exports = generateMarkdown;
