$(document).ready(function(){
	var total = 0;

	$('.math div').click(funtion () {
		var num = $(this).text()
		num = parseInt(num)
		total = total + num
		$('#out').html(total);
	})
	
	$("#red").click(function(){
		$("#out").css("background-color", "red");
	});
	
	$("#blue").click(function(){
		$("#out").css("background-color", "blue");
	});
	
	$("#out").click(function(){
		$("#out").css("background-color", "white");
	});

});