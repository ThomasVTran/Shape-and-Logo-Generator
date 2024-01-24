// TODO: Include packages needed for this application
const Circle = require('./lib/shapes/circle')
const Square = require('./lib/shapes/square')
const Triangle = require('./lib/shapes/triangle')
const inquirer  = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
inquirer
.prompt([
    // 
    {
        name: 'text',
        type: 'input',
        message:'Enter up to 3 characters for text?'
    },
    {
        name: 'keyColor',
        type: 'input',
        message:'What color would you like to make your text?(use hexidecimal colors)'
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
        message:'What color do you want your shape?(use hexidecimal colors)'
    }
])
.then((data)=>{
    let userShape;
    if (data.shape === 'Circle') {
        userShape = new Circle(data.shapeColor, data.keyColor, data.text).generateCircle()
    } else if (data.shape === 'Square'){
        userShape = new Square(data.shapeColor, data.keyColor, data.text).generateSquare()
    } else if (data.shape === 'Triangle'){
        userShape = new Triangle(data.shapeColor, data.keyColor, data.text).generateTriangle()
    }
    // TODO: Create a function to write svg file
     fs.writeFile( './output/logo.svg', userShape ,(err) =>
        err ? console.error(err) : console.log('Success!')
    )
});