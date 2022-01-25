//Task №1

//variant №1

var newArr = [-1, 0, 2, 34, -2];
var filterNumbersArr = newArr.filter(function (number) {
  return number > 0;
});

console.log(filterNumbersArr);

//variant №2 ES6

function filterNumbersArr(numbers) {
  return numbers.filter((el) => el > 0);
}

// filterNumbersArr([-1, 0, 2, 34, -2]);

//Task №2

var newArr = [-1, 0, 2, 34, -2];

function findNumber(arr) {
  return arr.find(function (number) {
    return number > 0;
  });
}

console.log(findNumber(newArr));

//Task №3

function isPalindrome(word) {
  var wordReverse = word.split('').reverse().join('');
  return word.toLowerCase() === wordReverse.toLowerCase();
}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));

//Task №4

function areAnagrams(word1, word2) {
  word1 = word1.toLowerCase().split('').sort().join('');
  word2 = word2.toLowerCase().split('').sort().join('');
  return word1 === word2;
}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));

//Task №5

function divideArr(arr, num) {
  var result = [];

  for (var i = 0; i < arr.length; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
}

console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));
