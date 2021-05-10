const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });

  it("has a initial age of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  });
  it("has a initial hunger of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.hunger).toEqual(0);
  });
  it("has a initial fitness of 10", () => {
    const pet = new Pet("Fido");

    expect(pet.fitness).toEqual(10);
  });
});
describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
  it("increments the hunger by 5", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });
  it("decrease the fitness by 3", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });

  describe("walk", () => {
    it("increase the pets fitness by 4", () => {
      const pet = new Pet("Fido");

      pet.fitness = 6;

      pet.walk();

      expect(pet.fitness).toEqual(10);
    });
    it("increases fitness by to a maximum of 10", () => {
      const pet = new Pet("fido");

      pet.fitness = 8;

      pet.walk();

      expect(pet.fitness).toEqual(10);
    });
    it("throw an error if pet is not alive", () => {
      const pet = new Pet("fido");

      pet.age = 30;

      expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
    });
    describe("feed", () => {
      it("decrease the pets hunger by 3", () => {
        const pet = new Pet("Fido");

        pet.hunger = 5;

        pet.feed();

        expect(pet.hunger).toEqual(2);
      });
      it("decrease hunger by minimum of 0", () => {
        const pet = new Pet("fido");

        pet.hunger = 2;

        pet.feed();

        expect(pet.hunger).toEqual(0);
      });
      it("throw an error if pet is not alive", () => {
        const pet = new Pet("fido");

        pet.age = 30;

        expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
      });
      describe("checkUp", () => {
        it('returns "I am hungry AND I need a walk" if pets fitness is 3 or less and pets hunger is 5 or more', () => {
          const pet = new Pet("fido");

          pet.hunger = 5;
          pet.fitness = 3;

          expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
        });
        it('returns "I am hungry" if pets hunger is 5 or more', () => {
          const pet = new Pet("fido");

          pet.hunger = 7;

          expect(pet.checkUp()).toBe("I am hungry");
        });
        it('returns "I need a walk" if pets fitness is 3 or less', () => {
          const pet = new Pet("fido");

          pet.fitness = 1;

          expect(pet.checkUp()).toBe("I need a walk");
        });
        it('returns "I feel great!" if pets fitness is 3 or more and pets hunger is 5 or less', () => {
          const pet = new Pet("fido");

          pet.fitness = 5;
          pet.hunger = 2;

          expect(pet.checkUp()).toBe("I feel great!");
        });
        it('returns "Your pet is no longer alive :(" if pets fitness is 3 or less and pets hunger is 5 or more', () => {
          const pet = new Pet("fido");

          pet.age = 30;

          expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
        });
        describe("isAlive", () => {
          it("returns false if pets fitness is 0 or less", () => {
            const pet = new Pet("fido");

            pet.fitness = 0;

            expect(pet.isAlive).toBe(false);
          });
          it("returns false if pets hunger is 10 or more", () => {
            const pet = new Pet("fido");

            pet.hunger = 12;

            expect(pet.isAlive).toBe(false);
          });
          it("returns false if pets age is 30 or more", () => {
            const pet = new Pet("fido");

            pet.age = 34;

            expect(pet.isAlive).toBe(false);
          });
          it("returns true otherwise", () => {
            const pet = new Pet("fido");

            pet.fitness = 5;
            pet.hunger = 8;
            pet.age = 24;

            expect(pet.isAlive).toBe(true);
          });
          describe("adopts a child", () => {
            const pet = new Pet("fido");
            let child;
            child = new Pet("Amelia");

            it("returns adopted child", () => {
              expect(pet.adoptChild(child)).toEqual([
                { name: "Amelia", age: 0, hunger: 0, fitness: 10 },
              ]);
              expect(pet.children[0].name).toEqual("Amelia");
            });

            it("fails adoption if pet is dead", () => {
              pet.age = 30;
              expect(() => pet.adoptChild(child)).toThrow(
                "Your pet is no longer alive :("
              );
            });
          });
        });
      });
    });
  });
});
