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
  if (target.tagName.toLowerCase() === 'td') {
    if (target.children.length < 1) {
      var input = document.createElement('input');
      input.setAttribute('contenteditable', 'true');
      input.value = target.innerHTML;
      target.appendChild(input);
      input.focus();
      input.onblur = function () {
        input.style.border = 'none';
      };
    }
  }
});
