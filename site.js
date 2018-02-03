$('document').ready(function(){
	$("#content").hide();


/*About Page*/
	$("#about").on("click",function(){
		$("#description").hide();

		$("#pushedHeader").animate({margin:"-3em"});
	})

function showAbout(){
	
}

/*Contact Page*/
	$("#contact").on("click",function(){
		$("#content").fadeIn(1000).empty(); //Ensure that the div is empty before adding content
		$("#content").html("<h2>Email: rebecca.hom@nyu.edu</h2>"
			+"<h2>Phone: (914) 217-0243</h2>");

		//Animation + styles
		$("#content").css("background-color","rgba(240,248,255,0.9)");
		$("#content").css("width","60%");
		$("#content").css("height","400px");
		$("#content").css("margin","13em auto");
		$("#content").css("margin-bottom","0");
		$("#content").css("padding","1%");
		$("#content").css("text-align","center");
		$("#regHeader").hide();
		$("#pushedHeader").show();
		$("#pushedHeader").animate({margin:"-3em"});
	})

})
