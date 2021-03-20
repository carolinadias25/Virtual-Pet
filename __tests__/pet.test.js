const Pet = require('../src/pet');

describe('constructor', () => {

    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it("sets the name property", () => {
      const pet = new Pet("Fido");
  
      expect(pet.name).toEqual("Fido");
    });

    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
    
        expect(pet.age).toEqual(0);
      });
      it('has a initial hunger of 0', () => {
        const pet = new Pet('Fido');
    
        expect(pet.hunger).toEqual(0);
      });
      it('has a initial fitness of 10', () => {
        const pet = new Pet('Fido');
    
        expect(pet.fitness).toEqual(10);
      });
  });
describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.hunger).toEqual(5);
      });
      it('decrease the fitness by 3', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.fitness).toEqual(7);
      });

describe('walk', () => {
        it('increase the pets fitness by 4', () => {
          const pet = new Pet('Fido');

          pet.fitness = 6;
      
          pet.walk();
      
          expect(pet.fitness).toEqual(10);
        });
        it('increases fitness by to a maximum of 10', () => {
            const pet = new Pet('fido');
        
            pet.fitness = 8;
            pet.walk();
        
            expect(pet.fitness).toEqual(10);
          });
});
});