$('document').ready(function(){
	$("#content").hide();
	$("#pushedHeader").hide();
/*About Page*/
	$("#about").on("click",function(){
		$("#content").fadeIn(1000).empty(); //Ensure that the div is empty before adding content
		$("#content").html("<p>I am currently a junior at NYU in the College of Arts and Science majoring in Computer Science and minoring in Web Programming and Applications. "
			+ "Here is my coding experience: </p>"
			+ "<ul><li>Two years of Java</li>"
			+ "<li>Two years of HTML/CSS</li>"
			+ "<li>A little experience coding in Python, C, JavaScript, jQuery, PHP, and MySQL</li></ul>"
			+ "<p>I also have some graphic design experience - I am familiar with Adobe Illustrator and have made graphics that can be found in my portfolio. "
			+ "<br/><br/>If you would like to see my resume, please inquire via my Contact page. Thank you!</p>");
		
		//Animation + styles
		$("#content").css("background-color","rgba(240,248,255,0.9)");
		$("#content").css("width","60%");
		$("#content").css("height","400px");
		$("#content").css("margin","13em auto");
		$("#content").css("margin-bottom","0");
		$("#content").css("padding","1%");
		$("#content").css("text-align","justify");
		$("#regHeader").hide();
		$("#pushedHeader").show();
		$("#pushedHeader").animate({margin:"-3em"});
	})

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