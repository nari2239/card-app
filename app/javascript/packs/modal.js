$(function() {
	setInterval(function(){
		$('#add-icon').click(function() {
			$('#exampleModalCenter').fadeIn();
		});

		$('#close-btn').click(function() {
			$('#exampleModalCenter').fadeOut();
		});
	}, 1000);

});