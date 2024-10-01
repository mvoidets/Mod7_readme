// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return 'https://img.shields.io/badge/License-MIT-yellow.svg';
      case 'Apache':
        return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      case 'GPL':
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      case 'BSD':
        return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
      default:
        return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    }
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there are no licenses, return an empty string
function renderLicenseSection(licenses) {
  if (Array.isArray(licenses) && licenses.length > 0) {
    return licenses.map(license => {
      const badge = renderLicenseBadge(license);
      const link = renderLicenseLink(license);
      return `This project is licensed under the ${license} license.

![License Badge](${badge})

[Learn more about ${license} license](${link})

`;
    }).join('\n');
  } else {
    return 'This is not licensed';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
   ${data.title}

  ## Table of Contents

  - [Description](#description)
  - [Design](#design)
  - [Install](#install)
  - [Contributor](#contributor)
  - [License](#license)
  - [Questions](#questions)


  ## Description

   ${data.description}

  ## Design

    ${data.design}

  ## Install

    ${data.install}

  ## Contributor

    ${data.contributor}

  ## License

    ${renderLicenseSection(data.licenses)}  

  ### Questions

  If you have any questions, please contact me at: [${data.email}] (mailto:mvoidets@yahoo.com). \n
  My GitHub profile is [${data.github}](https://guthub.com/${data.github}).\n
  Thank you for visiting my repository!`;

  
}

export default generateMarkdown;
