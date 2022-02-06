var firstParagraph = document.createElement('p');
var secondParagraph = document.createElement('p');
var container = document.getElementById('container');
var buttonCollection = document.getElementsByTagName('button');

container.appendChild(firstParagraph);

container.appendChild(secondParagraph);

firstParagraph.innerHTML +=
  'Привет!' +
  ' <a href="https://www.google.by/">google</a>' +
  ' <a href="https://yandex.by/">yandex</a>';

secondParagraph.innerHTML +=
  'Пока!' +
  ' <a href="https://www.google.by/">google</a>' +
  ' <a href="https://yandex.by/">yandex</a>';

function changeColorAndWeight() {
  var arr = firstParagraph.children;
  for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add('links-style');
  }
}

for (var i = 0; i < buttonCollection.length; i++) {
  buttonCollection[i].onclick = changeColorAndWeight;
}

secondParagraph.addEventListener('click', function (event) {
  var target = event.target;
  if (target.tagName === 'A') {
    event.preventDefault();
    alert(target.attributes.href.value);
  }
});
