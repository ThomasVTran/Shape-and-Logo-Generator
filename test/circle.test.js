const Circle = require('../lib/shapes/circle')
describe('Circle', () => {

    describe('Valid Text Length', () => {
        it('should return true if 3 or less characters', () => {
            const circle = new Circle("blue", "#ffffff", "SVG");
            expect(circle.text).toBe("SVG");
        })
    })
    describe('Valid Text Color', () => {
        it('should return true if color is applicable', () => {
            const circle = new Circle("blue", "#ffffff", "SVG");
            expect(circle.keyColor).toBe("#ffffff");
        })
    })
    describe('Valid Shape', () => {
        it('should return true if shape is one of three', () => {
            const circle = new Circle("blue", "#ffffff", "SVG");
            expect(circle.generateCircle()).toBe(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="blue"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="#ffffff">SVG</text> </svg>`);
        })
    })
    describe('Valid Shape Color', () => {
        it('should return true if color is applicable', () => {
            const circle = new Circle("blue", "#ffffff", "SVG");
            expect(circle.shapeColor).toBe("blue");
        })
    })
});