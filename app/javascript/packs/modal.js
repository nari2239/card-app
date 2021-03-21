$(function() {
	setInterval(function(){
		$('#add-icon').click(function() {
			$('#xampleModalCenter').fadeIn();
		});

		$('.btn-primary').click(function() {
			$('#xampleModalCenter').fadeOut();
		});
	}, 1000);

});