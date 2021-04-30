// Renders licence
function renderLicenseBadge(data) {
  return `![License](https://img.shields.io/badge/License-${data.licence}%201.0-lightblue.svg)]`
}
// Renders title
function renderTitle(data) {
  return `${data.title}`
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

function renderDescription(data) {
  return `${data.description}`
}

function renderInstallation(data) {
  return `${data.installation}`
}

function renderUsage(data) {
  return `${data.usage}`
}

function renderLicence(data) {
  return `${data.licence}`
}

function renderContributions(data) {
  return `${data.contributions}`
}

function renderTests(data) {
  return `${data.tests}`
}

function renderGithub(data) {
  return `${data.github}`
}

function renderEmail(data) {
  return `${data.email}`
}


// TODO: Create a function to generate markdown for README


async function generateMarkdown(data) {
  // const { licence, tile, } = data

  return `

  ${renderLicenseBadge(data)}
  
  # ${renderTitle(data)}

  ${renderTableOfContence(data)}

  ## Description 

  ${renderDescription(data)}
  
  ## Installation

  ${renderInstallation(data)}
  
  ## Usage 

  ${renderUsage(data)}

  ## License 

  ${renderLicence(data)}

  ## Contributions 

  ${renderContributions(data)}

  ## Tests 

  ${renderTests(data)}
  
  ## Questions 

  Should you have any questions, please contact me: 
  Git Hub - https://github.com/${renderGithub(data)}
  Email - ${renderEmail(data)}
  `
}

module.exports = generateMarkdown;
