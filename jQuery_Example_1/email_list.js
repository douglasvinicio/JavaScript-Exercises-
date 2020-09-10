"use strict";
$(document).ready(function(){
    $('#join_list').click(function(){
        
        var requiredField = "This field is required.";
        var emailAddress1 = $("#email_address1").val();
        var emailAddress2 = $("#email_address2").val();
        var isValid = true;

        if(emailAddress1 === ""){
            $("#email_address1").next().text(requiredField);
            isValid = false;
        } else {
            $("#email_adress1").next().text("");
        }

        if(emailAddress2 === ""){
            $("#email_address2").next().text(requiredField);
            isValid = false;
        } else if(emailAddress1 != emailAddress2){
            $("#email_address2").next().text(
                "Both emails must match!");
                isValid = false;
        } else {
            $("#email_address2").next().text("");
        }

        if($("#first_name").val() === "") {
            $("#first_name").next().text(requiredField);
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }

        if(isValid){
            $("#email_form").submit();
        }
    });
    //Focusing on Email address 1
    $("#email_address1").focus();
});