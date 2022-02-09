var inputCollection = document.getElementsByTagName('input');
var inputX = inputCollection[0];
var inputY = inputCollection[1];
var createButton = document.getElementsByTagName('button')[0];
var container = document.getElementsByClassName('container')[0];

createButton.disabled = true;

function disableButton(){
    if (inputCollection[0].value === '' || inputCollection[1].value === ''){
        createButton.disabled = true; 
    } else {
        createButton.disabled = false; 
    }
}

for(var i = 0; i < inputCollection.length; i++){
    inputCollection[i].addEventListener('keyup', disableButton);
};


function createChessBoard(){
    var valueX = inputCollection[0].value;
    var valueY = inputCollection[1].value;
    var validatedInputs = 0;
    
    for(var i = 0; i < inputCollection.length; i++){
        if(isNaN(+(inputCollection[i].value)) || inputCollection[i].value < 1 || inputCollection[i].value > 10){
            alert('Введите корректное значение в поле ' + inputCollection[i].parentNode.textContent + 'целое число от 1 до 10');
            inputCollection[i].value = null;
            createButton.disabled = true;
        } else {
            validatedInputs++;
        }
    }

    if(validatedInputs < 2) return;

    var tableExist = document.getElementById('table');
    if(tableExist){
        container.removeChild(container.lastChild);
    }

    var table = document.createElement('table');
    table.setAttribute('id', 'table');

    for(var i = 0; i < valueY; i++){
        var row = document.createElement('tr');

        for(var j = 0; j < valueX; j++){
            var cell = document.createElement('td');

            if((j % 2 === 0 && i % 2 === 0) || (j % 2 !== 0 && i % 2 !== 0)) {
                cell.style.background = "white";
            } else  if ((j % 2 === 0 && i % 2 !== 0) || (j % 2 !== 0 && i % 2 === 0)){
                cell.style.background = "black";
            }
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    container.appendChild(table);
    
    for(var i = 0; i < inputCollection.length; i++){
        inputCollection[i].value = null;
    }
    createButton.disabled = true;

    table.addEventListener('click', function(event){
        if(event.target.tagName === 'TD'){
            var allCells = document.getElementsByTagName('td');
            for(var i = 0; i < allCells.length; i++){
                if(allCells[i].style.background === 'white') {
                    allCells[i].style.background = 'black';
                } else {
                    allCells[i].style.background = 'white';
                }
            }
        }
    })
}

createButton.addEventListener('click', createChessBoard);