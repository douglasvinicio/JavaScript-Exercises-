"use strict";

var $ = function(id) {
    return document.getElementById(id);
};


var joinList = function() {
    
    var emailAddress1 = $('email_address1').value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var errorMessage = "";

    if (emailAddress1 == "") {
        errorMessage = "First email address entry is required."
        $("email_address1").focus();
    } 
    else if(emailAddress2 == ""){
        errorMessage = "Second email address entry is required."
        $("email_address2").focus();
    }
    else if(emailAddress2 != emailAddress1){
        errorMessage = "Both addresses should match!"
        $("email_address2").focus();
    }
    else if(firstName == ""){
        errorMessage = "First name entry is required."
        $("first_name").focus();
    }
    if(errorMessage == ""){
        $("email_form").submit();
    } else {
        alert(errorMessage);
    }
}

window.onload = function(){
    $("join_list").onclick = joinList;
    $("email_address1").focus();
}




