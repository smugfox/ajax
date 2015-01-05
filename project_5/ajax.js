$(document).ready(function(){
	$('form').submit(function(evt){
		evt.preventDefault();
		var url = $(this).attr("action");
		var formData = $(this).serialize();
		$.ajax( url, {
			data : formData,
			type : "POST",
			success : function(response) {
				$('#signup').html('<p>Thanks for singing up!</p>');
			}
		})
	})
})