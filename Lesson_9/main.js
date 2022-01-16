function Animal(name) {
  var foodAmount = 50;

  var self = this;

  function formatFoodAmount() {
    return foodAmount + ' гр.';
  }

  self.dailyNorm = function (amount) {
    if (!arguments.length) return formatFoodAmount();

    if (amount < 50) {
      throw new Error('Значение должно быть больше 50');
    }

    if (amount > 100) {
      throw new Error('Значение должно быть меньше 100');
    }
    foodAmount = amount;
  };

  self.name = name;

  self.feed = function () {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
  };
}

function Cat() {
  Animal.apply(this, arguments);

  var animalFeed = this.feed;

  this.feed = function () {
    animalFeed();
    console.log('Кот доволен ^_^');
    return this;
  };
  this.stroke = function () {
    console.log('Гладим кота.');
    return this;
  };
}

var barsik = new Cat('Барсик');

// console.log(barsik.dailyNorm(55));
// console.log(barsik.dailyNorm());
// console.log(barsik.feed());
// console.log(barsik.feed().stroke().stroke().stroke().feed().feed());
