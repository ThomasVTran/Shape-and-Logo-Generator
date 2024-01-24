const Shape = require('./shape')
class Square extends Shape{
    constructor (shapeColor, keyColor, text){
        super(shapeColor, keyColor, text)
    }
    // methods go here
    generateSquare(){
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="20" height="200" width="200" fill="${this.shapeColor}"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.keyColor}">${this.text}</text> </svg>`
    }
}
module.exports = Square;