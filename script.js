const mainCon = document.querySelector('#mainCon')
    mainCon.style.height = '1200px';
    mainCon.style.width = '1200px';

// const newDiv = document.createElement('div')
// newDiv.classList.add('content');
// // newDiv.textContent = 'Hello World';

// const arrayVariable = ["One","Two","Three"]
const arrayLength = 4
const mainConWidth = 1200
let divWidthHeight = mainConWidth/arrayLength;

for (i= 0; i < arrayLength ; i++){
    row = document.createElement('div');
    // row.style.border = "thick solid green"
    // row.style.height = '50px'
    // row.style.width = '50px'
    for (j=0 ; j < arrayLength ; j++){
        column = document.createElement('div');
        column.className = "row";
        column.style.border = "0.1px solid pink"
        column.style.height = divWidthHeight-0.05 + 'px'
        column.style.width = divWidthHeight-0.05 + 'px'
        // temp.innerHTML = arrayVariable[j];
        row.appendChild(column);
    }
    mainCon.appendChild(row);
}

// mainCon.appendChild(newDiv);