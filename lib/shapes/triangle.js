const Shape = require('./shape')
class Triangle extends Shape{
    constructor (shapeColor, keyColor, text){
        super(shapeColor, keyColor, text)
    }
    // methods go here
    generateTriangle(){
        return `<svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
   
     <polygon points="150,0 20,200 290,200" fill="${this.shapeColor}" />
   
     <text x="150" y="135" font-size="60" text-anchor="middle" fill="${this.keyColor}">${this.text}</text>
   
   </svg>
   `
    }
}
module.exports = Triangle;