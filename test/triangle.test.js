const Triangle = require('../lib/shapes/triangle')
describe('Triangle', () => {

    describe('Valid Text Length', () => {
      it('should return true if 3 or less characters', () => {
        const triangle = new Triangle("blue", "#ffffff", "SVG");
        expect(triangle.text).toBe("SVG");
        })
    })
    describe('Valid Text Color', () => {
      it('should return true if color is applicable', () => {
        const triangle = new Triangle("blue", "#ffffff", "SVG");
        expect(triangle.keyColor).toBe("#ffffff");
      })
    })
    describe('Valid Shape', () => {
      it('should return true if shape is one of three', () => {
        const triangle = new Triangle("blue", "#ffffff", "SVG");
        expect(triangle.generateTriangle()).toBe(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <polygon points="150,0 20,200 290,200" fill="blue"/> <text x="150" y="135" font-size="60" text-anchor="middle" fill="#ffffff">SVG</text> </svg>`);
      })
    })
    describe('Valid Shape Color', () => {
      it('should return true if color is applicable', () => {
        const triangle = new Triangle("blue", "#ffffff", "SVG");
        expect(triangle.shapeColor).toBe("blue");
      })
    })
    });