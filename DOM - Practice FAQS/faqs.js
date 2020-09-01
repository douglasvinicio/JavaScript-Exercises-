"use strict";

var $ = function(id) { return document.getElementById(id); };

//The event handler for the click event of each h2 element
var toggle = function(){
    var h2 = this;
    var div = h2.nextElementSibling;

    //Toggle plus and minus image in h2 elements by adding or removing a class
    if(h2.hasAttribute("class")){
        h2.removeAttribute("class")
    } else {
        h2.setAttribute("class", "minus"); 
    }

    if (div.hasAttribute("class")){
        div.removeAttribute("class")
    } else {
        div.setAttribute("class", "open");
    }
};

window.onload = function() {
    //Get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");

    //Attach event handler for each h2 tag
    for (var i = 0; i < h2Elements.length; i++){
        h2Elements[i].onclick = toggle;
    }

    //Set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();
}