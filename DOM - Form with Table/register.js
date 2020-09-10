"use strict";

var $ = function(id){ return document.getElementById(id); };

var processEntries = function() {

    var isValid = true;

    var header = "";
    var html = "";
    var required = "<span>Required field</span>";
    var msg = "Please review your entries and complete all required fields.";

    //Get values for user entries
    var email = $("email_address").value;
    var phone = $("mobile_phone").value;
    var country = $("country").value;
    var contact = "Text";
    var terms = $("terms").checked;

    if($("email").checked) { contact = "Email";}
    if($("none").checked) { contact = "None";}

    if (email == ""){
        email = required;
        header = msg;
    }

    if (phone == ""){
        phone = required;
        header = msg;
    }

    if (country == ""){
        country = required;
        header = msg;
    }

    if (terms == false){
        terms = required;
        header = msg;
    }

    $("registration_header").firstChild.nodeValue = header;
    if (header == msg){
        html = "<tr><td>Email: </td><td>" + email + "</td></tr>";
        html += "<tr><td>Phone: </td><td>" + phone + "</td></tr>";
        html += "<tr><td>Country: </td><td>" + country + "</td></tr>";
        html += "<tr><td>Contact: </td><td>" + contact + "</td></tr>";
        html += "<tr><td>Terms: </td><td>" + terms + "</td></tr>";
        $("registration_info").innerHTML = html;
    } else {
        $("registration_info").innerHTML = "";
        alert("Success!");
    }
};

var resetForm = function() {
    $("registration_form").reset();
    $("registration_header").firstChild.nodeValue = "";
    $("registration_info").innerHTML = "";
    $("email_address").focus();
};

window.onload = function(){
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;
    $("email_address").focus();
};