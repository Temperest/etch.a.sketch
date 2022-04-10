const mainConHW = 800;


const mainCon = document.querySelector('#mainCon')
mainCon.style.height = mainConHW + 'px';
mainCon.style.width = mainConHW + 'px';

function creEtch(arrayLength) {
    let divWidthHeight = mainConHW / arrayLength;
    for (i = 0; i < arrayLength; i++) {
        row = document.createElement('div');
        for (j = 0; j < arrayLength; j++) {
            column = document.createElement('div');
            column.className = "etch";
            column.style.border = "0.1px solid pink"
            column.style.height = divWidthHeight - 0.05 + 'px'
            column.style.width = divWidthHeight - 0.05 + 'px'
            row.appendChild(column);
        }
        mainCon.appendChild(row);
    }
    playEtch()
}
creEtch(32);



function playEtch() {
    const etchs = document.querySelectorAll('.etch');
etchs.forEach((etch) => {
    etch.addEventListener('mouseover', () => {
        etch.style.backgroundColor = random_rgba() ;
    })
});
}



let divSize = 0;
let divSizeN = 0;
const sizeSeBtn = document.querySelector('.sizeSe');
sizeSeBtn.addEventListener('click', () => {


    divSize = prompt("Create Board with size: ", "0")
    divSizeN = parseInt(divSize);
    if (divSizeN > 100 || isNaN(divSizeN)) {
        alert('Board Size cannot exceed 100. \n enter a number 1-100:')
        return;
    } else if (divSizeN) {
        removeAllChildNodes(mainCon);
        creEtch(divSizeN);
    }
});

const removeCo = document.querySelector('.removeCo')
removeCo.addEventListener('click', () => {
    const etchs = document.querySelectorAll('.etch');
    etchs.forEach((etch) => {
            etch.style.backgroundColor = 'white';
        });
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
