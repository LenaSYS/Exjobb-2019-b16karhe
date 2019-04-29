// ==UserScript==
// @name         Previewtime
// @version      133.7
// @author       Karl Hermansson (b16karhe)
// @match        http://localhost:5000/angular/
// @match        http://localhost:5000/vue/
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require http://cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.1/seedrandom.min.js
// ==/UserScript==

var $ = window.jQuery;
var stop;
var start;
var i = 0;
var counter = 0;
var radioLabel = document.getElementsByClassName("radioLabel");
Math.seedrandom(1337);

$(".radioLabel").off().on("click", function() {
    start = performance.timing.navigationStart + performance.now();
});
$("body").on('DOMSubtreeModified', "#newLabel", function() {
    stop = performance.timing.navigationStart + performance.now();
    var diff = stop - start;
    localStorage.setItem("diff" + counter, diff);
    counter++;
    if(counter == 101){
        var data = "";
        for(let i = 1; i < counter; i++){
            data += localStorage.getItem("diff" + i) + "\n";
        }
        console.log(data);
        clearInterval(intervalID);
    }
});
var intervalID = setInterval(function(){ $(radioLabel[i]).click(); i = Math.floor(Math.random() * 5);}, 500);
