const Shape = require('../lib/shapes/shape')
describe('Shape', () => {
    it('should be a selected shape', () => { 
        const someShape = Shape;
        const shape = new Shape('blue', '#ffffff', 'SVG');
        expect(shape).toBeInstanceOf(Shape)
    })
})