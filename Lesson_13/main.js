//Task №1

function transformInObj(arr) {
  return arr.map(function (item) {
    var newObj = {};
    newObj['name'] = item;
    return newObj;
  });
}

console.log(transformInObj(['Nikita', 'Alexandr', 'Kostya', 'Ivan', 'Lena']));

//Task №2

function transformHoursInStr(arr) {
  return arr.reduce(function (str, item) {
    return str + ' : ' + item;
  }, 'Текущее время');
}

console.log(transformHoursInStr(['00', '13', '24']));

//Task №3

function findVowels(text) {
  text = text.toLowerCase();
  var count = 0;
  var vowles = ['a', 'e', 'i', 'o', 'u', 'y'];
  for (var i = 0; i < text.length; i++) {
    if (vowles.indexOf(text[i]) >= 0) {
      count++;
    }
  }
  return count;
}

console.log(findVowels('HellO World'));

//Task №4

function countSentencesLetters(text) {
  var newArray = text.split(/[?!.]/g).filter(function (item) {
    return item;
  });
  newArray.forEach(function (str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === ' ' || str[i] === ',') continue;
      count++;
    }
    console.log(str + ': Letters quantity is: ' + count);
  });
}

console.log(
  countSentencesLetters('Привет, студент! Студент... Как дела, студент?')
);

//Task №5*

function countRepeatedWord(text) {
  var duplicates = {};

  var newArray = text
    .toLowerCase()
    .split(/[\s,.!?]/g)
    .filter(function (item) {
      return item;
    });

  for (var i = 0; i < newArray.length; i++) {
    var count = 0;
    for (var j = 0; j < newArray.length; j++) {
      if (newArray[i] === newArray[j]) {
        count++;
        if (count > 1) {
          duplicates[newArray[i]] = count;
        }
      }
    }
  }

  var arr = [];

  var num = 0;

  for (var key in duplicates) {
    num = Math.max(duplicates[key], num);
  }

  for (var key in duplicates) {
    if (duplicates[key] !== num) {
      delete duplicates[key];
    } else {
      arr.push(key);
    }
  }

  return (
    'Максимальное количество повторений у слова ' +
    arr[0] +
    ': ' +
    duplicates[arr[0]]
  );
}

console.log(
  countRepeatedWord(
    'Вот дом, который построил Джек. А это пшеница, которая в темном чулане хранится. В доме, который построил Джек. А это веселая птица-синица, которая часто ворует пшеницу, которая в темном чулане хранится. В доме, который построил Джек, Джек, Джек, который, который, построил, построил.'
  )
);
