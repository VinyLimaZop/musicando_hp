$(document).ready(function(){
    var margin_body = 0;
    var height_window = $(window).height();

    $("#index-banner").height(height_window);
    $("#index-banner").marginTop(0);

    $("#header-height").marginBottom(height_window - (height_window * 0.6));

    $(window).resize(function() {
        var height_window = $(window).height();
        $("#index-banner").height(height_window);
    });


});
