const Square = require('../lib/shapes/square')
describe('Square', () => {

    describe('Valid Text Length', () => {
      it('should return true if 3 or less characters', () => {
        const square = new Square("blue", "#ffffff", "SVG");
        expect(square.text).toBe("SVG");
        })
    })
    describe('Valid Text Color', () => {
      it('should return true if color is applicable', () => {
        const square = new Square("blue", "#ffffff", "SVG");
        expect(square.keyColor).toBe("#ffffff");
      })
    })
    describe('Valid Shape', () => {
      it('should return true if shape is one of three', () => {
        const square = new Square("blue", "#ffffff", "SVG");
        expect(square.generateSquare()).toBe(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="20" height="200" width="200" fill="blue"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="#ffffff">SVG</text> </svg>`);
      })
    })
    describe('Valid Shape Color', () => {
      it('should return true if color is applicable', () => {
        const square = new Square("blue", "#ffffff", "SVG");
        expect(square.shapeColor).toBe("blue");
      })
    })
    });