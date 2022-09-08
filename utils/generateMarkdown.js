// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === "GPLv2") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if (license === "CC") {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
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
  if (license === "MIT") {
    return `This project is being licensed under the ${license} license: https://opensource.org/licenses/MIT
    `
  }
  if (license === "GPLv3") {
    return `This project is being licensed under the ${license} license: https://www.gnu.org/licenses/gpl-3.0.en.html
    `
  }
  if (license === "GPLv2") {
    return `This project is being licensed under the ${license} license: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
    `
  }
  if (license === "CC") {
    return `This project is being licensed under the ${license} license: https://creativecommons.org/licenses/
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
    return `${license} ${renderLicenseBadge(license)}

${renderLicenseLink(license)}`
  };
  //return something here
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.name} 

## Table of Contents 🔍
* [Description](#description-🗒️)
* [Usage](#usage-🔼)
* [Installation](#installation-✅)
* [Tests](#tests-✴️)
* [Contributions](#contributions-👐)
* [Questions](#questions-💌)
* [License](#license-🌍)

## Description 🗒️

${data.description}

## Usage 🔼

To use ${data.name}: ${data.usage}

## Installation ✅

To install the correct dependencies for ${data.name} to work, you must run:
~~~
${data.dependencies}
~~~
 

## Tests ✴️

To run tests: 
~~~
${data.tests}
~~~

## Contributions 👐

To make contributions to ${data.name}, ${data.contribution}

## Questions 💌
* If you have any questions please [**email**](mailto:${data.email}) me
* Check out more of my work on [**GitHub**](${data.username})

# License 🌍

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
