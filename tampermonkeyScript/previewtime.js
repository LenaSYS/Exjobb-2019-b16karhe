// ==UserScript==
// @name         Previewtime
// @version      13.37
// @author       Karl Hermansson (b16karhe)
// @match        http://localhost:5000/angular/
// @match        http://localhost:5000/vue/
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var $ = window.jQuery;
var stop;
var start;
var i = 0;
var counter = 0;
var x = document.getElementsByClassName("radioLabel");

$(".radioLabel").off().on("click", function() {
    start = performance.timing.navigationStart + performance.now();
});
$("body").on('DOMSubtreeModified', "#newLabel", function() {
    stop = performance.timing.navigationStart + performance.now();
    var diff = stop - start;
    localStorage.setItem("diff" + counter, diff);
    counter++;
    if(counter == 100){
        var data = "";
        for(let i = 0; i < counter; i++){
            data += localStorage.getItem("diff" + i) + "\n";
        }
        console.log(data);
        clearInterval(intervalID);
    }
});
var intervalID = setInterval(function(){ $(x[i]).click(); i = Math.floor(Math.random() * 5);}, 500);
