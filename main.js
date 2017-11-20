"use strict";
(function(){
  var numSquare = 6;
var square = document.querySelectorAll('.square');
var displayColor = document.querySelector('.displayColor');
var h1 = document.querySelector('h1');
var message = document.querySelector('.message');
var resetBtn = document.querySelector('#reset');
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');
var modeBtn = document.querySelectorAll('.mode');
// console.log(square);
var colors = randomColors(numSquare);
var pickedColor = colors[pickedRandomNumber()];
displayColor.textContent = pickedColor;
//mode button
for( var i = 0; i < modeBtn.length; i++ ) {
  modeBtn[i].addEventListener('click', function(){
    message.textContent = '';
    resetBtn.textContent = 'New Colors';
    easyBtn.classList.remove('selected');
    hardBtn.classList.remove('selected');
    this.classList.add('selected');
    numSquare = ( this.textContent === 'Easy' ) ? 3 : 6;
    reset();
  });
}

// reset btn
resetBtn.addEventListener('click',function(){
this.textContent = 'New Colors';
message.textContent = "";
reset();
});

function reset(){
  colors = randomColors(numSquare);
pickedColor = colors[pickedRandomNumber()];
displayColor.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
      if(colors[i]) {
        square[i].style.display = 'block';
        square[i].style.backgroundColor = colors[i];
      } else {
        square[i].style.display = 'none';
      }
    }
} //end of reset function


for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];
  square[i].addEventListener("click", function(){
    var chosenColor = this.style.backgroundColor;
    this.addClass = 'selected';
    if( chosenColor.replace(/\s+/g,'') === pickedColor.replace(/\s+/g,'') ) {
      resetBtn.textContent = "Play Again?";
      h1.style.backgroundColor = pickedColor;
      message.textContent = "You'er right";
      matchColor(pickedColor);
    } else {
      this.style.backgroundColor = '#232323';
      message.textContent = "Try again";
    }
  });
}
function matchColor( color ) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}

function pickedRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
function randomColors(number){
  var colors = [];
  for (var i = 0; i < number; i++) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var colorString = 'rgb(' + r + ',' + g + ',' + b + ")";
    colors.push(colorString);
  }
  return colors;
}

})();
