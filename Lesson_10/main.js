//Task №1

function Animal(name) {
  this._foodAmount = 50;
  this.name = name;
}

Animal.prototype._formatFoodAmount = function () {
  return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function (amount) {
  if (!arguments.length) return this._formatFoodAmount();

  if (amount < 50) {
    throw new Error('Значение должно быть больше 50');
  }

  if (amount > 100) {
    throw new Error('Значение должно быть меньше 100');
  }
  this._foodAmount = amount;
};

Animal.prototype.feed = function () {
  console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat() {
  Animal.apply(this, arguments);
  this._animalFeed = Animal.prototype.feed;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
  this._animalFeed();
  console.log('Кот доволен ^_^');
  return this;
};
Cat.prototype.stroke = function () {
  console.log('Гладим кота.');
  return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.dailyNorm(55));
console.log(barsik.dailyNorm());
console.log(barsik.feed());
console.log(barsik.feed().stroke().stroke().stroke().feed().feed());

//Task №2

function deepClone(obj, target) {
  var copy = target || {};

  for (var key in obj) {
    if (typeof obj[key] !== 'object') {
      copy[key] = obj[key];
    } else {
      copy[key] = Array.isArray(obj[key]) ? [] : {};
      deepClone(obj[key], copy[key]);
    }
  }

  return copy;
}

//Task №3

function deepEqual(a, b) {
  const isObject = typeof a === 'object' && typeof b === 'object';

  if (isObject) {
    for (var key in a) {
      if (!b.hasOwnProperty(key)) return false;
      if (
        typeof a[key] === 'object' &&
        typeof b[key] === 'object' &&
        Object.keys(a).length === Object.keys(b).length
      ) {
        var result = deepEqual(a[key], b[key]);
        if (!result) return false;
      } else {
        if (a[key !== b[key]]) return false;
      }
    }

    return true;
  } else {
    return a === b;
  }
}

// var initialObj = {
//   string: 'Vasya',
//   number: 30,
//   boolean: true,
//   undefined: undefined,
//   null: null,
//   array: [1, 2, 3],
//   object: {
//     string2: 'Petrov',
//     object2: {
//       array2: [{}, {}],
//     },
//     object3: {},
//   },
//   method: function () {
//     alert('Hello');
//   },
// };

// var initialObj2 = {
//   string: 'Vasya',
//   number: 30,
//   boolean: true,
//   undefined: undefined,
//   null: null,
//   array: [1, 2, 3],
//   object: {
//     string2: 'Petrov',
//     object2: {
//       array2: [{}, {}],
//     },
//     object3: {},
//   },
//   method: function () {
//     alert('Hello');
//   },
// };

// console.log(deepEqual(initialObj, initialObj2));
// console.log(deepEqual({ a: 1, b: 2, c: 3}, {a: 1, b: 2}));