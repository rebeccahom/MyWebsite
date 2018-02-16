var shift = true;
var contactShift = true;
$('document').ready(function(){
	$("#aboutContent").hide();
	$("#contactContent").hide();

/*About Page*/
	$("#about").on("click",function(){
		//Ensure that the contact & about divs do not interfere with each other
		$("#contactContent").hide();
		$("#aboutContent").fadeToggle();
		$("#description").hide();
		if (shift === true){
			$("#pushedHeader").animate({
				marginTop: "-2em"
			});

			shift = false;

		}

		else if (shift === false){
			$("#pushedHeader").animate({
				marginTop: "2em"
			});

			$("#description").fadeIn("1000");
			shift = true;	
		}		
		console.log("Reg: " + shift + " Contact: " + contactShift);
	});
	
/*Contact Page*/
	$("#contact").on("click",function(){
		$("#aboutContent").hide();
		$("#contactContent").fadeToggle();
		$("#description").hide();
		if (contactShift === true){
			$("#pushedHeader").animate({
				marginTop: "-2em"
			});

			contactShift = false;

		}

		else if (contactShift === false){
			$("#pushedHeader").animate({
				marginTop: "2em"
			});

			$("#description").fadeIn("1000");
			contactShift = true;	
		}
		
		
		console.log("Reg: " + shift + " Contact: " + contactShift);
	});	
});	
