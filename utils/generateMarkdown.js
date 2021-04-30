// Renders licence
function renderLicenseBadge(data) {

  if (data == "MIT Licence") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  else if (data == "Apache-2.0") {
    return "![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  }
  else if (data == "BSD 2-Clause") {
    return "![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)"
  }
  else {
    return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
  }
}

function renderLicenceTerms(data) {
  if (data == "MIT Licence") {
    return "https://opensource.org/licenses/MIT"
  }
  else if (data == "Apache-2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  else if (data == "BSD 2-Clause") {
    return "https://opensource.org/licenses/BSD-2-Clause"
  }
  else {
    return "https://opensource.org/licenses/BSD-3-Clause"
  }
}

function renderTableOfContence() {

  return `## Table of Contents
  
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  `
}

// TODO: Create a function to generate markdown for README

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

  To review the licence terms please follow the link - ${renderLicenceTerms(licence)}

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
