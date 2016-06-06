$(document).ready(function(){
	var margin_body = 0;
	var height_window = $(window).height();
   
	$("#index-banner").height(height_window);
	$("#index-banner").marginTop(0);
	
	$(window).resize(function() {
		var height_window = $(window).height();
		$("#index-banner").height(height_window);
	});
	
	
});