var firstParagraph = document.createElement('p');
var secondParagraph = document.createElement('p');
var container = document.getElementById('container');
var buttonCollection = document.getElementsByTagName('button');

container.appendChild(firstParagraph);

container.appendChild(secondParagraph);

firstParagraph.innerHTML +=
  'Привет!' +
  ' <a href="https://www.google.by/">Link1</a>' +
  ' <a href="https://yandex.by/">Link2</a>';

secondParagraph.innerHTML +=
  'Пока!' +
  ' <a href="https://www.google.by/">Link3</a>' +
  ' <a href="https://yandex.by/">Link4</a>';

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
    if (localStorage.getItem(target.innerText) === null) {
      obj = {};
      obj.path = target.href;
      localStorage.setItem(target.innerText, JSON.stringify(obj));
      target.attributes.href.value = '#';
      alert('Информация о ссылке сохранена!');
    } else {
      console.log(event);
      var objValue = JSON.parse(localStorage.getItem(target.innerText));
      alert(objValue.path);
      localStorage.clear();
    }
  }
});

window.onload = function () {
  localStorage.clear();
};
