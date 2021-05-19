var index = 0,
    messg = [
        "Just a Sec...", 
        
        "Thank You for your Message!"
    ];

$(".contactButton").on("click", function() {
    $(this).text(function(index, text){
        index = $.inArray(text, messg);
        return messg[++index % messg.length];
    });
});