$(document).ready(function(){
    $.getJSON("team.json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){
                $("#team").append(
                    "<p><b>Name: </b>" + value.name + "</p>" +
                    "<p><b>Title: </b>" + value.title + "</p>" +
                    "<p><b>Bio: </b>" + value.bio + "</p><hr>"
                );
            });
        });
    });
});