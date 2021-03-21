const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER =0;
const MAXIMUM_AGE = 30;
const MINIMUM_AGE =0;


function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}
Pet.prototype = {
    get isAlive() {
      if (this.fitness <= MINIMUM_FITNESS) {
        return false;
      }
      if (this.hunger >= MAXIMUM_HUNGER) {
        return false;
      }
      if (this.age >= MAXIMUM_AGE) {
        return false;
      }
      return true;
    },
  };
Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      };
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
}
Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      };
    if ((this.fitness + 4) <= MAXIMUM_FITNESS){
            this.fitness += 4;
        } else {
            this.fitness = MAXIMUM_FITNESS;
}
Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      };
    if ((this.hunger - 3) >= MINIMUM_HUNGER){
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
}
Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      };
    if (this.fitness <= 3 && this.hunger >= 5){
        return "I am hungry AND I need a walk";
    } else if (this.hunger >= 5){
        return "I am hungry";
    } else if (this.fitness <= 3){
        return "I need a walk";
    }
    return  "I feel great!";
}
Pet.prototype.adoptChild = function(child) {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      };
    return this.children = [child];
}
}};
module.exports = Pet;