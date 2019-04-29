// ==UserScript==
// @name         Reloadtime
// @version      133.7
// @author       Karl Hermansson (b16karhe)
// @match        http://localhost:5000/angular/
// @match        http://localhost:5000/vue/
// ==/UserScript==

    var counter = localStorage.getItem("counter");
    if(counter <= 100 || counter == null){
        var start = localStorage.getItem("start");
        var stop = performance.timing.navigationStart + performance.now();
        var diff = stop - start;
        localStorage.setItem("diff" + counter, diff);
        counter++;
        localStorage.setItem("counter", counter);
        window.location.reload();
    }
    else{
        var data = "";
        for(let i = 1; i < counter; i++){
            data += localStorage.getItem("diff" + i) + "\n";
        }
        console.log(data);
    }
