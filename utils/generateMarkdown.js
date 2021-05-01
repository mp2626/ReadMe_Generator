// Renders licence
function renderLicenseBadge(data) {
  switch (data) {
    case "MIT Licence":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    case "Apache-2.0":
      return "![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    case "BSD 2-Clause":
      return "![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)"
    default:
      return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
  }
}

function renderLicenceTerms(data) {
  switch (data) {
    case "MIT Licence":
      return "https://opensource.org/licenses/MIT"
    case "Apache-2.0":
      return "https://opensource.org/licenses/Apache-2.0"
    case "BSD 2-Clause":
      return "https://opensource.org/licenses/BSD-2-Clause"
    default:
      return "https://opensource.org/licenses/BSD-3-Clause"
  }
}

function renderTableOfContence() {

  return `## Table of Contents
  
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributions)
  [Tests](#tests)
  [Questions](#questions)
  `
}

async function generateMarkdown(data) {

  const {
    title,
    description,
    installation,
    usage,
    licence,
    contributions,
    tests,
    github,
    email } = data

  return `

  ${renderLicenseBadge(licence)}
  
  # ${title}

  ${renderTableOfContence()}
  
  ## Description 

  ${description}
  
  ## Installation

  ${installation}
  
  ## Usage 

  ${usage}

  ## License 

  ${licence}

  To review the licence terms, please follow the link - ${renderLicenceTerms(licence)}

  ## Contributions 

  ${contributions}

  ## Tests 

  ${tests}
  
  ## Questions 

  Should you have any questions, please contact me: 
  Git Hub - https://github.com/${github}
  Email - ${email}
  `
}

module.exports = generateMarkdown;
