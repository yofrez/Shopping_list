$(document).ready(function(){
$('form').submit(function(){
	var value = $('input[type=text]').val();
	$('ul').append('<li>'+value+'</li>');
	return false;
});

$('ul').on("click",'li',  function() {
	$(this).remove();
	});
})
