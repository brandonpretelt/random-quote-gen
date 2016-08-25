/****
// Project: Quote Generator
// Author: Brandon Pretelt
// Repo: https://github.com/brandonpretelt/random-quote-gen
****/

// This is a fun little project so I can practice my JavaScript.
// It's also to keep me from being super lazy... haha

var quotes = ["a warrior is as a warrior does", "here and now, breathe and relax", "the method is simple action", "a warrior acts and the fool reacts"];


// this function uses the random method of the Math object
// to randomize the indices of the array parameter that gets passed in

function generateRand(a) {
    'use strict';
    return a[Math.floor(Math.random() * a.length)];
}


// this function just inserts the quote into the
// output. 

function insertQuote() {
    'use strict';
    var o = _(".quote-output");
        o.innerHTML = "<q class=\"bgColor\">" + generateRand(quotes) + "</q>";
}

// jQuery-like selector function. I will use an underscore instead
// of a $ symbol

function _(selector) {
    'use strict';
    return document.querySelector(selector);
}

// checks to see if "addEventListener" method exists

if (document.addEventListener) {
    _("button").addEventListener("click", insertQuote, false);
} else {
    _("button").onclick = insertQuote;
}
