

var wins = 0;
var losses=0;
var target=0;
var userTotal=0;
var gameOver=false;
var gem=[0, 0, 0, 0];


function reset() {
   
    for (var i=0;
    i < gem.length;
    i++) {
        gem[i]=(Math.floor((Math.random() * 12) + 1));
    }
}