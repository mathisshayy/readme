// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  By ${data.name}
  GitHub username: ${data.username}
  ## Description
  ${data.description}
  ## License Badge
  ![License badge](https://img.shields.io/badge/license-${data.license}-green)
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Technologies](#Technologies)
  3. [Contribution](#Contribution)
  4. [License](#License)
  ## Installation
  ${data.installation}
  ## Technologies
  ${data.technologies}
  ## Contribution
  ${data.contributing}
  ## License
  * ${data.license}
  * ![License badge](https://img.shields.io/badge/license-${data.license}-green)
  ## Creator Info
  * My GitHub profile can be viewed here: https://github.com/${data.username}
  * You can email me with questions at: ${data.email}`;
}

module.exports = generateMarkdown;
