// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  
  `;
}



module.exports = generateMarkdown;


