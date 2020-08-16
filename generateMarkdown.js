// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
      
    ${description}
    
    ${instalation}
    
    ${usage}
    
    ${license}
    
    ${contribution}
    
    ${test}
    
    ${username}
    
    ${contact}
  `;
  }
  
  module.exports = generateMarkdown;
  