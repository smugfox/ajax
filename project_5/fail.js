$(document).ready(function(){
	$.get('missing.html', function(data) {
		$('#myDiv').html(data);
	}).fail(function(jqXHR) {
		$('#myDiv').html('<p>Sorry! ' + jqXHR.statusText + ' error.</p>');
	});
}) //end of ready


//or

$(document).ready(function(){
	$.get('missing.html', function(data) {
		$('#myDiv').html(data);
	}).fail(function(jqXHR) {
		var errorMessage = "<p>Sorry!  There has been an error.";
		errorMessage += "Please try again later.</p>"
		$('#myDiv').html(errorMessage);
	});
}) //end of ready
