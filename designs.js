// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function cellColor(e){
	//if BG is set, change color back to white
	if(e.className === 'clicked'){
		e.style.backgroundColor = '#FFFF';
		e.className = 'colorCell';
		return true;
	}

	let color;
	color = document.getElementById('colorPicker').value;
	e.className = 'clicked';


	e.style.backgroundColor = color;
	return true;
}

function makeGrid() {
//e.preventDefault()
let inputHeight, inputWidth;

inputHeight = document.getElementById('inputHeight').value;
inputWidth = document.getElementById('inputWidth').value;
pixelCanvas =  document.getElementById('pixelCanvas');
let str;

str = '<tbody>';
//for the rows
for (var i = 1; i <= inputHeight ; i++) {
	str += '<tr>';
	//for the columns
	for (var x = 1; x <= inputWidth; x++) {
		str += '<td class="colorCell" onclick="cellColor(this)"></td>';
	}

	str += '</tr>';
}

str += '</tbody>';

pixelCanvas.innerHTML = str;
// Your code goes here!

}


