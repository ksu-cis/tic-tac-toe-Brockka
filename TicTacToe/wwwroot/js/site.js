// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('dragenter', onDragEnter);
    squares[i].addEventListener('drop', onDrop);
    squares[i].addEventListener('dragleave', onDragLeave);
}

function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
}

function onDragStart(event) {
    console.log(event.target.dataset);
    dragging = {
        x: event.target.dataset.x,
        y: event.target.dataset.y
    }
    
}

function onDragDrop(event) {
    console.log(event);
}


function onDragLeave(event) {
    event.target.style.backgroundColor = null;
}















/*
var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn";
}

function setWinner(winner) {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "Player " + winner + " Wins!";
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");

    //Check horizontal cells
    for (var i = 0; i < 9; i += 3) {
        if (cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[0+i].innerText);
            return true;
        }
    }
    //Check verical cells
    for (var j = 0; j < 3; j ++) {
        if (cells[0 + j].innerText === cells[3 + j].innerText && cells[3 + j].innerText === cells[6 + j].innerText) {
            setWinner(cells[j].innerText);
            return true;
        }
    }

    //Check diagonal
    if (cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) {
        setWinner(cells[8].innerText);
        return true;
    }
    if (cells[6].innerText === cells[2].innerText && cells[6].innerText === cells[4].innerText) {
        setWinner(cells[6].innerText);
        return true;
    }

    return false;

}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o";
        }
        else {
            turn = "x";
        }
        if (!checkForWin()) {
            setTurn();
        }
        
    }
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}

setTurn();
*/