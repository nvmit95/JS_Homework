var addButton = document.getElementById('add_button');

var table = document.getElementById('table');

function addRow() {
  var rowCollection = document.getElementsByTagName('tr');
  var row = rowCollection[0];
  var newRow = row.cloneNode(true);
  for (var i = 0; i < newRow.children.length; i++) {
    newRow.children[i].innerHTML = '';
  }
  row.parentNode.insertBefore(newRow, row);
}

addButton.addEventListener('click', addRow);

table.addEventListener('click', function (event) {
  var target = event.target;

  if (target.tagName === 'TD') {
    var input = document.createElement('input');
    if (!target.textContent) {
      target.appendChild(input);
      input.focus();
      input.onblur = function () {
        target.textContent = input.value;
      };
    } else {
      input.value = target.textContent;
      target.textContent = null;
      target.appendChild(input);
      input.focus();
      input.onblur = function () {
        target.textContent = input.value;
      };
    }
  }
});

table.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
    event.target.onblur();
  }
});
