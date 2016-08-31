/****
// Project: Quote Generator
// Author: Brandon Pretelt
// Repo: https://github.com/brandonpretelt/random-quote-gen
****/

// This is a fun little project so I can practice my JavaScript.
// It's also to keep me from being super lazy... haha

var quotes = ["a warrior is as a warrior does", "here and now, breathe and relax", "the method is simple action", "a warrior acts and the fool reacts", "difficult roads often lead to beautiful destinations", "if there is now way, create one", "if you avoid conflict to keep peace, you start a war inside yourself"];


// var colors = ["blue", "teal", "purple", "darkred", "pink"];


// this function uses the random method of the Math object
// to randomize the indices of the array parameter that gets passed in

function randomize(a) {
    'use strict';
    return a[Math.floor(Math.random() * a.length)];
}


// this function just inserts the quote into the
// output.

function insertQuote() {
    'use strict';
    var o = _$(".quote-output");
        o.innerHTML = "<q class=\"bgColor\">" + randomize(quotes) + "</q>";
    // this.style.backgroundColor = randomize(colors);
}

// this function's purpose is to push a value
// from the #ayo textarea into the quotes array

function addYourOwn() {
    'use strict';
    var ayo = _$("#ayo").value;

    if (ayo === "") {
        var errSpn = document.createElement("span"), errMsg = document.createTextNode("Enter a value!");

        var div = _$(".no-err");

        div.classList.remove("no-err");
        div.classList.add("error-container");

        errSpn.appendChild(errMsg)
        div.appendChild(errSpn);

        return;
    } else if (ayo !== "") {
        var uQ = _$(".user-quote");
        quotes.push(ayo);
        uQ.innerHTML += "<q class=\"bgColor\">" + _$("#ayo").value  + "</q>";
        _$("#ayo").value = "";


    }

}

// jQuery-like selector function. I will use an underscore$ instead
// of a $ symbol

function _$(selector) {
    'use strict';
    return document.querySelector(selector);
}

// checks to see if "addEventListener" method exists

if (document.addEventListener) {
    _$("button").addEventListener("click", insertQuote, false);
    _$("#ayoBtn").addEventListener("click", addYourOwn, false);
} else {
    _$("button").onclick = insertQuote;
}
