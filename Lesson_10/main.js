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
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
  Animal.prototype.feed.apply(this, arguments);
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

var initialObj = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
    string2: 'Petrov',
    object2: {
      array2: [{}, {}],
    },
    object3: {},
  },
  method: function () {
    alert('Hello');
  },
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

//Task №3

function deepEqual(a, b) {
  var isObject = typeof a === 'object' && typeof b === 'object';

  if (Object.keys(a).length !== Object.keys(b).length) return false;

  if (isObject) {
    for (var key in a) {
      if (!b.hasOwnProperty(key)) return false;

      if (typeof a[key] === 'object' && typeof b[key] === 'object') {
        if (
          a[key] !== null &&
          b[key] !== null &&
          typeof a[key] !== 'function' &&
          typeof b[key] !== 'function'
        ) {
          if (!deepEqual(a[key], b[key])) {
            return false;
          }
        }
      } else {
        if (a[key] !== b[key]) {
          if (typeof a[key] === 'function' && typeof b[key] === 'function') {
            if (a[key].toString() !== b[key].toString()) {
              return false;
            }
          } else {
            return false;
          }
        }
      }
    }

    return true;
  } else {
    return a === b;
  }
}

var obj = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
    string2: 'Petrov',
    object2: {
      array2: [{ sport: 'football' }, {}],
    },
    object3: {},
  },
  method: function () {
    alert('Hello');
  },
};

console.log(deepEqual(initialObj, obj));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
