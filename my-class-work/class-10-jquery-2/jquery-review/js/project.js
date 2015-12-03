$(document).ready(function () {

//$('.box')
	//.css('background-color','red')
	//.text('IM A BAMF BOX')

$('#box-one').click(increaseBoxOne)
$('#box-two').click(increaseBoxTwo)

function increaseBoxOne () {
	$("#box-one")
		.css({
			'height': '500px', 
			'width': '500px'
		})
}

function increaseBoxTwo () {
	$("#box-two")
		.css({
			'height': '500px', 
			'width': '500px'
		})
}

}