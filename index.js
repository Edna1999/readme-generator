// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
inquirer
.prompt([
     {
      type:'input',
      name:'username',
      message: 'What is your github username?',
      validate: (value) => {if(value){return true} else{return ""}}
    },
    {
        type:'input',
        name:'email',
        message: 'What is your email address?',
        validate: (value) => {if(value){return true} else{return ""}}
  
    },
    {
        type:'input',
        name:'title',
        message: 'What is the project title?',
        validate: (value) => {if(value){return true} else{return ""}}
  
      },
      {
        type:'input',
        name:'description',
        message: 'Give a description of this project.',
        validate: (value) => {if(value){return true} else{return ""}}
  
      },
      {
        type:'input',
        name:'installation',
        default:'npm i',
        message: 'What commands should be run to install dependencies?',
        validate: (value) => {if(value){return true} else{return ""}}
  
      },
      {
        type:'input',
        name:'usage',
        message: 'What will this project be used for?',
        validate: (value) => {if(value){return true} else{return ""}}
  
      },
      {
        type:'list',
        name:'license',
        message: 'Which license is used?', 
        choices:['MPL_License', 'MIT_License', 'Apache_License', 'BSD_License', 'LGPL_License'],
        validate: (value) => {if(value){return true} else{return ""}}
  
      },
      {
      type:'input',
      name:'contribution',
      message: 'What was your contribution?', 
      validate: (value) => {if(value){return true} else{return ""}}
      },
      {
        type:'input',
        name:'test',
        message: 'How can we test the project?', 
        validate: (value) => {if(value){return true} else{return ""}}
        },
    ])

// TODO: Create a function to write README file
.then((answers) => {
    const readmeFile = init(answers);

    fs.writeFile('README.md', readmeFile, (err) => {
    
        err ? console.log('error!') : console.log('success!');
    
        
    })
})

// TODO: Create a function to initialize app
function init(answers) {
return `
 ![alt text](https://img.shields.io/badge/license-${answers.license}-blueviolet)
 # ${answers.title}
 ## Tables of content
 >- [Description](#description)
 >- [Usage](#usage)
 >- [Contribution](#contribution)
 >- [Installation](#installation)
 >- [License](#license)
 >- [Questions](#questions)
 ## Description
 >${answers.description}
 ## Usage
 >${answers.usage} 
 ## Installation 
 ${answers.installation}
 ## Test
 >${answers.test}
 ## Contribution
 ${answers.contribution}
 ## License
 ${answers.license}
 ## Questions
 If you have any questions you can reach me at:
 ### Email: ${answers.email}
 ### Github : ${answers.username}
    `
}  



