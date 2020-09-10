$(document).ready(function(){
    $.get("team.txt", function(data){
        $(data).find("management").children().each(function(){
            var xmlDoc = $(this);
            $("#team").append("<h3>" + 
            xmlDoc.find("name").text() + "</h3>" +
            xmlDoc.find("title").text() + "<br>" +
            xmlDoc.find("bio").text() + "<br>");
        });
    }, "xml");
});