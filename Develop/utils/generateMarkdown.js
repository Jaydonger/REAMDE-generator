// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//const index = require('.index');

function getLicenseBadge(license) {
  // a switch statement to return the license badge with link.
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'GNU':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      default: 
      return ``
    }
    
  }
function getGH(github) {
  if(github === 'n/a') {
    return `n/a`
  } else {
    return `https://github.com/${github}`
  }
}
  
  function renderLicenseSection (license) {
    // 2nd switch statement to return license coverage.
    switch (license) {
      case 'MIT':
        return 'This application is covered under the MIT license'
      case 'Apache':
        return 'This application is covered under the Apache 2.0 license'
      case 'GNU':
        return 'This application is covered under the GNU GPL v3 license'
      case 'BSD':
        return 'This application is covered under the BSD 3-Clause license'
      default:
        return `n/a`
    }
  }
  
  // TODO: Create a function to generate markdown for README
function generateReadme({title, description, installation, usage, credits, license, contributing, tests, github, email}) {

return `# ${title} 
${getLicenseBadge(license)}

## Description

${description}
  
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage
${usage}

## Credits
${credits}

## License

${renderLicenseSection(license)}

## Contributing

${contributing}

## Tests
${tests}

## Questions

If you wish to contact me with any questions, my Email is: ${email}

You can also view my other works here: ${getGH(github)}
`;
}

module.exports = generateReadme;
