$(function() {
	
	$("#start").show();
	
	$("#restart").click(function(e){
		$("#start").show();
		$("#main").slideUp("fast");
	});
	
	$("#start").keypress(function(e){
		if(e.which == 13){
			var seedval = $("#seed").val();
			if(seedval.indexOf("http://") != 0) alert("Sorry, I need the URI of an entity and this needs to start with 'http://' ...")
			else {
				$("#entity-identity").text(seedval);
				$(this).slideUp("slow");
				$("#main").slideDown("fast");
			}
		}
	});
});