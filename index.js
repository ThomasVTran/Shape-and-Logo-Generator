// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const Inquirer  = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
Inquirer
.prompt([
    {
        name: 'text',
        type: 'input',
        message:'Enter up to 3 characters for prompt?'
    },
    {
        name: 'keyColor',
        type: 'input',
        message:'What color would you like to make your text?'
    },
    {
        name: 'shape',
        type: 'list',
        message:'Which shape would you like?',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        name: 'shapeColor',
        type: 'input',
        message:'What color do you want your shape?'
    }
])
.then((data)=>{
    // TODO: Create a function to write svg file
     fs.writeFile( './output/logo.svg', generateMarkdown(data) ,(err) =>
        err ? console.error(err) : console.log('Success!')
    )
});

module.exports = Inquirer;