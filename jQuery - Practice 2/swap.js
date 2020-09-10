"use strict";

$(document).ready(function(){
    // Preload images
    $("#image_list a").each(function(){
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    //Setup event handlers to links
    $("#image_list a").click(function(evt){
        //Swap images
        var imageURL = $(this).attr("href");
        $("#main_image").attr("src", imageURL);

        //Swap caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        //Cancel the default action of the link
        evt.preventDefault();
    });

    $("li:first-child a").focus();
});