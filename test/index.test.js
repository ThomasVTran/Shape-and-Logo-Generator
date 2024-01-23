const Inquirer = require('../index.js');

describe('Inquirer', () => {

    describe('Valid Text Length', () => {
      it('should return true if 3 or less characters', () => {
        const inquirer = new Inquirer();
        const result = inquirer.text('SVG');

        expect(result).toBe(true);
    })
    describe('Text Length', () => {
        it('should return false if more than 3 characters', () => {
          const inquirer = new Inquirer();
          const result = inquirer.text('FLAG');
  
          expect(result).toBe(false);
        })
      })
    })
    describe('Valid Text Color', () => {
      it('should return true if color is applicable', () => {
        const inquirer = new Inquirer();
        const result = inquirer.text('#ffff');

        expect(result).toBe(true);
      })
    })
    describe('Text Color', () => {
      it('should return false if color is not applicable', () => {
        const inquirer = new Inquirer();
        const result = inquirer.text('ffff');

        expect(result).toBe(false);
      })
    })
    describe('Valid Shape', () => {
      it('should return true if shape is one of three', () => {
        const inquirer = new Inquirer();
        const result = inquirer.text('circle');

        expect(result).toBe(true);
      })
    })
    describe('Shape', () => {
      it('should return false if not the right shape', () => {
        const inquirer = new Inquirer();
        const result = inquirer.text('hexagon');

        expect(result).toBe(false);
      })
    })
    describe('Valid Shape Color', () => {
      it('should return true if color is applicable', () => {
        const inquirer = new Inquirer();
        const result = inquirer.text('#ffff');

        expect(result).toBe(true);
      })
    })
      describe('Shape Color', () => {
        it('should return false if color is not applicable', () => {
          const inquirer = new Inquirer();
          const result = inquirer.text('ffff');
  
          expect(result).toBe(false);
        })
      })
    });