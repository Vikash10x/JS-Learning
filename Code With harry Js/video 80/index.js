// let obj = {
//   a: 5,
//   b: 4,
// };

// console.log(obj);

// let rabbit = {
//   eats: true,
// };

// let animal = {
//   jumps: true,
// };

// rabbit.__protp__ = animal;

class Animal {
  constructor(name) {
    this.name = name;
    console.log("object is created...");
  }
  eats() {
    console.log("khaa raha hu");
  }
  jump() {
    console.log("kood raha hu");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("object is created...");
  }

  eats() {
    super.eats();
    console.log("khaa raha hu rore..");
  }
}

let a = new Animal("bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);
