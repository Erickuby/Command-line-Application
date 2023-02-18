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

  ## Questions
  If you have any questions, please feel free to contact me at ${data.email}. You can also find more of my work at my [GitHub profile](https://github.com/${data.username}).
  `;
}



module.exports = generateMarkdown;


