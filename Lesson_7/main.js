function changeObject(obj) {
  var names = [];
  var duplicates = {};
  for (var key in obj) {
    obj[key + '_length'] = obj[key].length;

    names.push(obj[key]);

    delete obj[key];
  }

  for (var i = 0; i < names.length; i++) {
    var count = 0;
    for (var j = 0; j < names.length; j++) {
      if (names[i] === names[j]) {
        count++;
        if (count > 1) {
          duplicates[names[i]] = count + ' times';
        }
      }
    }
  }

  obj['Duplicated values'] = duplicates;
  return obj;
}

// console.log(
//   changeObject({
//     name_one: 'Vasya',
//     name_two: 'Piotr',
//     name_three: 'Fedya',
//     name_four: 'Piotr',
//    name_four: 'Piotr',
//   })
// );
