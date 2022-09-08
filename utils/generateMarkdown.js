// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  // return something here
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return `This project is being licensed under the ${license} license: https://www.apache.org/licenses/LICENSE-2.0
    `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (license == "None") {
    return `## ${license}`
  }
  else {
    return `## License: ${license} ${renderLicenseBadge(license)}

${renderLicenseLink(license)}`
  };
  //return something here
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

## Github

${data.username}

## Description

${data.description}

# License

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
