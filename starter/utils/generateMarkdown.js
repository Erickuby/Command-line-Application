// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  ## Table of Contents 
  ${data.tableOfContents}
    
  * [Installation](#installation)
    
  * [Usage](#usage)
    
  * [License](#license)
    
  * [Contributing](#contributing)
    
  * [Username](#username)
    
  * [Email](#email)
    
  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Username
  ${data.username}

  ## Email
  ${data.email}
  

`
} 


module.exports = generateMarkdown;


